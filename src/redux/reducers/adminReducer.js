// Define initial state
const initialState = {
  token: null, // Initially token is null
  loggedIn: false, // Optionally, you can track login status
  error: null // Optionally, you can track login errors
};

// Define reducer function
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN_LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload, // Update token in the state
        loggedIn: true, // Set login status to true
        error: null // Clear any previous login errors
      };
    case 'ADMIN_LOGIN_ERROR':
      return {
        ...state,
        error: action.payload, // Update login error message
        loggedIn: false // Set login status to false
      };
    case 'ADMIN_LOGOUT':
      return {
        ...state,
        token: null, // Clear token
        loggedIn: false // Set login status to false
      };
    case 'ADMIN_TOKEN_EXPIRED':
      return {
        ...state,
        token: null, // Clear token
        loggedIn: false, // Set login status to false
        error: 'Token expired' // Set error message for token expiration
      };
    default:
      return state;
  }
};

export default adminReducer;
