import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import _ from 'lodash';

import { Spinner } from '../common/Spinner';
import TaskCard from './TaskCard';
import { getTasks } from './TasksRedux';

class TaskList extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  renderTasks(tasks) {
    if (tasks.loading) {
      return <Spinner />;
    }

    return _.map(tasks.taskList, (value, uid) =>
      <TaskCard
        key={uid}
        id={uid}
        description={value.description}
        title={value.taskTitle}
        storyPoints={value.storyPoints}
      />
    );
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        {this.renderTasks(this.props.tasks)}
      </View>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.shape({
    taskList: PropTypes.object
  }),
  getTasks: PropTypes.func,
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps, { getTasks })(TaskList);
