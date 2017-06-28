import firebase from 'firebase';

const GET_TASKS = 'tasks/taskRedux/get-tasks';

const INITIAL_STATE = {
  loading: true,
  taskList: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case GET_TASKS: return {
        ...state,
        loading: false,
        taskList: action.payload
      };
    default: return state;
  }
};

export const getTasks = () => (dispatch) => {
  const { currentUser } = firebase.auth();

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/tasks`)
    .on('value', (snapshot) => {
      dispatch({ type: GET_TASKS, payload: snapshot.val() });
    });
};
