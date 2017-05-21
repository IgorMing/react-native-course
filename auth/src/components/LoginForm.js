/* @flow */

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
  state = { email: '', password: '', err: '', loading: false };

  onButtonPress() {
    const { state: { email, password } } = this;

    this.setState({ error: '', loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch((err) => this.onLoginFail(err));
      });
  }

  onLoginFail(err) {
    this.setState({
      error: err.message,
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: 'Succeded',
      loading: false
    });

  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card style={styles.container}>
        <CardSection>
          <Input
            labelText="Email"
            onChangeText={(email) => this.setState({ email })}
            placeholderText="Type a user"
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
            <Input
              labelText="Password"
              onChangeText={(password) => this.setState({ password })}
              placeholderText="Password"
              secureTextEntry
              value={this.state.password}
            />
        </CardSection>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
