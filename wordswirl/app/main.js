import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as reducers from './state';
import SignUpContainer from './features/sign-up/containers/main';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store} >
        <SignUpContainer />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
