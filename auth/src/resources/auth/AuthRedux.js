import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const SET_FIELD = 'auth/loginForm/setField';
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
    case SET_FIELD: return { ...state, ...action.payload };
    case SET_ERROR: return { ...state, error: action.payload, loading: false };
    case LOGIN: return { ...state, user: action.payload, loading: false };
    case LOADING: return { ...state, loading: true };
    default: return state;
  }
};

export const setField = (field, value) => ({
  type: SET_FIELD,
  payload: { [field]: value }
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
      Actions.loggedIn();
    })
    .catch((err) => dispatch(setError(err)));
};
