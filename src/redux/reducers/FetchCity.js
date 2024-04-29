import { ActionTypes } from "../constants/action-types";

const initialState = {
    city: [],
};

export const FetchCity = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_CITY:
      return { ...state, city: payload };
    default:
      return state;
  }
};
