import { combineReducers } from 'redux';
import auth from './resources/auth/AuthRedux';
import task from './resources/tasks/TaskRedux';
import tasks from './resources/tasks/TasksRedux';

export default combineReducers({
  auth,
  task,
  tasks
});
