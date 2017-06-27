import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import _ from 'lodash';
import TaskCard from './TaskCard';

import { getTasks } from './TasksRedux';

class TaskList extends Component {
  componentWillMount() {
    this.props.getTasks();
  }

  renderTasks(tasks) {
    return _.map(tasks, (value, uid) => {
      return <Text>UID {uid} VALUE {value.taskTitle} </Text>
    });
  }

  render () {
    return (
      <View style={styles.containerStyle}>
        {this.renderTasks(this.props.tasks.taskList)}
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'flex-start'
  }
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps, { getTasks })(TaskList);
