/* @flow */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers';
import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/auth/LoginForm';

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

  renderContent() {
    const { loggedIn } = this.state;

    if (loggedIn === null) {
      return <Spinner size="large" />;
    }

    if (loggedIn) {
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header>Auth app</Header>
          {this.renderContent()}
        </View>
      </Provider>
    );
  }
}
