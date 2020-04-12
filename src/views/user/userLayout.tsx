import React, { Component } from "react";
import { connect } from "react-redux"
import { match, Redirect } from "react-router";
import { Layout, Menu, Row, Col } from "antd";
import { SvgIcon } from "@/components";
import { getRoutes, getStorage } from "@/utils";
import { Route, Switch, Link } from "react-router-dom";
import { Space } from '@/components'
import CenterHeader from "./header";

import api from '@/api'
const { Header, Sider, Content } = Layout;
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

    componentDidMount(): void { 
       
    }
    componentWillUnmount(): void { }

    render() {
        const { match, routerList, app } = this.props;
        const routes = getRoutes(match.path, routerList);

        return (
            <Layout style={{ height: "100vh" }}>
                <Sider trigger={null} collapsible collapsed={app.collapsed} style={{ background: '#ececec' }}>
                    <Link to="/home" >
                        <SvgIcon type="icon-chouzhi" size={58} />
                    </Link>
                    <Menu mode="inline" defaultSelectedKeys={["0"]} style={{ background: '#ececec' }}>
                        {routes.map((e, i) => (
                            <Menu.Item key={`${i}`} title={e.name}>

                                <Link to={e.path} style={{lineHeight:'12px',height:'100%'}}>
                                    <Space size={30}>
                                        <SvgIcon type={e.icon} size={22} />
                                        <span>{e.name}</span>
                                    </Space>
                                </Link>

                            </Menu.Item>


                        ))}
                    </Menu>
                </Sider>
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
                    <Content style={{height: "100%", background: "f0f2f5" }}>
                        <Redirect to={{
                            pathname: '/user/analysis'
                        }} />
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

export default connect(({ app }: any) => ({ app }))(User);
