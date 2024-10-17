<script setup>
import { computed, ref } from 'vue';
import stationPic from '@/components/StationPic.vue';
import { useKRTCStore } from '@/store/krtcMapData.js';
const store = useKRTCStore();
const { changeDiscount, displayTime } = store;
let select1 = ref('');
let select2 = ref('');
const btnType = computed(() => {
  return store.btnType;
});
const changeType = (num) => {
  select1.value = '';
  select2.value = '';
  if (num === 1) {
    changeDiscount(1);
    displayTime(0, num);
  } else if (num === 2) {
    changeDiscount(0.85);
    displayTime(0, num);
  } else if (num === 3) {
    displayTime(1, num);
  }
};
</script>
<template>
  <div class="container-xl mt-2">
    <div class="row d-flex flex-column flex-md-row">
      <div class="col-12 col-md-4">
        <div class="col-12 row g-1 d-flex flex-md-row">
          <div class="col-5 me-1">
            <div class="col-12">
              <a
                class="btn-orange w-100 text-nowrap"
                :class="btnType === 1 ? 'active' : 'disabled'"
                type="button"
                @click.prevent="changeType(1)"
                ><span class="material-symbols-outlined"> transit_ticket </span>
                <span>單程票</span>
              </a>
            </div>
            <div class="col-12 mt-1">
              <a
                class="btn-orange w-100 text-nowrap"
                :class="btnType === 2 ? 'active' : 'disabled'"
                type="button"
                @click.prevent="changeType(2)"
                ><span class="material-symbols-outlined"> credit_card </span> <span>電子票證</span>
              </a>
            </div>
            <div class="col-12 mt-1">
              <a
                class="btn-orange w-100 text-nowrap"
                :class="btnType === 3 ? 'active' : 'disabled'"
                type="button"
                @click.prevent="changeType(3)"
                ><span class="material-symbols-outlined"> schedule </span>
                <span>行車時間</span>
              </a>
            </div>
          </div>
          <div class="col-6 h-50 row g-1">
            <select
              class="w-100"
              v-if="btnType === 1"
              @change="changeDiscount($event.target.value)"
              v-model="select1"
              name=""
              id=""
            >
              <option disabled value="">請選擇</option>
              <option value="1">一般票</option>
              <option value="0.5">社福票</option>
            </select>
            <select
              class="w-100"
              v-if="btnType === 2"
              @change="changeDiscount($event.target.value)"
              v-model="select2"
              name=""
              id=""
            >
              <option disabled value="">請選擇</option>
              <option value="0.85">普卡/學生卡/高雄市仁愛卡/icash</option>
              <option value="0.425">高雄市社福卡/社福卡</option>
              <option value="0.5">高雄市兒童卡</option>
            </select>
          </div>
        </div>
        <div class="col-12 mt-1">
          <p class="notice text-nowrap" v-if="select1 === '0.5'">提醒：只有捷運有單程社福票</p>
          <p class="notice text-nowrap" v-if="select2 === '0.425'">
            提醒：高雄市社福卡搭乘輕軌免費
          </p>
          <p class="notice text-nowrap" v-if="btnType === 3">提醒：輕軌行駛方向會影響行車時間</p>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <stationPic />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-orange {
  font-size: 0.8rem;
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
  background-color: var(--color-background);
  color: #f49b36;
  border-color: #f49b36;
}
select {
  background-color: var(--color-background);
  color: var(--color-text);
}
.notice {
  color: #f49b36;
}
</style>
