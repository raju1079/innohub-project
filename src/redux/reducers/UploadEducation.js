import { ActionTypes } from "../constants/action-types";

const initialState = {
  newEducation: [],
};

export const UploadEducation = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPLOAD_EDUCATION:
      return { ...state, newEducation: payload };
    default:
      return state;
  }
};
