<script setup>
import { computed } from 'vue';
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
  calculateFee,
  calculateTime
} = store;

const showTime = computed(() => {
  return store.showTime;
});
</script>
<template>
  <svg :viewBox="viewBox" style="width: 100%; height: auto" xmlns="http://www.w3.org/2000/svg">
    <text x="50" y="150" font-size="2rem" font-weight="bolder" class="title-color">
      高雄捷運輕軌路線圖
    </text>
    {/* light rail */}
    <polyline
      :points="lightRailPoints"
      fill="none"
      class="green"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {/* red line */}
    <polyline
      :points="redLinePoints"
      fill="none"
      class="red"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {/* orange line */}
    <polyline
      :points="orangeLinePoints"
      fill="none"
      class="orange"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <template v-if="showTime === 0">
      <template v-for="(station, i) in stationData" :key="station.seq">
        <text
          :x="station.x"
          :y="station.y"
          font-size="1rem"
          class="text-color"
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
          :fill="i === 28 ? 'none' : station.display === 'boy' ? '#fefc4d' : '#ffffff'"
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
          v-show="station.display !== 0"
          @click="calculateFee(station.seq, station.class)"
        >
          <tspan class="material-symbols-outlined here" v-if="station.display === 'boy'">
            {{ station.display }}
          </tspan>
          <tspan class="" v-else>{{ station.display }}</tspan>
        </text>
      </template>
    </template>
    <template v-if="showTime === 1">
      <template v-for="(station, i) in stationData" :key="station.seq">
        <text
          :x="station.x"
          :y="station.y"
          font-size="1rem"
          class="text-color"
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
          :fill="i === 28 ? 'none' : station.display === 'boy' ? '#fefc4d' : '#ffffff'"
          :stroke-width="strokeWidth"
          class="site"
          :class="station.class"
          @click="calculateTime(station.seq, station.class)"
        ></circle>
        <text
          :x="station.cx"
          :y="station.cy"
          text-anchor="middle"
          dominant-baseline="middle"
          class="site"
          dy=".2rem"
          v-show="station.display !== 0"
          @click="calculateTime(station.seq, station.class)"
        >
          <tspan class="material-symbols-outlined here" v-if="station.display === 'boy'">
            {{ station.display }}
          </tspan>
          <tspan class="" v-else>{{ station.display }}</tspan>
        </text>
      </template>
    </template>
    <rect
      width="20%"
      height="23%"
      x="1000"
      y="200"
      fill="none"
      class="border-color"
      rx="12"
      ry="12"
      stroke-width="2"
    />
    <text x="1020" y="240" font-size="1.5rem" class="text-color">營運路線</text>
    <line x1="1020" y1="250" x2="1280" y2="250" class="border-color" />
    <circle r="18" cx="1040" cy="280" fill="#fff" stroke-width="5" class="red" />
    <text x="1110" y="288" class="text-color">紅線（岡山車站 － 小港）</text>
    <circle r="18" cx="1040" cy="340" fill="#fff" stroke-width="5" class="orange" />
    <text x="1110" y="348" class="text-color">橘線（哈瑪星 － 大寮）</text>
    <circle r="18" cx="1040" cy="400" fill="#fff" stroke-width="5" class="green" />
    <text x="1110" y="408" class="text-color">輕軌</text>

    <text x="1020" y="460" font-size="1.5rem" class="text-color">圖示</text>
    <line x1="1020" y1="470" x2="1280" y2="470" class="border-color" />
    <circle r="16" cx="1040" cy="500" fill="#fff" stroke-width="5" class="red" />
    <circle r="16" cx="1075" cy="500" fill="#fff" stroke-width="5" class="green" />
    <circle r="16" cx="1040" cy="550" fill="#fff" stroke-width="5" class="orange" />
    <circle r="16" cx="1075" cy="550" fill="#fff" stroke-width="5" class="green" />
    <text x="1110" y="530" class="text-color">輕軌轉乘站</text>
    <circle r="16" cx="1044" cy="610" fill="#fff" stroke-width="5" class="red" />
    <circle r="20" cx="1044" cy="610" fill="none" stroke-width="5" class="orange" />
    <text x="1110" y="618" class="text-color">紅橘線交會站</text>
  </svg>
</template>
<style lang="scss" scoped>
.title-color {
  stroke-width: 0.5;
  stroke: var(--color-text);
  fill: var(--color-mrt-orange);
}

.site {
  cursor: pointer;
}

.red {
  stroke: var(--color-mrt-red);
}
.orange {
  stroke: var(--color-mrt-orange);
}
.green {
  stroke: var(--color-mrt-green);
}
.here {
  font-size: 1.5rem;
}

.text-time {
  fill: #c48b06;
  font-weight: bolder;
}
</style>
