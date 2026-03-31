# Getting Started with Create React App
# React Quiz / React 测验项目

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
> A bilingual (English + 中文) learning project that demonstrates how to build a timed quiz app with React, `useReducer`, and Context API.
> 
> 一个中英文双语学习项目，演示如何使用 React、`useReducer` 与 Context API 构建一个带倒计时的答题应用。

## Available Scripts
---

In the project directory, you can run:
## 1. Project Overview / 项目概览

### `npm start`
### English
This project implements an interactive React quiz application. It fetches question data from a local JSON server, lets users answer questions one by one, calculates scores in real time, tracks progress and countdown timer, and shows final results with high score support.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The app is state-machine driven. The core quiz states are:

The page will reload when you make changes.\
You may also see any lint errors in the console.
- `loading`
- `error`
- `ready`
- `active`
- `finished`

### `npm test`
### 中文
这是一个交互式 React 测验应用：项目会从本地 JSON 服务获取题库，用户逐题作答，系统实时计分并展示答题进度与倒计时，最后输出成绩和最高分。

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
本项目采用“状态机”思路驱动界面，核心状态包括：

### `npm run build`
- `loading`（加载中）
- `error`（加载失败）
- `ready`（可开始）
- `active`（答题中）
- `finished`（已完成）

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
---

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
## 2. Main Features / 核心功能

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### English
- Load quiz questions from local API (`json-server`)
- Start quiz from a welcome screen
- Render one question at a time
- Lock options after answering and highlight correctness
- Compute score based on per-question points
- Display current progress and score summary
- Countdown timer (auto-finish when time is over)
- Final result screen with percentage and emoji feedback
- High score persistence in app state during session
- Restart quiz without reloading question data

### `npm run eject`
### 中文
- 通过本地 API（`json-server`）加载题库
- 欢迎页一键开始答题
- 一次展示一道题
- 答题后锁定选项并高亮对错
- 按题目分值进行累计计分
- 实时展示进度与得分
- 倒计时机制（时间到自动结束）
- 完成页展示百分比、表情反馈与最高分
- 会话内维护最高分
- 支持不重新拉取题库的“重新开始”

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
---

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
## 3. Tech Stack / 技术栈

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
- React 18
- Context API
- `useReducer` for state transitions
- `useEffect` for data fetching and timer side effects
- `json-server` for mock backend API
- Create React App tooling (`react-scripts`)

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
---

## Learn More
## 4. Quick Start / 快速开始

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
## 4.1 Prerequisites / 环境准备

To learn React, check out the [React documentation](https://reactjs.org/).
### English
- Node.js 16+ (recommended 18+)
- npm 8+

### Code Splitting
### 中文
- Node.js 16 及以上（推荐 18+）
- npm 8 及以上

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
## 4.2 Install dependencies / 安装依赖

### Analyzing the Bundle Size
```bash
npm install
```

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
## 4.3 Start local quiz API / 启动本地题库服务

### Making a Progressive Web App
```bash
npm run server
```

This starts `json-server` at `http://localhost:9000`.

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
## 4.4 Start React app / 启动前端应用

### Advanced Configuration
Open a second terminal and run:

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
```bash
npm start
```

### Deployment
Then open `http://localhost:3000`.

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
> Important / 注意：
> The frontend fetches from `http://localhost:9000/questions`, so `npm run server` must be running.

### `npm run build` fails to minify
---

## 5. Usage Tutorial / 操作教程（一步一步）

### English
1. Launch API server with `npm run server`.
2. Launch frontend with `npm start`.
3. Wait for question loading.
4. Click **Let's start**.
5. Select one option per question.
6. Review progress and score while answering.
7. Click **Next** to continue.
8. On final question, click **Finish**.
9. Review your score and high score.
10. Click **Restart quiz** to play again.

### 中文
1. 先执行 `npm run server` 启动题库服务。
2. 再执行 `npm start` 启动前端。
3. 页面加载题目后进入准备状态。
4. 点击 **Let's start** 开始答题。
5. 每题选择一个选项。
6. 答题过程中可查看实时进度与得分。
7. 点击 **Next** 进入下一题。
8. 最后一题点击 **Finish** 提交。
9. 查看最终成绩与最高分。
10. 点击 **Restart quiz** 可重新开始。

---

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
## 6. Available Scripts / 可用脚本

```bash
npm start      # Run React dev server
npm run server # Run json-server on port 9000
npm test       # Run tests (CRA default)
npm run build  # Build for production
```

---

## 7. Project Structure / 项目结构

```text
React_quiz/
├─ data/
│  └─ questions.json           # Quiz data source
├─ public/                     # Static assets
├─ src/
│  ├─ components/              # UI components
│  ├─ contexts/QuizContext.js  # Global quiz state + reducer
│  └─ index.js                 # App entry with QuizProvider
├─ src-no-context/             # Alternative implementation without Context API
├─ package.json
└─ README.md
```

---

## 8. State Flow / 状态流

### English
Data fetching and quiz progression are handled through actions dispatched to the reducer:

- `dataReceived`
- `dataFailed`
- `start`
- `newAnswer`
- `nextQuestion`
- `finish`
- `restart`
- `tick`

UI rendering switches by `status`.

### 中文
项目通过 `dispatch(action)` 触发 reducer 中的状态转换，核心 action 如下：

- `dataReceived`
- `dataFailed`
- `start`
- `newAnswer`
- `nextQuestion`
- `finish`
- `restart`
- `tick`

界面根据 `status` 自动切换到对应页面。

---

## 9. Common Issues / 常见问题

### Q1: Why do I see loading forever?
- Make sure `npm run server` is running on port `9000`.
- Check if `http://localhost:9000/questions` is accessible.

### Q2: Why is there an error screen?
- API fetch failed. Confirm local server is up and `questions.json` is valid JSON.

### Q3: Why no questions are shown?
- Verify `data/questions.json` has a `questions` array with correct schema.

---

## 10. Learning Goals / 学习目标

### English
This repository is ideal for understanding:
- predictable state management with `useReducer`
- global state sharing with Context API
- React conditional rendering by state
- side-effect handling with `useEffect`
- basic client + mock server local development workflow

### 中文
本仓库非常适合理解：
- 如何用 `useReducer` 管理可预测状态
- 如何用 Context API 做跨组件状态共享
- 如何基于状态做条件渲染
- 如何用 `useEffect` 处理副作用（请求、计时器）
- 前端 + 模拟后端的本地联调流程

---

## 11. License / 许可证

For learning and demo purposes.

用于学习与演示目的。
