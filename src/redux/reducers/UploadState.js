import { ActionTypes } from "../constants/action-types";

const initialState = {
  newState: [],
};

export const UploadState = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPLOAD_STATE:
      return { ...state, newState: payload };
    default:
      return state;
  }
};
