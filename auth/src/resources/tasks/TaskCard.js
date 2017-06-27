import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TaskCard extends Component {
  render () {
    const {
      containerStyle,
      titleStyle,
      descriptionStyle,
      mainContentStyle,
      pointsContainerStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <View style={mainContentStyle}>
          <Text style={titleStyle}>title test</Text>
          <Text style={descriptionStyle}>description test!!!</Text>
        </View>
        <View style={pointsContainerStyle}>
          <Text>Story points</Text>
          <Text>3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  mainContentStyle: {
    flex: 4,
    alignSelf: 'flex-start'
  },
  pointsContainerStyle: {
    flex: 1,
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 20
  },
  descriptionStyle: {
    fontSize: 14
  },
});
