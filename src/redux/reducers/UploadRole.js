import { ActionTypes } from "../constants/action-types";

const initialState = {
  newRole: [],
};

export const UploadRole = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPLOAD_ROLE:
      return { ...state, newRole: payload };
    default:
      return state;
  }
};
