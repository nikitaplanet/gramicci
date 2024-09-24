# 專案名稱
Gramicci Editor Tool

# 專案描述
協助 Gramicci 將 Shopline 商品詳細頁下方描述公版快速編排<br/>
參考網站：https://www.gramiccitwshop.com/products/tactical-vest<br>
業主 Figma (公版樣貌)：https://www.figma.com/design/BuctAdMrQzvIUowW5roJeT/GRAMICCI<br>
交付時程：10 月底前結案

溝通確認時間表：<br/>
  - 9/28 交付基楚功能版本供業主參考<br/>
  - 後續每週推展進度

# 開發項目
使用編輯器 [Editor.js](https://editorjs.io/base-concepts/) 工具讓業主方便排版文字圖片，工程協助將編輯好的內容轉為 HTML Tag 格式方便貼至 Shopline 後台。<br/>
- [工程文件](https://docs.google.com/document/d/1VqIKSnj6zzPgZNa82th4ruOhy_rXOyFHo06RF8rvruM/edit)<br/>
- [Wireframe](https://www.figma.com/design/UPWVb5bJN0SnU77Ik2zvrg/Gramicci-Wireframe?node-id=0-1&node-type=canvas&t=JB8uPkmunMl4KBko-0)


## - 編輯器功能
- 基楚功能<br/>
  - 標題<br/>
  - 文字<br/>
  - 按鈕<br/>
  - 分隔線：[@editorjs/delimiter](https://www.npmjs.com/package/@editorjs/delimiter)<br/>
  - 嵌入 YT 影片：[@editorjs/embed](https://www.npmjs.com/package/@editorjs/embed)<br/>
  - 貼入照片連結：[@editorjs/image](https://github.com/editor-js/image)<br/>
  - 表格：[@editorjs/table](https://www.npmjs.com/package/@editorjs/table)<br/>
- 保存轉為 HTML 標籤，可貼在 shopline 編輯器做呈現 <br>
- 模板暫存功能，需可保存做備份 (使用 [Google Sheet](https://medium.com/sheiun/google-spreadsheet-%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E5%85%8D%E8%B2%BB%E8%B3%87%E6%96%99%E5%BA%AB-%E4%B8%8B-4b4900baa5f0)) <br/>
- 表格暫存＆插入 <br/>
- 常用關鍵字插入

# 技術細節
- Vue3<br/>
- Vite<br/>
- TypeScript<br/>
  - Remind: src/enum 定義常數<br/>
- Pinia<br/>
- Tailwind<br/>

## 元件管理參考
[原子設計](https://medium.com/uxeastmeetswest/%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88-atomic-design%E7%B0%A1%E4%BB%8B%E5%8F%8A%E5%B7%A5%E4%BD%9C%E5%AF%A6%E4%BE%8B-42e666358d52) <br/>
- atoms 原子：為網頁構成的基本元素，HTML的tags，例如標籤、輸入，或是一個按鈕，也可以為抽象的概念，例如字體、色調等。<br/>
- molecules 分子：由元素構成的簡單UI物件<br/>
- organisms 組織：相對分子而言，較為複雜的構成物，由原子及分子所組成。<br/>

* 這次依需求拆分上述資料夾

# Build SetUp
```bash
# node version
v20.12.2
```
```bash
# install dependencies
npm install
```
```bash
# serve project
npm run dev
```
# Git Branch
- main <br>
  - develop
    - nikita-[feature] <br>
    - dd-[feature] <br>

# Git Commit
```bash
[feature] 功能項目
[fix] 修復項目
[style] 僅異動樣式
[refactor] 重構項目
[chore] 異動環境檔
```

# Git Merge
use
```bash
git merge --no-ff
```

