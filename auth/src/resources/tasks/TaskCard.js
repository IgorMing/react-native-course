import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const TaskCard = ({ title, description, storyPoints, id }) => {
  const {
    containerStyle,
    idStyle,
    titleStyle,
    descriptionStyle,
    mainContentStyle,
    pointsContainerStyle
  } = styles;

  return (
    <View style={containerStyle}>
      <View style={mainContentStyle}>
        <Text style={idStyle}>{id}</Text>
        <Text style={titleStyle}>{title}</Text>
        <Text style={descriptionStyle}>{description}</Text>
      </View>
      <View style={pointsContainerStyle}>
        <Text>Story points</Text>
        <Text>{storyPoints}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  mainContentStyle: {
    flex: 4
  },
  pointsContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  idStyle: {
    fontSize: 12
  },
  titleStyle: {
    fontSize: 20
  },
  descriptionStyle: {
    fontSize: 14
  },
});

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.string,
  storyPoints: PropTypes.number.isRequired,
};

export default TaskCard;
