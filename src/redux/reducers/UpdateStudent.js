import { ActionTypes } from "../constants/action-types";

const initialState = {
    updateStudent: [],
};

export const updateStudent = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.EDIT_STUDENT:
      return { ...state, updateStudent: payload };
    default:
      return state;
  }
};
