import React from 'react';
import { Switch,Route,BrowserRouter } from 'react-router-dom';

import Home from '@/views/home'
import Login from '@/views/login'
export default class Layout extends React.Component{
  constructor(props:any){
    super(props);
    this.state={ }
  }


  render(){
    return(
        <BrowserRouter>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route exact path="/" component={ Home } />
        </Switch>

        </BrowserRouter>
    )
  }
}
