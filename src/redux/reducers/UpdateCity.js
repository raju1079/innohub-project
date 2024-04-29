import { ActionTypes } from "../constants/action-types";

const initialState = {
    updateCity: [],
};

export const updateCity = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.EDIT_CITY:
      return { ...state, updateCity: payload };
    default:
      return state;
  }
};
