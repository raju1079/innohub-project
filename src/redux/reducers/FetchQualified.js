import { ActionTypes } from "../constants/action-types";

const initialState = {
    mark: [],
};

export const FetchMark = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_MARK:
      return { ...state, mark: payload };
    default:
      return state;
  }
};
