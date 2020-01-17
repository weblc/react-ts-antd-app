import React from "react";
import { match } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { asyncComponent } from "@/components/AsyncComponent";
import { getRoutes } from "@/utils";
// import Home from '@/views/home'
// import Login from '@/views/login'

interface LayoutProps {
    history: History;
    match: match;
    userInfo: string;
    routerList: any;
    location: Location;
    setUserInfo: (s: string) => void;
}
export default class Layout extends React.Component<LayoutProps> {
    constructor(props: Readonly<LayoutProps>) {
        super(props);
        this.state = {};
    }

    render() {
        const { match, routerList } = this.props;
        const routes = getRoutes(match.path, routerList);
        console.log(routes);

        return (
            <Switch>
                {routes.map(item => {
                    return (
                        <Route
                            key={item.key}
                            path={item.path}
                            component={item.component}
                            exact={item.exact}
                        />
                    );
                })}
                <Redirect to='/home'/>
            </Switch>
        );
    }
}
