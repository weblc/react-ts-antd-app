import React from "react";
import ReactDOM from "react-dom";

import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

import "@/assets/styles/index.less";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";


moment.locale("zh-cn");
const app = (
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
