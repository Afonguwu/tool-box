import { ref } from 'vue';
export const x = 1600;
export const y = 2200;
export const r = 16;
export const viewBox = `0 0 ${x} ${y}`;
export const strokeWidth = 5;
export const lightRailPoints = `${x * 0.1},${y * 0.5} ${x * 0.4},${y * 0.5} ${x * 0.5},${y * 0.55} ${x * 0.5},${y * 0.75} ${x * 0.3},${y * 0.85} ${x * 0.1},${y * 0.7} ${x * 0.1},${y * 0.5}`;
export const redLinePoints = `${x * 0.3},${y * 0.1} ${x * 0.3},${y * 0.7} ${x * 0.5},${y * 0.85} ${x * 0.7},${y * 0.85}`;
export const orangeLinePoints = `${x * 0.1},${y * 0.65} ${x * 0.25},${y * 0.65} ${x * 0.28},${y * 0.6} ${x * 0.8},${y * 0.6} ${x * 0.85},${y * 0.65}`;
let redGap = r * 4;
// let dotPosition = [
//   {
//     cx: x * 0.7,
//     cy: y * 0.85,
//     x: x * 0.7,
//     y: y * 0.85 + r * 2.5,
//     textAnchor: 'middle'
//   },
//   {
//     cx: x * 0.6,
//     cy: y * 0.85,
//     x: x * 0.6,
//     y: y * 0.85 + r * 2.5,
//     textAnchor: 'middle'
//   },
//   {
//     cx: x * 0.5,
//     cy: y * 0.85,
//     x: x * 0.5,
//     y: y * 0.85 + r * 2.5,
//     textAnchor: 'middle'
//   },
//   {
//     cx: x * 0.45 + r * 4.5,
//     cy: y * 0.825,
//     x: x * 0.45 + r * 6.5,
//     y: y * 0.825 + r * 0.5,
//     textAnchor: 'start'
//   },
//   {
//     cx: x * 0.425 - r * 1,
//     cy: y * 0.79,
//     x: x * 0.425 - r * 3,
//     y: y * 0.79 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3 + r * 2,
//     cy: y * 0.7,
//     x: x * 0.3 + r * 4.5,
//     y: y * 0.7 + r * 0.5,
//     textAnchor: 'start'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.7 - r * 4.375,
//     x: x * 0.3 + r * 2.5,
//     y: y * 0.7 + r * 3.875,
//     textAnchor: 'start'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.6 + r * 4.375,
//     x: x * 0.3 + r * 2.5,
//     y: y * 0.6 + r * 4.875,
//     textAnchor: 'start'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.6,
//     x: x * 0.3 - r * 2,
//     y: y * 0.6 + r * 2,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.6 - r * 5,
//     x: x * 0.3 - r * 2,
//     y: y * 0.6 - r * 4.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.5 + r * 5,
//     x: x * 0.3 - r * 2,
//     y: y * 0.5 + r * 5.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.5,
//     x: x * 0.3 - r * 2,
//     y: y * 0.5 + r * 2,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 12,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 12 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 11,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 11 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 10,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 10 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 9,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 9 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 8,
//     x: x * 0.3 - r * 2,
//     y: 0.1 + redGap * 8 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 7,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 7 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 6,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 6 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 5,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 5 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 4,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 4 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 3,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 3 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 2,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 2 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1 + redGap * 1,
//     x: x * 0.3 - r * 2,
//     y: y * 0.1 + redGap * 1 + r * 0.5,
//     textAnchor: 'end'
//   },
//   {
//     cx: x * 0.3,
//     cy: y * 0.1,
//     x: x * 0.3 - r * 2,
//     y: y * 0 + r * 0.5,
//     textAnchor: 'end'
//   }
// ];
export const stationData = ref([
  // red
  {
    seq: 1,
    stationNum: 'R3',
    chineseName: '小港',
    cx: x * 0.7,
    cy: y * 0.85,
    x: x * 0.7,
    y: y * 0.85 + r * 2.5,
    textAnchor: 'middle',
    class: 'red',
    fee: 0,
    distance: 0
  },
  {
    seq: 2,
    stationNum: 'R4',
    chineseName: '高雄國際機場',
    cx: x * 0.6,
    cy: y * 0.85,
    x: x * 0.6,
    y: y * 0.85 + r * 2.5,
    textAnchor: 'middle',
    class: 'red',
    fee: 0,
    distance: 1.4
  },
  {
    seq: 3,
    stationNum: 'R4A',
    chineseName: '草衙',
    cx: x * 0.5,
    cy: y * 0.85,
    x: x * 0.5,
    y: y * 0.85 + r * 2.5,
    textAnchor: 'middle',
    class: 'red',
    fee: 0,
    distance: 3.12
  },
  {
    seq: 4,
    stationNum: 'R5',
    chineseName: '前鎮高中',
    cx: x * 0.45 + r * 2,
    cy: y * 0.825,
    x: x * 0.45 + r * 4,
    y: y * 0.825 + r * 0.5,
    textAnchor: 'start',
    class: 'red',
    fee: 0,
    distance: 4.22
  },
  {
    seq: 5,
    stationNum: 'R6',
    chineseName: '凱旋',
    cx: x * 0.425 - r * 1,
    cy: y * 0.79,
    x: x * 0.425 - r * 3,
    y: y * 0.79 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 5.41
  },
  {
    seq: 6,
    stationNum: 'R7',
    chineseName: '獅甲',
    cx: x * 0.3 + r * 2,
    cy: y * 0.7 + r * 2,
    x: x * 0.3 + r * 4.5,
    y: y * 0.7 + r * 2.5,
    textAnchor: 'start',
    class: 'red',
    fee: 0,
    distance: 7
  },
  {
    seq: 7,
    stationNum: 'R8',
    chineseName: '三多商圈',
    cx: x * 0.3,
    cy: y * 0.7 - r * 4.375,
    x: x * 0.3 + r * 2.5,
    y: y * 0.7 - r * 3.875,
    textAnchor: 'start',
    class: 'red',
    fee: 0,
    distance: 7.64
  },
  {
    seq: 8,
    stationNum: 'R9',
    chineseName: '中央公園',
    cx: x * 0.3,
    cy: y * 0.6 + r * 4.375,
    x: x * 0.3 + r * 2.5,
    y: y * 0.6 + r * 4.875,
    textAnchor: 'start',
    class: 'red',
    fee: 0,
    distance: 8.89
  },
  {
    seq: 9,
    stationNum: 'R10',
    chineseName: '美麗島',
    cx: x * 0.3,
    cy: y * 0.6,
    x: x * 0.3 - r * 3.5,
    y: y * 0.6 - r * 2,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 9.1
  },
  {
    seq: 10,
    stationNum: 'R11',
    chineseName: '高雄車站',
    cx: x * 0.3,
    cy: y * 0.6 - r * 5,
    x: x * 0.3 - r * 2,
    y: y * 0.6 - r * 4.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 9.81
  },
  {
    seq: 11,
    stationNum: 'R12',
    chineseName: '後驛',
    cx: x * 0.3,
    cy: y * 0.5 + r * 5,
    x: x * 0.3 - r * 2,
    y: y * 0.5 + r * 5.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 10.61
  },
  {
    seq: 12,
    stationNum: 'R13',
    chineseName: '凹子底',
    cx: x * 0.3,
    cy: y * 0.5,
    x: x * 0.3 - r * 2,
    y: y * 0.5 + r * 2,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 11.49
  },
  {
    chineseName: '巨蛋',
    seq: 13,
    stationNum: 'R14',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 12,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 12 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 12.42
  },
  {
    chineseName: '生態園區',
    seq: 14,
    stationNum: 'R15',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 11,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 11 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 13.34
  },
  {
    chineseName: '左營',
    seq: 15,
    stationNum: 'R16',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 10,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 10 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 14.42
  },
  {
    seq: 16,
    stationNum: 'R17',
    chineseName: '世運',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 9,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 9 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 16.11
  },
  {
    chineseName: '油廠國小',
    seq: 17,
    stationNum: 'R18',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 8,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 8 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 16.82
  },
  {
    seq: 18,
    stationNum: 'R19',
    chineseName: '楠梓科技園區',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 7,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 7 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 17.75
  },
  {
    seq: 19,
    stationNum: 'R20',
    chineseName: '後勁',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 6,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 6 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 17.93
  },
  {
    seq: 20,
    stationNum: 'R21',
    chineseName: '都會公園',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 5,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 5 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 18.58
  },
  {
    seq: 21,
    stationNum: 'R22',
    chineseName: '青埔',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 4,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 4 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 20.27
  },
  {
    seq: 22,
    stationNum: 'R22A',
    chineseName: '橋頭糖廠',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 3,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 3 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 21.32
  },
  {
    seq: 23,
    stationNum: 'R23',
    chineseName: '橋頭火車站',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 2,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 2 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 22.16
  },
  {
    chineseName: '岡山高醫',
    seq: 24,
    stationNum: 'R24',
    cx: x * 0.3,
    cy: y * 0.1 + redGap * 1,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + redGap * 1 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 24.58
  },
  {
    seq: 24,
    stationNum: 'RK1',
    chineseName: '岡山車站',
    cx: x * 0.3,
    cy: y * 0.1,
    x: x * 0.3 - r * 2,
    y: y * 0.1 + r * 0.5,
    textAnchor: 'end',
    class: 'red',
    fee: 0,
    distance: 25.92
  },
  // orange
  {
    stationNum: 'O5',
    cx: x * 0.3,
    cy: y * 0.6,
    x: x * 0.3 - r * 2,
    y: y * 0.6 - r * 2,
    textAnchor: 'end',
    class: 'specialOrange'
  }
]);
