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
  <header class="d-flex p-1 sticky-top">
    <RouterLink class="item" to="/"
      ><span class="material-symbols-outlined"> home </span></RouterLink
    >

    <div class="ms-auto position-relative">
      <a type="button" class="item" @click="showMenu">
        <span class="material-symbols-outlined"> menu </span>
      </a>
    </div>

    <ul v-if="menu" class="menu" @mouseleave="closeMenu" @touchend="closeMenu">
      <li>
        <RouterLink to="/krtcMap" class=""
          ><span class="material-symbols-outlined"> train </span>高雄捷運與輕軌地圖</RouterLink
        >
      </li>
    </ul>
  </header>
</template>
<style lang="scss" scoped>
header {
  background-color: #274483;
}
.item {
  border-radius: 12px;
  color: #aac1f0;
  &:hover {
    background-color: #aac1f0;
    color: #274483;
  }
}

.menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: #aac1f0;
  li {
    border: 1px solid #aac1f0;
  }
  a {
    padding: 0.5rem;
    width: 100%;
    color: #274483;
    border-radius: 0;
    &:hover {
      color: #aac1f0;
      background: #274483;
    }
  }
}
</style>
