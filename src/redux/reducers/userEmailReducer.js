const initialState = {
    loading: false,
    error: null,
  };
  
  const userEmailReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EMAIL_SENT_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
        };
      case 'EMAIL_SENT_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userEmailReducer;