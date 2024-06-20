// import { ActionTypes} from "./actions";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  isPopupMinimized: false,
};

const PopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPUP_STATE:
      return {
        ...state,
        isPopupMinimized: action.payload,
      };
    default:
      return state;
  }
};
 export default PopupReducer;
