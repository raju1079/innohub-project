import { ActionTypes } from "../constants/action-types";

const initialState = {
    updateEducation: [],
};

export const updateEducation = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.EDIT_EDUCATION:
      return { ...state, updateEducation: payload };
    default:
      return state;
  }
};
