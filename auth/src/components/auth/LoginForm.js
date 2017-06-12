/* @flow */

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './AuthRedux';
import { Button, Card, CardSection, Input, Spinner } from '../common';

class LoginForm extends Component {
  onButtonPress() {
    const { props: { email, password, login } } = this;

    login(email, password);

    //     firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  render() {
    const {
      props: {
        email,
        password,
        error,
        setEmail,
        setPassword
      }
    } = this;

    return (
      <Card style={styles.container}>
        <CardSection>
          <Input
            labelText="Email"
            onChangeText={(input) => setEmail(input)}
            placeholderText="Type a user"
            value={email}
          />
        </CardSection>
        <CardSection>
            <Input
              labelText="Password"
              onChangeText={(input) => setPassword(input)}
              placeholderText="Password"
              secureTextEntry
              value={password}
            />
        </CardSection>
        <Text style={styles.errorStyle}>{error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
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

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;

  return {
    email,
    password,
    error
  };
};

export default connect(mapStateToProps, actions)(LoginForm);
