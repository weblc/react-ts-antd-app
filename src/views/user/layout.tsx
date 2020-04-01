import React, { Component } from 'react'
import { match } from "react-router";
import { getRoutes ,getStorage} from "@/utils";
import { Link, Redirect, Route, Switch } from 'react-router-dom'

interface userProps{
    history: History;
    match: match;
   
    routerList: any;
    location: Location;
}

 class User extends Component<userProps> {

   constructor (props:any ) {
       super(props)
       this.state = {

       }
   }

   componentDidMount (): void {

    }
   componentWillUnmount (): void {

    }
   render(){
    const { match, routerList } = this.props;
    const routes = getRoutes(match.path, routerList)
    console.log(routes)
       return (
           <div>
               <div>123</div>
               <Switch>
              {
                routes.map(item => {
                  return <Route
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                })
              }
            
            </Switch>
           </div>
           
       )
   }

}
export default User

