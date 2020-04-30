import React from "react";
import { connect } from "react-redux"
import { set_user } from '@/store/modules/user/action'
import { match } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { getRoutes } from "@/utils";
import NotFound from '@/views/notFound/404'
import BackHome from '@/components/BackHome'

interface LayoutProps {
history: History;
match: match;
userInfo: string;
routerList: any;
location: Location;
set_user: (payload:any)=>any
}
class Layout extends React.Component<LayoutProps> {
    constructor(props: Readonly<LayoutProps>) {
        super(props);
        this.state = {};
        }

        render() {


        const { match, routerList } = this.props;
        const routes = getRoutes(match.path, routerList);

        return (
        <div>
            <BackHome/>
            <Switch>
                {routes.map(item => {
                return (
                <Route key={item.key} path={item.path} component={item.component} exact={item.exact} routerList={routerList}/>
                );
                })}
                 <Redirect exact from='/' to='/home' />
                 <Route render={NotFound}/>
            </Switch>
        </div>

        );
        }
        }



        export default connect(() => ({}), {
        set_user,
        })(Layout);
