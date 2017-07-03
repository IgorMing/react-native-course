import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import firebase from 'firebase';
import _ from 'lodash';

import { Confirm, Spinner } from '../common';
import TaskCard from './TaskCard';
import { getTasks } from './TasksRedux';

class TaskList extends Component {
  state = { showModal: false };

  componentDidMount() {
    this.props.getTasks();
  }

  askDeletion(id) {
    this.deletedId = id;
    this.setState({ showModal: true });
  }

  onAccept() {
    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/tasks/${this.deletedId}`)
      .remove()
      .then(() => this.setState({ showModal: false }));
  }

  renderTasks(tasks) {
    if (tasks.loading) {
      return <Spinner />;
    }

    return _.map(tasks.taskList, (value, uid) =>
      <TaskCard
        askDeletion={this.askDeletion.bind(this)}
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
        <Confirm
          onAccept={this.onAccept.bind(this)}
          onDecline={() => this.setState({ showModal: false })}
          visible={this.state.showModal}
        >
          Deseja apagar esta task?
        </Confirm>
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
