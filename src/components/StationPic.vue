<script setup>
import {
  r,
  strokeWidth,
  stationData,
  viewBox,
  lightRailPoints,
  redLinePoints,
  orangeLinePoints
} from '../store/krtcMapData.js';
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
        <tspan fill="#de0041" font-weight="bolder">{{ station.stationNum }}</tspan>
        {{ station.chineseName }}
      </text>
      <circle
        :r="r"
        :cx="station.cx"
        :cy="station.cy"
        fill="#fff"
        stroke="#de0041"
        :stroke-width="strokeWidth"
        class="site"
        :class="station.class"
        :sqe="station.sqe"
        @click="currentStation = station.sqe"
      ></circle>
      <text :x="station.cx" :y="station.cy" text-anchor="middle" dy=".5rem">{{ station.fee }}</text>
    </slot>
  </svg>
</template>
<style lang="scss">
.site {
  cursor: pointer;
}
</style>
