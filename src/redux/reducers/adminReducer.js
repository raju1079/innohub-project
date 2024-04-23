// reducers/adminReducer.js

const initialState = {
  loggedIn: false,
  token: null,
  error: null
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN_LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: true,
        token: action.payload,
        error: null
      };
    case 'ADMIN_LOGIN_ERROR':
      return {
        ...state,
        loggedIn: false,
        token: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default adminReducer;
