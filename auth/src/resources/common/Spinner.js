import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export const Spinner = ({ size }) =>
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || 'large'} />
  </View>;

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
