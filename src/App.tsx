import React from 'react';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import { getRouterList } from '@/router'
import './mock'



import store from './store'


console.log(store)





const routerList: any = getRouterList()

const App: React.FC = () => {
    const Layout = routerList['/'].component
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/'  render={(props:any) => {
          return  <Layout {...props} routerList={routerList}/>

        }}/>
    </Switch>
    </BrowserRouter>


  );
}

export default App;
