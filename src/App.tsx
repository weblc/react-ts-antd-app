import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { getRouterList } from "@/router";
import { Provider } from "react-redux";

import "./mock";
import store from "./store";

const routerList: any = getRouterList();

const App: React.FC = (props: any) => {
    const Layout = routerList["/"].component;
    const UserLayout = routerList['/user'].component
    console.log(routerList)
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/user' render={(props:any) => {
                            return (<UserLayout {...props} routerList={routerList} />)
                    }} />
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
