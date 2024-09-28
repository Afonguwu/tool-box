<script setup>
import { ref } from 'vue';
import {
  r,
  strokeWidth,
  stationData,
  viewBox,
  lightRailPoints,
  redLinePoints,
  orangeLinePoints
} from '../store/krtcMapData.js';
let currentStation = null;
let currentDiscount = 0;
const basePrice = 20;
const commonDiscount = 0.85;
const elderDiscount = 0.425;
const childrenDiscount = 0.5;
let showFee = ref(false);
const calculateFee = function (startStation, category) {
  //起始站 index
  currentStation = startStation - 1;
  //顯示價格文字
  showFee.value = currentStation == null ? false : true;
  //初始化 fee
  stationData.value.forEach((element) => {
    element.fee = 0;
  });
  // 起始站
  stationData.value[currentStation].fee = 'here';
  //捷運還是輕軌
  let min = 0;
  let max = 0;
  if (category === 'red' || category === 'orange') {
    min = 0;
    max = 37;
  } else if (category === 'lightRail') {
    min = 38;
    max = 75;
  }
  //計算距離
  for (let i = min; i <= max; i++) {
    if (i === currentStation) continue;
    let priceRange = 0;
    let num = Math.abs(
      Math.round(stationData.value[i].distance - stationData.value[currentStation].distance)
    );
    if (num < 5) {
      priceRange = 0;
    } else if (num >= 5 && num < 17) {
      priceRange = 1 + Math.ceil((num - 5) / 2);
    } else if (num >= 17) {
      let count = 1 + Math.ceil((num - 5) / 2) + Math.ceil((num - 17) / 3);
      if (count >= 8) {
        priceRange = 8;
      } else if (count < 8) {
        priceRange = count;
      }
    }
    //單程票
    if (currentDiscount === 0) {
      stationData.value[i].fee = basePrice + 5 * priceRange;
    }
  }
};

/* const calculateFee = function (currentStation) {
  stationData.value.forEach((element, index) => {
    let distance = element[currentStation - index];
    if (distance === 0) {
      element.fee = 'here';
    }
  });
}; */
</script>
<template>
  <svg
    v-bind:viewBox="viewBox"
    style="width: 100%; height: auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* light rail */}
    <polyline
      :points="lightRailPoints"
      fill="none"
      stroke="#7fbf3d"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {/* red line */}
    <polyline
      :points="redLinePoints"
      fill="none"
      stroke="#de0041"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {/* orange line */}
    <polyline
      :points="orangeLinePoints"
      fill="none"
      stroke="#f49b0f"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <slot v-for="station in stationData" :key="station.seq">
      <text :x="station.x" :y="station.y" font-size="1rem" :text-anchor="station.textAnchor">
        <tspan :fill="station.class" font-weight="bolder">{{ station.stationNum }}</tspan>
        {{ station.chineseName }}
      </text>
      <circle
        :r="r"
        :cx="station.cx"
        :cy="station.cy"
        fill="#fff"
        :stroke-width="strokeWidth"
        class="site"
        :class="station.class"
        @click="calculateFee(station.seq, station.class)"
      ></circle>
      <text :x="station.cx" :y="station.cy" text-anchor="middle" dy=".5rem" v-if="showFee">
        {{ station.fee }}
      </text>
    </slot>
  </svg>
</template>
<style lang="scss">
.site {
  cursor: pointer;
}
.red {
  stroke: #de0041;
}
.orange {
  stroke: #f49b0f;
}
.specialOrange {
  fill: none;
  stroke-width: 1.5;
  stroke: #f49b0f;
}
</style>
