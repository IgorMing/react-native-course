/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';

import Header from './components/common/Header';
import LoginForm from './components/LoginForm';

export default class MyComponent extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDyRP5Wn4UFJoqCe48N6RE2OnAZVMBE82E",
      authDomain: "auth-a9ddc.firebaseapp.com",
      databaseURL: "https://auth-a9ddc.firebaseio.com",
      projectId: "auth-a9ddc",
      storageBucket: "auth-a9ddc.appspot.com",
      messagingSenderId: "493513482096"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>Auth app</Header>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
