<script setup>
import { useKRTCStore } from '../store/krtcMapData.js';
const store = useKRTCStore();
const {
  viewBox,
  lightRailPoints,
  redLinePoints,
  orangeLinePoints,
  stationData,
  r,
  strokeWidth,
  showFee,
  calculateFee
} = store;
</script>
<template>
  <svg :viewBox="viewBox" style="width: 100%; height: auto" xmlns="http://www.w3.org/2000/svg">
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
