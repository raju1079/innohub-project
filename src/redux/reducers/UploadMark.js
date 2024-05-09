import { ActionTypes } from "../constants/action-types";

const initialState = {
  newMark: [],
};

export const UploadMark = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPLOAD_MARK:
      return { ...state, newMark: payload };
    default:
      return state;
  }
};
