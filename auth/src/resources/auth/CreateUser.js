import React, { Component } from 'react';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { Button, Card, CardSection, Input } from '../common';

export default class CreateUser extends Component {
  state = {
    email: '',
    password: '',
    error: null
  }

  onSubmit() {
    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Actions.login({ type: 'reset' }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            labelText="Email"
            onChangeText={(email) => this.setState({ email })}
            placeholderText="email@domain.com"
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
        <CardSection>
          <Button onPress={this.onSubmit.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}
