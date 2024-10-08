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
    <template v-for="(station,i) in stationData" :key="station.seq">
      <text :x="station.x" :y="station.y" font-size="1rem" :text-anchor="station.textAnchor" :transform="station.transform">
        <tspan :fill="station.class" font-weight="bolder">{{ station.stationNum }}</tspan>
        {{ station.chineseName }}
      </text>
      <circle
        :r="i === 28 ? 20 : r"
        :cx="station.cx"
        :cy="station.cy"
        :fill="i === 28 ? 'none' : '#fff'"
        :stroke-width="strokeWidth"
        class="site"
        :class="station.class"
        @click="calculateFee(station.seq, station.class)"
      ></circle>
      <text :x="station.cx" :y="station.cy" text-anchor="middle" dy=".5rem" v-show="station.fee!==0" @click="calculateFee(station.seq, station.class)">
        {{ station.fee }}
      </text>
    </template>
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
.green{
  stroke: #7fbf3d;
}
</style>
