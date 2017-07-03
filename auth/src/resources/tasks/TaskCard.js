import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';

class TaskCard extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ x: gesture.dx, y: 0 });
      },
      onPanResponderRelease: (event, gesture) => {
        const PIXELS_LIMIT = 100;

        if (Math.abs(gesture.dx) > PIXELS_LIMIT) {
          this.props.askDeletion(this.props.id);
        }

        this.position.setValue({ x: 0, y: 0 });
      }
    });
  }

  render() {
    const { title, description, storyPoints, id } = this.props;
    const {
      containerStyle,
      idStyle,
      titleStyle,
      descriptionStyle,
      mainContentStyle,
      pointsContainerStyle
    } = styles;

    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[containerStyle, this.position.getLayout()]}
      >
        <View style={mainContentStyle}>
          <Text style={idStyle}>{id}</Text>
          <Text style={titleStyle}>{title}</Text>
          <Text style={descriptionStyle}>{description}</Text>
        </View>
        <View style={pointsContainerStyle}>
          <Text>Story points</Text>
          <Text>{storyPoints}</Text>
        </View>
      </Animated.View>
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
  askDeletion: PropTypes.func,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.string,
  storyPoints: PropTypes.number.isRequired,
};

export default TaskCard;
