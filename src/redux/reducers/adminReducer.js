// loginReducer.js

const initialState = {
  loggedIn: false,
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN_LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: true,
        error: null,
      };
    case 'ADMIN_LOGIN_ERROR':
      return {
        ...state,
        loggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
