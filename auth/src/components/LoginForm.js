/* @flow */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  state = { userName: '' };

  render() {
    return (
      <Card style={styles.container}>
        <CardSection>
          <Input
            labelText="Username"
            onChangeText={(userName) => this.setState({ userName })}
            placeholderText="Type a user"
            value={this.state.value}
          />
        </CardSection>
        <CardSection></CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
