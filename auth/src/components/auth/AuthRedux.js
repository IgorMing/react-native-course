import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const SET_EMAIL = 'auth/loginForm/setEmail';
const SET_PASSWORD = 'auth/loginForm/setPassword';
const SET_ERROR = 'auth/loginForm/setError';
const LOGIN = 'auth/loginForm/login';
const LOADING = 'auth/loginForm/loading';

const INITIAL_VALUE = {
  email: '',
  password: '',
  user: null,
  loading: false,
  error: null
};

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case SET_EMAIL: return { ...state, email: action.payload };
    case SET_PASSWORD: return { ...state, password: action.payload };
    case SET_ERROR: return { ...state, error: action.payload, loading: false };
    case LOGIN: return { ...state, user: action.payload, loading: false };
    case LOADING: return { ...state, loading: true };
    default: return state;
  }
};

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password
});

const loading = () => ({ type: LOADING });

export const setError = (err) => ({
  type: SET_ERROR,
  payload: `Authentication failed. ${err}`
});

export const login = (email, password) => (dispatch) => {
  dispatch(loading());

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch({ type: LOGIN, payload: user });
      Actions.taskList();
    })
    .catch((err) => dispatch(setError(err)));
};
