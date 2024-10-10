<script setup>
import { ref } from 'vue';
import stationPic from '@/components/StationPic.vue';
import { useKRTCStore } from '@/store/krtcMapData.js';
const store = useKRTCStore();
const { changeDiscount } = store;
let select1 = ref('');
let select2 = ref('');
let cardType = ref(1);
const changeType = (num) => {
  select1.value = '';
  select2.value = '';
  if (num === 1) {
    changeDiscount(1);
  } else if (num === 2) {
    changeDiscount(0.85);
  }
  cardType.value = num;
};
</script>
<template>
  <div class="flex mt-1">
    <a
      class="btn"
      :class="cardType === 1 ? 'active' : 'disabled'"
      type="button"
      @click.prevent="changeType(1)"
      ><span class="material-symbols-outlined"> transit_ticket </span>
      <span>單程票</span>
    </a>
    <a
      class="btn"
      :class="cardType === 2 ? 'active' : 'disabled'"
      type="button"
      @click.prevent="changeType(2)"
      ><span class="material-symbols-outlined"> credit_card </span> <span>電子票證</span>
    </a>
    <select
      class="col"
      v-if="cardType === 1"
      @change="changeDiscount($event.target.value)"
      v-model="select1"
      name=""
      id=""
    >
      <option disabled value="">請選擇</option>
      <option value="1">一般票</option>
      <option value="0.5">社福票</option>
      //顯示文字只有捷運才有單程社福票
    </select>
    <select
      class="col"
      v-if="cardType === 2"
      @change="changeDiscount($event.target.value)"
      v-model="select2"
      name=""
      id=""
    >
      <option disabled value="">請選擇</option>
      <option value="0.85">普卡/學生卡/高雄市仁愛卡/icash</option>
      <option value="0.425">高雄市社福卡/社福卡</option>
      //做顯示文字：高雄社福卡搭乘輕軌免費
      <option value="0.5">高雄市兒童卡</option>
    </select>
  </div>
  <p class="mt-1 notice" v-if="select1 === '0.5'">提醒：只有捷運有單程社福票</p>
  <p class="mt-1 notice" v-if="select2 === '0.425'">提醒：高雄市社福卡搭乘輕軌免費</p>
  <stationPic />
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.col {
  flex: 0 1 25%;
}
.mt-1 {
  margin-top: 1rem;
}
.btn {
  flex: 0 2 15%;
  margin-right: 1rem;
  min-width: 110px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid #d94800;
  border-radius: 8px;
  &:hover {
    background-color: #f49b36;
    color: #fff;
    border-color: #f49b36;
  }
}
.active {
  background-color: #d94800;
  color: #fff;
}
.disabled {
  background-color: #fff;
  color: #f49b36;
  border-color: #f49b36;
}
.notice {
  color: #9d8b0f;
}
</style>
