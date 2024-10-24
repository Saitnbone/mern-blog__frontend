import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app"; // Импортируем собранное приложение из app/
import "./app/styles/global.scss"; // Глобальные стили

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Подключаем приложение */}
  </React.StrictMode>,
  document.getElementById("root")
);
