const initialState = {
  sendingEmail: false,
  emailSent: false,
  emailError: null,
  emailStatus:{},
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
   /*  case 'SEND_EMAIL_REQUEST':
      return {
        ...state,
        sendingEmail: true,
        emailSent: false,
        emailError: null,
      }; */
    case 'SEND_EMAIL_SUCCESS':
      return {
        ...state,
        sendingEmail: false,
        emailSent: true,
        emailError: null,
      };
    case 'SEND_EMAIL_ERROR':
      return {
        ...state,
        sendingEmail: false,
        emailSent: false,
        emailError: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
