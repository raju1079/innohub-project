
import { ActionTypes } from "../constants/action-types";
const initialState = {
  loading: false,
  error: null,
};

  export const UploadEmailPopup= (state = initialState, action) => {
  switch (action.type) {
    case 'POPUP_EMAIL_SENT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
      };
    case 'POPUP_EMAIL_SENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UploadEmailPopup;