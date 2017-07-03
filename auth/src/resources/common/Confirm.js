import React from 'react';
import PropTypes from 'prop-types';
import { Modal, StyleSheet, Text, View } from 'react-native';

import { Button, CardSection } from '.';


export const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { cardSectionStyle, containerStyle, textStyle } = styles;

  return (
    <Modal
      animationType={"slide"}
      transparent
      visible={visible}
      onRequestClose={() => {}}
      >
        <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>
              {children}
            </Text>
          </CardSection>
          <CardSection>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardSection>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 40
  }
});

Confirm.propTypes = {
  children: PropTypes.string,
  onAccept: PropTypes.func,
  onDecline: PropTypes.func,
  visible: PropTypes.bool,
};
