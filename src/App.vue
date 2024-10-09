<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <RouterLink to="/"><span class="material-symbols-outlined"> home </span></RouterLink>
    <RouterLink to="/krtcMap">高雄捷運與輕軌地圖</RouterLink>
  </header>

  <RouterView />
</template>

<style scoped></style>
