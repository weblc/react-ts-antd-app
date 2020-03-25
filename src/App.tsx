import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { getRouterList } from "@/router";
import { Provider } from "react-redux";

import "./mock";
import store from "./store";

const routerList: any = getRouterList();

const App: React.FC = (props: any) => {
    const Layout = routerList["/"].component;
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"
                        render={(props: any) => {
                            return (
                                <Layout {...props} routerList={routerList} />
                            );
                        }}
                    />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
