import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import TaskList from './components/tasks/TaskList';

const RouterComponent = () =>
  <Router style={{ flex: 1, paddingTop: 60 }}>
    <Scene
      key="loginForm"
      component={LoginForm}
      title="Please, log in"
      initial
    />
    <Scene
      key="taskList"
      component={TaskList}
      title="Task List! :D"
    />
  </Router>;

export default RouterComponent;
