const initialState = {
    formData: null,
    error: null,
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_FORM_SUCCESS':
        console.log('Form Data received:', action.payload); // Add this line to log the formData
        return {
          ...state,
          formData: action.payload,
          error: null,
        };
      case 'SUBMIT_FORM_ERROR':
        return {
          ...state,
          formData: null,
          error: action.payload.message,
        };
      case 'RESET_FORM':
       return initialState;
      default:
        return state;
    }
  };
  
  export default formReducer;
  