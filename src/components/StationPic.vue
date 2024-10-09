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
    <text x="50" y="150" font-size="2rem" font-weight="bolder">高雄捷運輕軌路線圖</text>
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
    <template v-for="(station, i) in stationData" :key="station.seq">
      <text
        :x="station.x"
        :y="station.y"
        font-size="1rem"
        :text-anchor="station.textAnchor"
        :transform="station.transform"
      >
        <tspan :fill="station.class" font-weight="bolder">{{ station.stationNum }}</tspan>
        {{ station.chineseName }}
      </text>
      <circle
        :r="i === 28 ? 20 : r"
        :cx="station.cx"
        :cy="station.cy"
        :fill="i === 28 ? 'none' : station.fee === 'boy' ? '#fefc4d' : '#fff'"
        :stroke-width="strokeWidth"
        class="site"
        :class="station.class"
        @click="calculateFee(station.seq, station.class)"
      ></circle>
      <text
        :x="station.cx"
        :y="station.cy"
        text-anchor="middle"
        dominant-baseline="middle"
        class="site"
        dy=".2rem"
        v-show="station.fee !== 0"
        @click="calculateFee(station.seq, station.class)"
      >
        <tspan class="material-symbols-outlined here" v-if="station.fee === 'boy'" dy=".4rem">
          {{ station.fee }}
        </tspan>
        <tspan class="" v-else>{{ station.fee }}</tspan>
      </text>
    </template>
    <rect
      width="20%"
      height="23%"
      x="1000"
      y="200"
      fill="none"
      stroke="#c1c1c1"
      rx="12"
      ry="12"
      stroke-width="3"
    />
    <text x="1020" y="240" font-size="1.5rem">營運路線</text>
    <line x1="1020" y1="250" x2="1300" y2="250" stroke="#c1c1c1" />
    <circle r="18" cx="1040" cy="280" fill="#fff" stroke-width="5" class="red" />
    <text x="1110" y="288">紅線（岡山車站 － 小港）</text>
    <circle r="18" cx="1040" cy="340" fill="#fff" stroke-width="5" class="orange" />
    <text x="1110" y="348">橘線（哈瑪星 － 大寮）</text>
    <circle r="18" cx="1040" cy="400" fill="#fff" stroke-width="5" class="green" />
    <text x="1110" y="408">輕軌</text>

    <text x="1020" y="460" font-size="1.5rem">圖示</text>
    <line x1="1020" y1="470" x2="1300" y2="470" stroke="#c1c1c1" />
    <circle r="16" cx="1040" cy="500" fill="#fff" stroke-width="5" class="red" />
    <circle r="16" cx="1075" cy="500" fill="#fff" stroke-width="5" class="green" />
    <circle r="16" cx="1040" cy="550" fill="#fff" stroke-width="5" class="orange" />
    <circle r="16" cx="1075" cy="550" fill="#fff" stroke-width="5" class="green" />
    <text x="1110" y="530">輕軌轉乘站</text>
    <circle r="16" cx="1044" cy="610" fill="#fff" stroke-width="5" class="red" />
    <circle r="20" cx="1044" cy="610" fill="none" stroke-width="5" class="orange" />
    <text x="1110" y="618">交會站</text>
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
.green {
  stroke: #7fbf3d;
}
.here {
  font-size: 1.5rem;
}
</style>
