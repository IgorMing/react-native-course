import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const CREATE_TASK = 'tasks/taskCreate/create-task';
const SET_FIELD = 'tasks/taskCreate/set-field';

const INITIAL_STATE = {
  description: '',
  taskTitle: '',
  storyPoints: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TASK: return INITIAL_STATE;
    case SET_FIELD: return { ...state, ...action.payload };
    default: return state;
  }
};

export const createTask = (task) => (dispatch) => {
  const { currentUser } = firebase.auth();

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/tasks`)
    .push(task)
    .then(() => {
      dispatch({ type: CREATE_TASK });
      Actions.taskList({ type: 'reset' });
    });
};

export const setField = (field, value) => ({
  type: SET_FIELD,
  payload: { [field]: value }
});
