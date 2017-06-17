import React from 'react';
import firebase from 'firebase';
import { Actions, Router, Scene } from 'react-native-router-flux';
import LoginForm from './resources/auth/LoginForm';
import TaskList from './resources/tasks/TaskList';
import TaskDetails from './resources/tasks/TaskDetails';
import TaskCreate from './resources/tasks/TaskCreate';

const logout = () => {
  firebase.auth().signOut();
  Actions.auth();
};

const RouterComponent = ({ loggedIn }) => {
  if (loggedIn === null) {
    return null;
  }

  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key="auth" initial={!loggedIn}>
        <Scene
          key="login"
          component={LoginForm}
          title="Please, log in"
          initial
        />
      </Scene>

      <Scene key="main" initial={loggedIn}>
        <Scene
          leftTitle="Log out"
          onLeft={() => logout()}
          onRight={() => Actions.taskCreate()}
          rightTitle="Blabla"
          key="taskList"
          component={TaskList}
          title="Task List! :D"
          initial
        />
        <Scene
          key="taskCreate"
          component={TaskCreate}
          title="Create"
        />
        <Scene
          key="taskDetails"
          component={TaskDetails}
          title="Details"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
