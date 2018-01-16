import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import users_reducer from './reducers/users_reducer';

const rootReducer = combineReducers( { users_reducer } )
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <App store={store}/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
