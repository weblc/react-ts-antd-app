import React from 'react';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import { asyncComponent} from '@/components/AsyncComponent'
// import Home from '@/views/home'
// import Login from '@/views/login'

const Home = asyncComponent(()=>import('@/views/home'))

export default class Layout extends React.Component{
  constructor(props:any){
    super(props);
    this.state={ }
  }


  render(){
    return(
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>

        </BrowserRouter>
    )
  }
}
