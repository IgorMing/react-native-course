/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';

import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class MyComponent extends Component {
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
    const { state: { loggedIn } } = this;

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
      <View style={styles.container}>
        <Header>Auth app</Header>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
