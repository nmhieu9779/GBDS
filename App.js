import React from "react"

import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {composeWithDevTools} from "redux-devtools-extension"

import allReducers from "./src/redux/reducers"

import createSagaMiddleware from "redux-saga"
import rootSaga from "./src/redux/sagas"

const sagaMiddleware = createSagaMiddleware()

let store = createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

import AppContainer from "./src/navigation/navigate"
import ProcessHUD from "./src/component/process-hud"
import SelectTypePost from "./src/component/add-floating-button/select-type-post"
import NavigationService from "./src/navigation/NavigationService"
import Message from "./src/component/message"
import ToastMessage from "./src/component/toast-message"

console.disableYellowBox = true
const App = () => {
  return (
    <Provider store={store}>
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
      <ProcessHUD />
      <SelectTypePost />
      <Message />
      <ToastMessage />
    </Provider>
  )
}
sagaMiddleware.run(rootSaga)

export default App
