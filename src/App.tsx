import React from 'react';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import { asyncComponent} from '@/components/AsyncComponent'
const Home = asyncComponent(()=>import('@/views/home'))
const App: React.FC = () => {

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/user" render={()=><div>login</div>} />
      <Route exact path="/" component={ Home } />
    </Switch>

    </BrowserRouter>


  );
}

export default App;
