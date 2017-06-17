import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './AuthRedux';
import { Button, Card, CardSection, Input, Spinner } from '../common';

class LoginForm extends Component {
  onButtonPress() {
    const { props: { email, password, login } } = this;

    login(email, password);
  }

  renderButton() {
    const { loading } = this.props;

    if (loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    const {
      props: {
        email,
        password,
        error,
        setField,
      }
    } = this;

    return (
      <Card style={styles.container}>
        <CardSection>
          <Input
            labelText="Email"
            onChangeText={(input) => setField('email', input)}
            placeholderText="Type a user"
            value={email}
          />
        </CardSection>
        <CardSection>
            <Input
              labelText="Password"
              onChangeText={(input) => setField('password', input)}
              placeholderText="Password"
              secureTextEntry
              value={password}
            />
        </CardSection>
        <Text style={styles.errorStyle}>{error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  loading: PropTypes.bool,
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
  setField: PropTypes.func.isRequired,
};

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
  const { email, password, loading, error } = auth;

  return {
    email,
    password,
    loading,
    error
  };
};

export default connect(mapStateToProps, actions)(LoginForm);
