import React from 'react';
import {
  View,
  Text,
  StyleSheet,
 } from 'react-native';

const Header = ({ children }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 4,
  }
});

export default Header;
