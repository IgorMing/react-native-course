/* @flow */

import React, { Component } from 'react';
import firebase from 'firebase';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers';
import Router from './Router';

const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDyRP5Wn4UFJoqCe48N6RE2OnAZVMBE82E",
      authDomain: "auth-a9ddc.firebaseapp.com",
      databaseURL: "https://auth-a9ddc.firebaseio.com",
      projectId: "auth-a9ddc",
      storageBucket: "auth-a9ddc.appspot.com",
      messagingSenderId: "493513482096"
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: Boolean(user) });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
