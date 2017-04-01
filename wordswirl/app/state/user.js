import { AsyncStorage } from 'react-native';
import { createAction } from 'redux-actions';

/* --- Action types --- */
export const GET_USER = 'GET_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const NO_USER_RECEIVED = 'NO_USER_RECEIVED';
export const SAVE_USER = 'SAVE_USER';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';

const initalState = {
  name: "Luckeboy"
}
/* --- Reducer --- */
const user = (state = initalState, action = {}) => {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        ...action.payload.user,
        userExists: true
      };
    case NO_USER_RECEIVED:
      return {
        ...state,
        userExists: false
      }
    case UPDATE_USERNAME:
      return {
        ...state,
        name: action.payload.username
      };
    default:
      return state;
  }
}
export default user;

/* --- Actions --- */
const USER_KEY = 'USER';

export const getUser = () => (
  dispatch => AsyncStorage.getItem(USER_KEY)
  .then(res => {
    if (res !== null) {
      const user = JSON.parse(res);
      dispatch(receiveUser(user));
    } else {
      dispatch(noUserRecived());
    }
  })
)

export const receiveUser = createAction(RECEIVE_USER, user => ({ user }));

export const noUserRecived = createAction(NO_USER_RECEIVED);

export const updateUsername = createAction(
  UPDATE_USERNAME, username => ({ username })
);
