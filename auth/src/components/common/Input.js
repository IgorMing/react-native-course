/* @flow weak */

import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';

export const Input = ({ labelText, onChangeText, placeholderText, value }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{labelText}</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholderText}
        style={inputStyle}
        value={value}
      >
        {value}
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
