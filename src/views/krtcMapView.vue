<script setup>
import { ref } from 'vue';
import stationPic from '@/components/stationPic.vue';
import { useKRTCStore } from '../store/krtcMapData.js';
const store = useKRTCStore();
let cardType = ref(1);
const changeType = (num) => {
  cardType.value = num;
};
const { changeDiscount } = store;
</script>
<template>
  <div>
    <a type="button" @click.prevent="changeType(1)"
      ><span class="material-symbols-outlined"> transit_ticket </span>
      <span>單程票</span>
    </a>
    <a type="button type-btn" @click.prevent="changeType(2)"
      ><span class="material-symbols-outlined"> credit_card </span> <span>電子票證</span></a
    >
    <select v-if="cardType === 1" @change="changeDiscount($event.target.value)" name="" id="">
      <option value="1">一般票</option>
      <option value="0.5">社福票</option>
    </select>
    <select v-if="cardType === 2" @change="changeDiscount($event.target.value)" name="" id="">
      <option value="0.85">普卡/學生卡/高雄市仁愛卡/icash/聯名卡</option>
      <option value="0.425">高雄市社福卡/社福卡</option>
      <option value="0.5">高雄市兒童卡</option>
    </select>
  </div>
  <stationPic />
</template>

<style lang="scss" scoped>
.type-btn {
  display: flex;
  flex-direction: column;
}
</style>
