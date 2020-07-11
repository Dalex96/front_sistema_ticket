import React from 'react';
import Router from './router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import rootReducer from "./store/reducers";
import Footer from './layout/footer'
import Nav from './layout/nav'

import './App.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

function App() {
  return (
  	<Provider store={createStoreWithMiddleware(rootReducer)}>
    <div>
      <Nav/>
        <Router/>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
