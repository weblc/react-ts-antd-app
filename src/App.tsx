import React from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom";
import { getRouterList } from "@/router";

import {  getStorage} from "@/utils";
import api from '@/api'
import "./mock";

import { connect } from "react-redux"
import { set_user } from '@/store/modules/user/action'

const routerList: any = getRouterList();

const App: React.FC = (props: any) => {
    const Layout = routerList["/"].component;
    const UserLayout = routerList['/manage'].component

    // const token = getStorage('token')
    //     if(token){
    //         api.user.getUserInfo(token).then((res)=>{
    //            props.set_user(res.data)
    //         })
    //     }
    return (

            <BrowserRouter>
                <Switch>
                    <Route path='/manage'  render={(props:any) => {
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

    );
};

export default App;
// export default connect(() => ({}), {
//     set_user,
//   })(App);
