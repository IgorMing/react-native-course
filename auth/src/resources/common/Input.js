/* @flow weak */

import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';

export const Input = ({
  labelText,
  multiline,
  numberOfLines,
  onChangeText,
  placeholderText,
  secureTextEntry,
  value
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{labelText}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        placeholder={placeholderText}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 'auto',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
});

Input.propTypes = {
  labelText: PropTypes.string,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  onChangeText: PropTypes.func,
  placeholderText: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string
};
