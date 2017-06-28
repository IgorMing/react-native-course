import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './TaskRedux';
import { Button, CardSection, Input } from '../common';

class TaskCreate extends Component {
  onSubmit() {
    const { props: { createTask, task } } = this;

    createTask(task);
  }

  render() {
    const {
      props: {
        setField,
        task: {
          description,
          storyPoints,
          taskTitle
        }
      }
    } = this;

    return (
      <View>
        <CardSection>
          <Input
            labelText="Title"
            onChangeText={(value) => setField('taskTitle', value)}
            placeholderText="Title"
            value={taskTitle}
          />
        </CardSection>
        <CardSection>
          <Text style={styles.titleStyle}>Story Points</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={storyPoints}
            onValueChange={(value) => setField('storyPoints', value)}>
            <Picker.Item label="0" value={0} />
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="5" value={5} />
            <Picker.Item label="8" value={8} />
            <Picker.Item label="13" value={13} />
          </Picker>
        </CardSection>
        <CardSection>
          <Input
            labelText="Description"
            onChangeText={(value) => setField('description', value)}
            placeholderText="Tap a description..."
            multiline={true}
            numberOfLines={8}
            value={description}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onSubmit.bind(this)}>
            Create task
          </Button>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
});

TaskCreate.propTypes = {
  createTask: PropTypes.func,
  setField: PropTypes.func,
  task: PropTypes.object,
};

const mapStateToProps = ({ task }) => ({ task });

export default connect(mapStateToProps, actions)(TaskCreate);
