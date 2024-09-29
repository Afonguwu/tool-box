import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
export const useKRTCStore = defineStore('krtcDataStore', () => {
  const x = ref(1600);
  const y = ref(2200);
  const r = ref(16);
  const strokeWidth = ref(5);
  const viewBox = computed(() => `0 0 ${x.value} ${y.value}`);
  const lightRailPoints = computed(
    () =>
      `${x.value * 0.1},${y.value * 0.5} ${x.value * 0.4},${y.value * 0.5} ${x.value * 0.5},${y.value * 0.55} ${x.value * 0.5},${y.value * 0.75} ${x.value * 0.3},${y.value * 0.85} ${x.value * 0.1},${y.value * 0.7} ${x.value * 0.1},${y.value * 0.5}`
  );
  const redLinePoints = computed(
    () =>
      `${x.value * 0.3},${y.value * 0.1} ${x.value * 0.3},${y.value * 0.7} ${x.value * 0.5},${y.value * 0.85} ${x.value * 0.7},${y.value * 0.85}`
  );
  const orangeLinePoints = computed(
    () =>
      `${x.value * 0.1},${y.value * 0.65} ${x.value * 0.25},${y.value * 0.65} ${x.value * 0.28},${y.value * 0.6} ${x.value * 0.8},${y.value * 0.6} ${x.value * 0.85},${y.value * 0.65}`
  );
  let redGap = computed(() => r.value * 4);
  const stationData = ref([
    // red
    {
      seq: 1,
      stationNum: 'R3',
      chineseName: '小港',
      cx: x.value * 0.7,
      cy: y.value * 0.85,
      x: x.value * 0.7,
      y: y.value * 0.85 + r.value * 2.5,
      textAnchor: 'middle',
      class: 'red',
      fee: 0,
      distance: 0
    },
    {
      seq: 2,
      stationNum: 'R4',
      chineseName: '高雄國際機場',
      cx: x.value * 0.6,
      cy: y.value * 0.85,
      x: x.value * 0.6,
      y: y.value * 0.85 + r.value * 2.5,
      textAnchor: 'middle',
      class: 'red',
      fee: 0,
      distance: 1.4
    },
    {
      seq: 3,
      stationNum: 'R4A',
      chineseName: '草衙',
      cx: x.value * 0.5,
      cy: y.value * 0.85,
      x: x.value * 0.5,
      y: y.value * 0.85 + r.value * 2.5,
      textAnchor: 'middle',
      class: 'red',
      fee: 0,
      distance: 3.12
    },
    {
      seq: 4,
      stationNum: 'R5',
      chineseName: '前鎮高中',
      cx: x.value * 0.45 + r.value * 2,
      cy: y.value * 0.825,
      x: x.value * 0.45 + r.value * 4,
      y: y.value * 0.825 + r.value * 0.5,
      textAnchor: 'start',
      class: 'red',
      fee: 0,
      distance: 4.22
    },
    {
      seq: 5,
      stationNum: 'R6',
      chineseName: '凱旋',
      cx: x.value * 0.425 - r.value * 1,
      cy: y.value * 0.79,
      x: x.value * 0.425 - r.value * 3,
      y: y.value * 0.79 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 5.41
    },
    {
      seq: 6,
      stationNum: 'R7',
      chineseName: '獅甲',
      cx: x.value * 0.3 + r.value * 2,
      cy: y.value * 0.7 + r.value * 2,
      x: x.value * 0.3 + r.value * 4.5,
      y: y.value * 0.7 + r.value * 2.5,
      textAnchor: 'start',
      class: 'red',
      fee: 0,
      distance: 7
    },
    {
      seq: 7,
      stationNum: 'R8',
      chineseName: '三多商圈',
      cx: x.value * 0.3,
      cy: y.value * 0.7 - r.value * 4.375,
      x: x.value * 0.3 + r.value * 2.5,
      y: y.value * 0.7 - r.value * 3.875,
      textAnchor: 'start',
      class: 'red',
      fee: 0,
      distance: 7.64
    },
    {
      seq: 8,
      stationNum: 'R9',
      chineseName: '中央公園',
      cx: x.value * 0.3,
      cy: y.value * 0.6 + r.value * 4.375,
      x: x.value * 0.3 + r.value * 2.5,
      y: y.value * 0.6 + r.value * 4.875,
      textAnchor: 'start',
      class: 'red',
      fee: 0,
      distance: 8.89
    },
    {
      seq: 9,
      stationNum: 'R10',
      chineseName: '美麗島',
      cx: x.value * 0.3,
      cy: y.value * 0.6,
      x: x.value * 0.3 - r.value * 3.5,
      y: y.value * 0.6 - r.value * 2,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 9.1
    },
    {
      seq: 10,
      stationNum: 'R11',
      chineseName: '高雄車站',
      cx: x.value * 0.3,
      cy: y.value * 0.6 - r.value * 5,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.6 - r.value * 4.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 9.81
    },
    {
      seq: 11,
      stationNum: 'R12',
      chineseName: '後驛',
      cx: x.value * 0.3,
      cy: y.value * 0.5 + r.value * 5,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.5 + r.value * 5.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 10.61
    },
    {
      seq: 12,
      stationNum: 'R13',
      chineseName: '凹子底',
      cx: x.value * 0.3,
      cy: y.value * 0.5,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.5 + r.value * 2,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 11.49
    },
    {
      chineseName: '巨蛋',
      seq: 13,
      stationNum: 'R14',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 12,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 12 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 12.42
    },
    {
      chineseName: '生態園區',
      seq: 14,
      stationNum: 'R15',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 11,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 11 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 13.34
    },
    {
      chineseName: '左營',
      seq: 15,
      stationNum: 'R16',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 10,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 10 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 14.42
    },
    {
      seq: 16,
      stationNum: 'R17',
      chineseName: '世運',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 9,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 9 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 16.11
    },
    {
      chineseName: '油廠國小',
      seq: 17,
      stationNum: 'R18',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 8,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 8 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 16.82
    },
    {
      seq: 18,
      stationNum: 'R19',
      chineseName: '楠梓科技園區',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 7,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 7 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 17.75
    },
    {
      seq: 19,
      stationNum: 'R20',
      chineseName: '後勁',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 6,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 6 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 17.93
    },
    {
      seq: 20,
      stationNum: 'R21',
      chineseName: '都會公園',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 5,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 5 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 18.58
    },
    {
      seq: 21,
      stationNum: 'R22',
      chineseName: '青埔',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 4,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 4 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 20.27
    },
    {
      seq: 22,
      stationNum: 'R22A',
      chineseName: '橋頭糖廠',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 3,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 3 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 21.32
    },
    {
      seq: 23,
      stationNum: 'R23',
      chineseName: '橋頭火車站',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 2,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 2 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 22.16
    },
    {
      chineseName: '岡山高醫',
      seq: 24,
      stationNum: 'R24',
      cx: x.value * 0.3,
      cy: y.value * 0.1 + redGap.value * 1,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + redGap.value * 1 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 24.58
    },
    {
      seq: 24,
      stationNum: 'RK1',
      chineseName: '岡山車站',
      cx: x.value * 0.3,
      cy: y.value * 0.1,
      x: x.value * 0.3 - r.value * 2,
      y: y.value * 0.1 + r.value * 0.5,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 25.92
    }
    // orange
  ]);
  let currentStation = ref(null);
  let currentDiscount = ref(1);
  const changeDiscount = (discount) => {
    currentDiscount.value = discount;
  };
  const basePrice = ref(20);
  const commonDiscount = ref(0.85);
  const elderDiscount = ref(0.425);
  const childrenDiscount = ref(0.5);
  let showFee = ref(false);
  const calculateFee = function (startStation, category) {
    if (startStation < 1 || startStation > stationData.value.length) {
      console.error('Invalid startStation index');
      return;
    }
    //起始站 index
    currentStation.value = startStation - 1;
    //顯示價格文字
    showFee.value = currentStation.value !== null;
    //初始化 fee
    stationData.value.forEach((element) => {
      element.fee = 0;
    });

    if (currentStation.value < 0 || currentStation.value >= stationData.value.length) {
      console.error('Invalid currentStation index');
      return;
    }

    // 起始站
    stationData.value[currentStation.value].fee = 'here';

    //捷運還是輕軌
    let min = 0;
    let max = 0;
    if (category === 'red' || category === 'orange') {
      min = 0;
      max = 37;
    } else if (category === 'lightRail') {
      min = 38;
      max = 75;
    }
    //計算距離
    for (let i = min; i <= max; i++) {
      if (i === currentStation.value) continue;
      let priceRange = 0;
      let num = Math.abs(
        Math.round(stationData.value[i].distance - stationData.value[currentStation.value].distance)
      );

      if (num < 5) {
        priceRange = 0;
      } else if (num >= 5 && num < 17) {
        priceRange = 1 + Math.ceil((num - 5) / 2);
      } else if (num >= 17) {
        let count = 1 + Math.ceil((num - 5) / 2) + Math.ceil((num - 17) / 3);
        priceRange = count >= 8 ? 8 : count;
      }
      //單程票
      if (currentDiscount.value === 1) {
        stationData.value[i].fee = (basePrice.value + 5 * priceRange) * 1;
      } else {
        stationData.value[i].fee = (basePrice.value + 5 * priceRange) * 1;
      }
    }
  };

  return {
    x,
    y,
    r,
    viewBox,
    strokeWidth,
    lightRailPoints,
    redLinePoints,
    orangeLinePoints,
    stationData,
    currentStation,
    basePrice,
    changeDiscount,
    commonDiscount,
    elderDiscount,
    childrenDiscount,
    calculateFee,
    showFee
  };
});
