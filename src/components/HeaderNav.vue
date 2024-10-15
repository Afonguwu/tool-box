<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
let menu = ref(0);
const showMenu = () => {
  menu.value = 1;
};
const closeMenu = () => {
  menu.value = 0;
};
</script>
<template>
  <header class="flex">
    <RouterLink to="/"><span class="material-symbols-outlined"> home </span></RouterLink>

    <div class="ml-a flex">
      <a type="button" @click="showMenu">
        <span class="material-symbols-outlined"> menu </span>
      </a>
    </div>

    <ul v-if="menu" class="menu" @mouseleave="closeMenu" @touchend="closeMenu">
      <li>
        <RouterLink to="/krtcMap" class="ai-center"
          ><span class="material-symbols-outlined"> train </span>高雄捷運與輕軌地圖</RouterLink
        >
      </li>
      <li><a href="">2</a></li>
      <li><a href="">3</a></li>
    </ul>
  </header>
</template>
<style scoped></style>
