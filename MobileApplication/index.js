/** @format */

import { AppRegistry } from "react-native"
import React from "react"
// import App from "./App"
import { name as appName } from "./app.json"
//redux
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import allReducers from "./src/reducers"

// redux saga
import createSagaMiddleware from "redux-saga"
import rootSaga from "./src/sagas"

const sagaMiddleware = createSagaMiddleware()

let store = createStore(allReducers, applyMiddleware(sagaMiddleware))

import AppContainer from "./src/navigation/navigate"
import ProcessHUD from "./src/Component/process-hud"
import MyMapView from "./my-map-view"

const App = () => (
  <Provider store={store}>
    <ProcessHUD />
    <AppContainer />
  </Provider>
)
sagaMiddleware.run(rootSaga)

AppRegistry.registerComponent(appName, () => App)
