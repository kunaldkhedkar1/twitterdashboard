import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./js/components/container/header";
import { createStore, applyMiddleware } from "redux";
import rootReducer from './js/reducers'
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import actionWatcher from './js/sagas/hellosaga'
import Layout from "./js/components/container/Layout";
import {loadState, saveState} from './js/localStorage'
var defaultState = {
    layout:{
      options: {
        order :["newsycombinator", "makeschool", "ycombinator"]
      }
    },
    tweets:[],
    loading:false,
    accounts:{
      "newsycombinator":{options:{count:30}},
      "makeschool":{options:{count:30}},
      "ycombinator":{options:{count:30}}
    }
};
var persitedState = loadState();
console.log('persistedstate', persitedState)
var initialState = persitedState !==undefined ? persitedState : defaultState;


// TODO add localstorage persit state logic
var sagaMiddleWare = createSagaMiddleware();
var store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleWare)
);

store.subscribe(()=>{
  let state = store.getState();
  let {accounts, layout} = state;
  saveState({accounts, layout})
})
sagaMiddleWare.run(actionWatcher)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {/* TODO probably remove browser router */}
        <BrowserRouter>
          <Fragment>
            <Header />
            <Layout />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
