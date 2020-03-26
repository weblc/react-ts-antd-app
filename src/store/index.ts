/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-24 11:56:28
 */

import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import reduxThunk from 'redux-thunk';

import userReducer from './modules/user/reducer'
import appReducer from './modules/app'
const { composeWithDevTools } = require('redux-devtools-extension');


const reduer = combineReducers({
    user: userReducer,
    app: appReducer,
  });

 /* eslint-disable no-underscore-dangle */
 const store = createStore(
    reduer, /* preloadedState, */
    compose(applyMiddleware(reduxThunk),composeWithDevTools())

   );
   /* eslint-enable */

   export default store
