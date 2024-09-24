<script setup>
let x = 1600
let y = 2200
let strokeWidth = 10
let gapX = x * 0.1
let gapY = y * 0.1

let lightRailPoints = `${x * 0.1},${y * 0.5} ${x * 0.4},${y * 0.5} ${x * 0.5},${y * 0.55} ${x * 0.5},${y * 0.75} ${x * 0.3},${y * 0.85} ${x * 0.1},${y * 0.7} ${x * 0.1},${y * 0.5}`
let redLinePoints = `${x * 0.3},${y * 0.1} ${x * 0.3},${y * 0.7} ${x * 0.5},${y * 0.85} ${x * 0.8},${y * 0.85}`
let orangeLinePoints = `${x * 0.1},${y * 0.65} ${x * 0.25},${y * 0.65} ${x * 0.28},${y * 0.6} ${x * 0.8},${y * 0.6} ${x * 0.85},${y * 0.65}`
</script>
<template>
  <svg
    v-bind:viewBox="'0 0 ' + x + ' ' + y"
    style="width: 100%; height: auto; max-height: 100vh"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* light rail */}
    <polyline
      :points="lightRailPoints"
      fill="none"
      stroke="#7fbf3d"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {/* red line */}
    <polyline
      :points="redLinePoints"
      fill="none"
      stroke="#de0041"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {/* orange line */}
    <polyline
      :points="orangeLinePoints"
      fill="none"
      stroke="#f49b0f"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style lang="scss" scoped></style>
