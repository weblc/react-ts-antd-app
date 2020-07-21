import React from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom";
import { connect } from "react-redux";

import "./mock";
import api from "@/api";
import { getRouterList } from "@/router";
import { set_user } from "@/store/modules/user/action";
import { set_token } from "@/store/modules/app/action";
import { getStorage, removeStorage } from "@/utils";

const routerList: any = getRouterList();

const App: React.FC = (props: any) => {
    const Layout = routerList["/"].component;
    const UserLayout = routerList["/manage"].component;

    const token = getStorage("token");
    if (token) {
        api.user.getUserInfo(token).then(({ success, data }) => {
            if (success) {
                props.set_token(token);
                props.set_user(data.user);
            } else {
                props.set_token("");
                removeStorage("token");
            }
        });
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/manage"
                    render={(props: any) => {
                        return <UserLayout {...props} routerList={routerList} />;
                    }}
                />
                <Route
                    path="/"
                    render={(props: any) => {
                        return <Layout {...props} routerList={routerList} />;
                    }}
                />
            </Switch>
        </BrowserRouter>
    );
};

// export default App;
export default connect(() => ({}), {
    set_user,
    set_token,
})(App);
