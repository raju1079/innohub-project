import { ActionTypes } from "../constants/action-types";

const initialState = {
    updateState: [],
};

export const updateState = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.EDIT_STATE:
      return { ...state, updateState: payload };
    default:
      return state;
  }
};
