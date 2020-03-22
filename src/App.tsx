import React from 'react';
import { Switch,Route,BrowserRouter } from 'react-router-dom';

import { getRouterList } from '@/router'

import './mock'

const routerList: any = getRouterList()

const App: React.FC = () => {
    const Layout = routerList['/'].component
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/'  render={(props) => {
          return  <Layout {...props} routerList={routerList}/>

        }}/>
    </Switch>
    </BrowserRouter>


  );
}

export default App;
