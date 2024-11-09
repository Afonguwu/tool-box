# 工具1：高雄捷運地圖

## 專案發想

- 資料整理及邏輯發想：[Whimsical](https://whimsical.com/tool-box-J8pDekTdv27TE6R3Z7yU7g)

- 參考來源：[工具邦](https://tw.piliapp.com/)

- 說明：用於計算高雄捷運及輕軌的不同票種票價、行車時間的工具
- 畫面：
  ![PC 畫面](/public/README/kmrtMap-pc.png 'PC 畫面')
  ![Mobile 畫面](/public/README/kmrtMap-mobile.png 'Mobile 畫面')

## Project Setup

Node.js版本建議：`v18.17.0`以上

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Push to GitHub

```sh
npm run git-update-dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Folder Description

- src
  - views - 畫面放置處
  - assets - 靜態放置處
    - scss
    - js
  - store - pinia 資料放置處
  - router - 路由表放置處
- public - 部屬圖片放置處

### Project Technology

- pinia v2.2.2
- bootstrap v5.3.3
- vue v3.4.29
- vue-router v4.3.03
- vite v5.3.1
- git-cz v4.9.0

### Third Party Services

- Google Icon

## CI/CD Instructions

此專案有使用 Github Actions，主要配置文件位於`.github/workflows/github-actions-demo.yml`

### Push to Remote Branch `Dev`

使用git-cz需要選擇commit 類別及輸入訊息

```bash
npm run git-update-dev
```

結合指令：

```bash
git checkout dev
git add .
git cz
push origin dev
```

### Deployed to gh-page

當 pushed 或 merged to `master` branch 時，自動觸發
