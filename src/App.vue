<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/krtcMap">高雄捷運與輕軌地圖</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
