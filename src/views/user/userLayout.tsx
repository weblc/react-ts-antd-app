import React, { Component } from "react";
import { match } from "react-router";
import { Layout, Menu } from "antd";
import { getRoutes, getStorage } from "@/utils";
import { Route, Switch } from "react-router-dom";
import CenterHeader from './header'

const { Header, Sider, Content } = Layout;
interface userProps {
    history: History;
    match: match;

    routerList: any;
    location: Location;
}

class User extends Component<userProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {}
    componentWillUnmount(): void {}
    toggle = () => {
        console.log(123);
    };
    render() {
        const { match, routerList } = this.props;
        const routes = getRoutes(match.path, routerList);
        return (
            <Layout style={{ height: "100vh" }}>
                <Sider trigger={null} collapsible collapsed={false}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header style={{padding:'0 50px', width: '100%',zIndex: 9,background:'#fff','boxShadow':'0 1px 4px rgba(0,21,41,.08)'}}>
                        <CenterHeader/>
                    </Header>
                    <Content style={{ margin: '24px 24px 0', height: '100%' ,background:'#fff'}} >
                        <Switch>
                            {routes.map(item => {
                                return <Route key={item.key} path={item.path} component={item.component} exact={item.exact} />;
                            })}
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default User;
