import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/userData.css";
import "./css/counter.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement //взаимодействие с реальным ДОМ-дерево
);
root.render(
  // React.createElement("h1", null, "hello word v2")
  // <React.StrictMode>
  <App /> // отрисовка интерфейса
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
