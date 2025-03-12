# 高雄捷運輕軌地圖
## 目錄
- [專案發想](#專案發想)
- [使用技術](#使用技術)
- [網站頁面](#網站頁面)
- [指令列表](#指令列表)
- [資料夾結構](#資料夾結構)
- [專案套件](#專案套件)
- [第三方服務](#第三方服務)
- [CI/CD 說明](#CICD-說明)
- [專案挑戰 & 解決方案](#專案挑戰-解決方案)
  
## 專案發想
實作 SVG 操作建立互動式路線圖，並解決 Vue 與 SVG 的資料綁定問題，確保即時更新票價與行車時間。
- 資料整理及邏輯發想：[Whimsical](https://whimsical.com/tool-box-J8pDekTdv27TE6R3Z7yU7g)

- 參考來源：
  - [工具邦](https://tw.piliapp.com/)
  - [高雄捷運導覽圖](https://www.krtc.com.tw/Guide/guide_map)
  
- 功能：用於計算高雄捷運及輕軌的不同票種票價、行車時間的工具

## 使用技術 
- Whimsical 繪製邏輯流程圖
- Vue.js、Scss、Bootstrap 5 開發前端網頁
- SVG 製作路線圖
- Vue Router 管理路由
- Pinia 管理資料狀態及串接資料模塊
- GitHub Actions 部屬 GitHub Pages

## 網站頁面
[pages](https://afonguwu.github.io/tool-box/#/)
- 高雄捷運輕軌地圖：顯示票價、顯示乘車時間、票種切換

## 指令列表

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

## 資料夾結構
- src
  - views - 畫面放置處
  - assets - 靜態放置處
    - scss
    - js
  - store - pinia 資料放置處
  - router - 路由表放置處
- public - 部屬圖片放置處

### 專案套件
- pinia v2.2.2
- bootstrap v5.3.3
- vue v3.4.29
- vue-router v4.3.03
- vite v5.3.1
- git-cz v4.9.0

### 第三方服務

- Google Icon

## CI/CD 說明

此專案有使用 Github Actions，主要配置文件位於`.github/workflows/github-actions-demo.yml`

### Push to Remote Branch `Dev`

使用git-cz需要選擇commit 類別及輸入訊息

```bash
npm run git-update-dev
```

以上結合以下指令：

```bash
git checkout dev
git add .
git cz
push origin dev
```

### Deployed to gh-page

當 pushed 或 merged to `master` branch 時，自動觸發

## 專案挑戰 & 解決方案
- 串接 API 失敗後，迅速改用本地端資料，確保數據穩定
- 採用 SVG 來優化圖像，解決圖片解析度問題
- 實現滾動視差效果，提升用戶體驗
