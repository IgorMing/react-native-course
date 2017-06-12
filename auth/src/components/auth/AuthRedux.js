import firebase from 'firebase';

const SET_EMAIL = 'auth/loginForm/setEmail';
const SET_PASSWORD = 'auth/loginForm/setPassword';
const SET_ERROR = 'auth/loginForm/setError';
const LOGIN = 'auth/loginForm/login';

const INITIAL_VALUE = {
  email: '',
  password: '',
  user: null,
  error: null
};

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case SET_EMAIL: return { ...state, email: action.payload };
    case SET_PASSWORD: return { ...state, password: action.payload };
    case SET_ERROR: return { ...state, error: action.payload };
    case LOGIN: return { ...state, user: action.payload };
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

export const setError = (err) => ({
  type: SET_ERROR,
  payload: `Authentication failed. ${err}`
});

export const login = (email, password) => (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => dispatch({ type: LOGIN, payload: user }))
    .catch((err) => dispatch(setError(err)));
};
