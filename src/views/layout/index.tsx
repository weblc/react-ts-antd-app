import React from "react";
import { connect } from "react-redux"
import { set_user } from '@/store/modules/user/action'
import { match } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { getRoutes ,getStorage} from "@/utils";
import api from '@/api'
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
    checkLoginStatus = ()=>{
        const token = getStorage('token')
        if(token){
            api.user.getUserInfo(token).then((res)=>{
               
               this.props.set_user(res.data)
            })
        }

    }
    render() {
        

        const { match, routerList } = this.props;
        const routes = getRoutes(match.path, routerList);
        this.checkLoginStatus()

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



export default connect(() => ({}), {
    set_user,
  })(Layout);