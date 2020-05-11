import React, { Component } from "react";
import { connect } from "react-redux";
import { match, Redirect } from "react-router";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { getRoutes} from "@/utils";

import CenterHeader from "./header";
import SiderMenu from "./siderMenu";



const { Header, Content } = Layout;


interface userProps {
    history: History;
    match: match;
    app: any;
    routerList: any;
    location: Location;
}

class User extends Component<userProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }



    render() {
        const { match, location:{pathname}, app ,routerList} = this.props;
        const routes = getRoutes(match.path, routerList);

        return (
            <Layout style={{ height: "100vh" }}>
                <SiderMenu collapsed={app.collapsed} pathname={pathname}/>

                <Layout className="site-layout">
                    <Header
                        style={{
                            padding: "0 50px",
                            width: "100%",
                            zIndex: 9,
                            background: "#fff",
                            boxShadow: "0 1px 4px rgba(0,21,41,.08)",
                        }}
                    >
                        <CenterHeader collapsed={app.collapsed} />
                    </Header>
                    <Content style={{ height: "100%", background: "f0f2f5" }} >
                        <Switch>
                            {routes.map(item => {
                                return <Route key={item.key} path={item.path} component={item.component} exact={item.exact} />;
                            })}
                            <Redirect
                                from="/manage"
                                to={{
                                    pathname: "/manage/data/analysis",
                                }}
                            />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default connect(({ app }: any) => ({ app }))(User);
