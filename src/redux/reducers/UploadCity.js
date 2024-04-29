import { ActionTypes } from "../constants/action-types";

const initialState = {
  newCity: [],
};

export const UploadCity = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPLOAD_CITY:
      return { ...state, newCity: payload };
    default:
      return state;
  }
};
