import { combineReducers } from 'redux';
import auth from './resources/auth/AuthRedux';
import task from './resources/tasks/TaskRedux';

export default combineReducers({
  auth,
  task
});
