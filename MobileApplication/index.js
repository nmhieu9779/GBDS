/** @format */

import { AppRegistry } from "react-native"
import React, { Component } from "react"
// import App from "./App"
import { name as appName } from "./app.json"
// import AppContainer from "./src/navigation/Navigate"
//redux
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import allReducers from "./src/reducers"

// redux saga
import createSagaMiddleware from "redux-saga"
import rootSaga from "./src/sagas"

const sagaMiddleware = createSagaMiddleware()

let store = createStore(allReducers, applyMiddleware(sagaMiddleware))

import ForSalePostScreen from "./src/ForSalePostScreen/ForSalePostScreen"
import LoginScreen from "./src/LoginScreen/LoginScreen"

// Text.defaultProps.style = {font}

const App = () => (
  <Provider store={store}>
    <LoginScreen />
  </Provider>
)
sagaMiddleware.run(rootSaga)

AppRegistry.registerComponent(appName, () => App)
