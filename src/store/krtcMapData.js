import { ref, computed} from 'vue';
import { defineStore } from 'pinia';
export const useKRTCStore = defineStore('krtcDataStore', () => {
  const x = ref(1600);
  const y = ref(2200);
  const r = ref(16);
  const strokeWidth = ref(5);
  const viewBox = computed(() => `0 0 ${x.value} ${y.value}`);
  const lightRailPoints = '176,1100 640,1100 800,1210 800,1650 560,1870 176,1518 176,1100';
  const redLinePoints = '480,220 480,1600 800,1870 1120,1870';
  const orangeLinePoints = '176,1462 320,1462 400,1340 1360,1340 1400,1375';
  let stationData = ref([
    // red seq 1~25
    {
      seq: 1,
      stationNum: 'R3',
      chineseName: '小港',
      cx: 1120,
      cy: 1870,
      x: 1120,
      y: 1910,
      textAnchor: 'middle',
      class: 'red',
      fee: 0,
      distance: 0,
      transform:null
    },
    {
      seq: 2,
      stationNum: 'R4',
      chineseName: '高雄國際機場',
      cx: 960,
      cy: 1870,
      x: 960,
      y: 1910,
      textAnchor: 'middle',
      class: 'red',
      fee: 0,
      distance: 1.4,
      transform:null
    },
    {
      seq: 3,
      stationNum: 'R4A',
      chineseName: '草衙',
      cx: 800,
      cy: 1870,
      x: 800,
      y: 1910,
      textAnchor: 'middle',
      class: 'red',
      fee: 0,
      distance: 3.12,
      transform:null
    },
    {
      seq: 4,
      stationNum: 'R5',
      chineseName: '前鎮高中',
      cx: 736,
      cy: 1815,
      x: 760,
      y: 1823,
      textAnchor: 'start',
      class: 'red',
      fee: 0,
      distance: 4.22,
      transform:null
    },
    {
      seq: 5,
      stationNum: 'R6',
      chineseName: '凱旋',
      cx: 658,
      cy: 1760,
      x: 634,
      y: 1768,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 5.41,
      transform:null
    },
    {
      seq: 6,
      stationNum: 'R7',
      chineseName: '獅甲',
      cx: 538,
      cy: 1650,
      x: 514,
      y: 1658,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 7,
      transform:null
    },
    {
      seq: 7,
      stationNum: 'R8',
      chineseName: '三多商圈',
      cx: 480,
      cy: 1500,
      x: 456,
      y: 1508,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 7.64,
      transform:null
    },
    {
      seq: 8,
      stationNum: 'R9',
      chineseName: '中央公園',
      cx: 480,
      cy: 1420,
      x: 456,
      y: 1428,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 8.89,
      transform:null
    },
    //美麗島fee i = [8]
    {
      seq: 9,
      stationNum: 'R10',
      chineseName: '美麗島',
      cx: 480,
      cy: 1340,
      x: 440,
      y: 1320,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 9.1,
      transform:null
    },
    {
      seq: 10,
      stationNum: 'R11',
      chineseName: '高雄車站',
      cx: 480,
      cy: 1240,
      x: 456,
      y: 1248,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 9.81,
      transform:null
    },
    {
      seq: 11,
      stationNum: 'R12',
      chineseName: '後驛',
      cx: 480,
      cy: 1180,
      x: 456,
      y: 1188,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 10.61,
      transform:null
    },
    {
      seq: 12,
      stationNum: 'R13',
      chineseName: '凹子底',
      cx: 464,
      cy: 1100,
      x: 464,
      y: 1070,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 11.49,
      transform:null
    },
    {
      seq: 13,
      chineseName: '巨蛋',
      stationNum: 'R14',
      cx: 480,
      cy: 988,
      x: 456,
      y: 996,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 12.42,
      transform:null
    },
    {
      seq: 14,
      chineseName: '生態園區',
      stationNum: 'R15',
      cx: 480,
      cy: 924,
      x: 456,
      y: 932,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 13.34,
      transform:null
    },
    {
      seq: 15,
      chineseName: '左營',
      stationNum: 'R16',
      cx: 480,
      cy: 860,
      x: 456,
      y: 868,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 14.42,
      transform:null
    },
    {
      seq: 16,
      stationNum: 'R17',
      chineseName: '世運',
      cx: 480,
      cy: 796,
      x: 456,
      y: 804,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 16.11,
      transform:null
    },
    {
      seq: 17,
      stationNum: 'R18',
      chineseName: '油廠國小',
      cx: 480,
      cy: 732,
      x: 456,
      y: 740,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 16.82,
      transform:null
    },
    {
      seq: 18,
      stationNum: 'R19',
      chineseName: '楠梓科技園區',
      cx: 480,
      cy: 668,
      x: 456,
      y: 674,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 17.75,
      transform:null
    },
    {
      seq: 19,
      stationNum: 'R20',
      chineseName: '後勁',
      cx: 480,
      cy: 604,
      x: 456,
      y: 612,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 17.93,
      transform:null
    },
    {
      seq: 20,
      stationNum: 'R21',
      chineseName: '都會公園',
      cx: 480,
      cy:540,
      x: 456,
      y: 548,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 18.58,
      transform:null
    },
    {
      seq: 21,
      stationNum: 'R22',
      chineseName: '青埔',
      cx: 480,
      cy: 476,
      x: 456,
      y: 484,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 20.27,
      transform:null
    },
    {
      seq: 22,
      stationNum: 'R22A',
      chineseName: '橋頭糖廠',
      cx: 480,
      cy: 412,
      x: 456,
      y: 420,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 21.32,
      transform:null
    },
    {
      seq: 23,
      stationNum: 'R23',
      chineseName: '橋頭火車站',
      cx: 480,
      cy: 348,
      x: 456,
      y: 356,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 22.16,
      transform:null
    },
    {
      seq: 24,
      chineseName: '岡山高醫',
      stationNum: 'R24',
      cx: 480,
      cy: 284,
      x: 456,
      y: 292,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 24.58,
      transform:null
    },
    {
      seq: 25,
      stationNum: 'RK1',
      chineseName: '岡山車站',
      cx: 480,
      cy: 220,
      x: 456,
      y: 228,
      textAnchor: 'end',
      class: 'red',
      fee: 0,
      distance: 25.92,
      transform:null
    },
    // orange seq 26~39
    {
      seq: 26,
      stationNum: 'O1',
      chineseName: '哈瑪星',
      cx: 160,
      cy: 1462,
      x: 112,
      y: 1470,
      textAnchor: 'end',
      class: 'orange',
      fee: 0,
      distance: 0,
      transform:null
    },
    {
      seq: 27,
      stationNum: 'O2',
      chineseName: '鹽埕埔',
      cx: 280,
      cy: 1462,
      x: 280,
      y: 1438,
      textAnchor: 'middle',
      class: 'orange',
      fee: 0,
      distance: 0.89,
      transform:null
    },
    {
      seq: 28,
      stationNum: 'O4',
      chineseName: '前金',
      cx: 380,
      cy: 1375,
      x: 350,
      y: 1380,
      textAnchor: 'end',
      class: 'orange',
      fee: 0,
      distance: 2.14,
      transform:null
    },
    //只有dot seq 29
    {
      seq: 29,
      stationNum: 'O5',
      chineseName: '',
      cx:480,
      cy: 1340,
      x: 456,
      y: 1320,
      textAnchor: 'end',
      class: 'orangeRing',
    },
    {
      seq: 30,
      stationNum: 'O6',
      chineseName: '信義國小',
      cx: 576,
      cy: 1340,
      x: 576,
      y: 1316,
      textAnchor: 'middle',
      class: 'orange',
      fee: 0,
      distance: 3.84,
      transform:null
    },
    {
      seq: 31,
      stationNum: 'O7',
      chineseName: '文化中心',
      cx: 720,
      cy: 1340,
      x: 720,
      y: 1316,
      textAnchor: 'middle',
      class: 'orange',
      fee: 0,
      distance: 4.44,
      transform:null
    },
    {
      seq: 32,
      stationNum: 'O8',
      chineseName: '五塊厝',
      cx: 880,
      cy: 1340,
      x: 880,
      y: 1316,
      textAnchor: 'start',
      class: 'orange',
      fee: 0,
      distance: 5.45,
      transform:'rotate(-45  880,1316)'
    },
    {
      seq: 33,
      stationNum: 'O9',
      chineseName: '苓雅運動園區',
      cx: 944,
      cy: 1340,
      x: 944,
      y: 1316,
      textAnchor: 'start',
      class: 'orange',
      fee: 0,
      distance: 6.11,
      transform:'rotate(-45  944,1316)'
    },
    {
      seq: 34,
      stationNum: 'O10',
      chineseName: '衛武營',
      cx: 1008,
      cy: 1340,
      x: 1008,
      y: 1316,
      textAnchor: 'start',
      class: 'orange',
      fee: 0,
      distance: 6.73,
      transform:'rotate(-45  1008,1316)'
    },
    {
      seq: 35,
      stationNum: 'O11',
      chineseName: '鳳山西站',
      cx: 1072,
      cy: 1340,
      x: 1070,
      y: 1316,
      textAnchor: 'start',
      class: 'orange',
      fee: 0,
      distance: 7.49,
      transform:'rotate(-45  1072,1316)'
    },
    {
      seq: 36,
      stationNum: 'O12',
      chineseName: '鳳山',
      cx: 1136,
      cy: 1340,
      x: 1136,
      y: 1316,
      textAnchor: 'start',
      class: 'orange',
      fee: 0,
      distance: 8.22,
      transform:'rotate(-45  1136,1316)'
    },
    {
      seq: 37,
      stationNum: 'O13',
      chineseName: '大東',
      cx: 1200,
      cy: 1340,
      x: 1200,
      y: 1316,
      textAnchor: 'start',
      class: 'orange',
      fee: 0,
      distance: 9.02,
      transform:'rotate(-45  1200,1316)'
    },
    {
      seq: 38,
      stationNum: 'O14',
      chineseName: '鳳山國中',
      cx: 1264,
      cy: 1340,
      x: 1264,
      y: 1316,
      textAnchor: 'start',
      class: 'orange',
      fee: 0,
      distance: 9.85,
      transform:'rotate(-45  1264,1316)'
    },
    {
      seq: 39,
      stationNum: 'OT1',
      chineseName: '大寮',
      cx: 1400,
      cy: 1375,
      x: 1400,
      y: 1415,
      textAnchor: 'start',
      class: 'orange',
      fee: 0,
      distance: 11.81,
      transform:null
    },
    // lightrail seq 40~
    {
      seq: 40,
      stationNum: 'C1',
      chineseName: '大寮',
      cx: 764,
      cy: 1682,
      x: 788,
      y: 1690,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 0,
      transform:null
    },
    {
      seq: 41,
      stationNum: 'C2',
      chineseName: '凱旋瑞田',
      cx: 724,
      cy: 1720,
      x: 748,
      y: 1728,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 0.77,
      transform:null
    },
    {
      seq: 42,
      stationNum: 'C3',
      chineseName: '前鎮之星',
      cx: 690,
      cy: 1760,
      x: 714,
      y: 1768,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 1.44,
      transform:null
    },
    {
      seq: 43,
      stationNum: 'C4',
      chineseName: '凱旋中華',
      cx: 612,
      cy: 1825,
      x: 636,
      y: 1833,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 1.97,
      transform:null
    },
    {
      seq: 44,
      stationNum: 'C5',
      chineseName: '夢時代',
      cx: 560,
      cy: 1870,
      x: 560,
      y: 1910,
      textAnchor: 'middle',
      class: 'green',
      fee: 0,
      distance: 2.55,
      transform:null
    },
    {
      seq: 45,
      stationNum: 'C6',
      chineseName: '經貿園區',
      cx: 512,
      cy: 1826,
      x: 488,
      y: 1834,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 3.27,
      transform:null
    },
    {
      seq: 46,
      stationNum: 'C7',
      chineseName: '軟體園區',
      cx: 464,
      cy: 1782,
      x: 440,
      y: 1790,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 3.83,
      transform:null
    },
    {
      seq: 47,
      stationNum: 'C8',
      chineseName: '高雄展覽館',
      cx: 416,
      cy: 1738,
      x: 392,
      y: 1746,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 4.4,
      transform:null
    },
    {
      seq: 48,
      stationNum: 'C9',
      chineseName: '旅運中心',
      cx: 368,
      cy: 1694,
      x: 344,
      y: 1702,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 4.9,
      transform:null
    },
    {
      seq: 49,
      stationNum: 'C10',
      chineseName: '光榮碼頭',
      cx: 320,
      cy: 1650,
      x: 296,
      y: 1658,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 5.48,
      transform:null
    },
    {
      seq: 50,
      stationNum: 'C11',
      chineseName: '真愛碼頭',
      cx: 272,
      cy: 1606,
      x: 248,
      y: 1614,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 5.96,
      transform:null
    },
    {
      seq: 51,
      stationNum: 'C12',
      chineseName: '駁二大義',
      cx: 224,
      cy: 1562,
      x: 200,
      y: 1570,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 6.5,
      transform:null
    },
    {
      seq: 52,
      stationNum: 'C13',
      chineseName: '駁二蓬萊',
      cx: 176,
      cy: 1518,
      x: 152,
      y: 1526,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 6.99,
      transform:null
    },
    {
      seq: 53,
      stationNum: 'C14',
      chineseName: '',
      cx: 192,
      cy: 1462,
      x: 136,
      y: 1470,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 7.42,
      transform:null
    },
    {
      seq: 54,
      stationNum: 'C15',
      chineseName: '壽山公園',
      cx: 176,
      cy: 1410,
      x: 152,
      y: 1414,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 8.03,
      transform:null
    },
    {
      seq: 55,
      stationNum: 'C16',
      chineseName: '文武聖殿',
      cx: 176,
      cy: 1360,
      x: 152,
      y: 1364,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 8.43,
      transform:null
    },
    {
      seq: 56,
      stationNum: 'C17',
      chineseName: '鼓山區公所',
      cx: 176,
      cy: 1310,
      x: 152,
      y: 1314,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 9.17,
      transform:null
    },
    {
      seq: 57,
      stationNum: 'C18',
      chineseName: '鼓山',
      cx: 176,
      cy: 1260,
      x: 152,
      y: 1264,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 9.86,
      transform:null
    },
    {
      seq: 58,
      stationNum: 'C19',
      chineseName: '馬卡道',
      cx: 176,
      cy: 1210,
      x: 152,
      y: 1214,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 10.41,
      transform:null
    },
    {
      seq: 59,
      stationNum: 'C20',
      chineseName: '臺鐵美術館',
      cx: 176,
      cy: 1160,
      x: 152,
      y: 1164,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 10.98,
      transform:null
    },
    {
      seq: 60,
      stationNum: 'C21A',
      chineseName: '內惟藝術中心',
      cx: 176,
      cy: 1100,
      x: 152,
      y: 1104,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 11.33,
      transform:null
    },
    {
      seq: 61,
      stationNum: 'C21',
      chineseName: '美術館',
      cx: 230,
      cy: 1100,
      x: 230,
      y: 1076,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 11.78,
      transform:'rotate(45 230,1076)'
    },
    {
      seq: 62,
      stationNum: 'C22',
      chineseName: '聯合醫院',
      cx: 290,
      cy: 1100,
      x: 290,
      y: 1076,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 12.15,
      transform:'rotate(45 290,1076)'
    },
    {
      seq: 63,
      stationNum: 'C23',
      chineseName: '龍華國小',
      cx: 350,
      cy: 1100,
      x: 350,
      y: 1076,
      textAnchor: 'end',
      class: 'green',
      fee: 0,
      distance: 12.58,
      transform:'rotate(45 350,1076)'
    },
    {
      seq: 64,
      stationNum: 'C24',
      chineseName: '愛河之心',
      cx: 496,
      cy: 1100,
      x: 504,
      y: 1076,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 13.39,
      transform:'rotate(-45 504,1076)'
    },
    {
      seq: 65,
      stationNum: 'C25',
      chineseName: '新上國小',
      cx: 566,
      cy: 1100,
      x: 566,
      y: 1076,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 14.01,
      transform:'rotate(-45 566,1076)'
    },
    {
      seq: 66,
      stationNum: 'C26',
      chineseName: '大順民族',
      cx: 640,
      cy: 1100,
      x: 650,
      y: 1078,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 14.7,
      transform:'rotate(-45 650,1078)'
    },
    {
      seq: 67,
      stationNum: 'C27',
      chineseName: '灣仔內',
      cx: 696,
      cy: 1136,
      x: 716,
      y: 1116,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 15.12,
      transform:'rotate(-45 716,1116)'
    },
    {
      seq: 68,
      stationNum: 'C28',
      chineseName: '高雄高工',
      cx: 746,
      cy: 1174,
      x: 768,
      y: 1156,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 15.8,
      transform:'rotate(-45 768,1156)'
    },
    {
      seq: 69,
      stationNum: 'C29',
      chineseName: '樹德家商',
      cx: 800,
      cy: 1210,
      x: 816,
      y: 1190,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 16.5,
      transform:'rotate(-45 816,1190)'
    },
    {
      seq: 70,
      stationNum: 'C30',
      chineseName: '科工館',
      cx: 800,
      cy: 1260,
      x: 824,
      y: 1250,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 17.27,
      transform:'rotate(-45 824,1250)'
    },
    {
      seq: 71,
      stationNum: 'C31',
      chineseName: '聖功醫院',
      cx: 800,
      cy: 1310,
      x: 830,
      y: 1300,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 17.76,
      transform:'rotate(-45 830,1300)'
    },
    {
      seq: 72,
      stationNum: 'C32',
      chineseName: '凱旋公園',
      cx: 800,
      cy: 1370,
      x: 824,
      y: 1378,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 18.23,
      transform: null
    },
    {
      seq: 73,
      stationNum: 'C33',
      chineseName: '衛生局',
      cx: 800,
      cy: 1420,
      x: 824,
      y: 1428,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 18.71,
      transform: null
    },
    {
      seq: 74,
      stationNum: 'C34',
      chineseName: '五權國小',
      cx: 800,
      cy: 1480,
      x: 824,
      y: 1488,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 19.18,
      transform: null
    },
    {
      seq: 75,
      stationNum: 'C35',
      chineseName: '凱旋武昌',
      cx: 800,
      cy: 1540,
      x: 824,
      y: 1548,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 19.68,
      transform: null
    },
    {
      seq: 76,
      stationNum: 'C36',
      chineseName: '凱旋二聖',
      cx: 800,
      cy: 1600,
      x: 824,
      y: 1608,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 20.17,
      transform: null
    },
    {
      seq: 77,
      stationNum: 'C37',
      chineseName: '輕軌機廠',
      cx: 800,
      cy: 1650,
      x: 824,
      y: 1658,
      textAnchor: 'start',
      class: 'green',
      fee: 0,
      distance: 20.64,
      transform: null
    },
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
  const calculateFee = function (startStation, category) {
    if (startStation < 1 || startStation > stationData.value.length) {
      console.error('Invalid startStation index');
      return;
    }
    //起始站 index
    currentStation.value = startStation - 1;
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
      max = 25;
    } else if (category === 'lightRail') {
      min = 38;
      max = 75;
    }
    for (let i = min; i < max; i++) {
       //計算票價級距
      let priceRange = 0;
      if (i === currentStation.value) continue;
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
      //計算票價
      if (currentDiscount.value === 1) {
        stationData.value[i].fee = (basePrice.value + 5 * priceRange) * 1;
      } else {
        stationData.value[i].fee = (basePrice.value + 5 * priceRange) * 1;
      }
    };
    console.log(stationData.value);
  }

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
  };
});
