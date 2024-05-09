import { ActionTypes } from "../constants/action-types";

const initialState = {
    mark: [],
};

export const FetchStudentMark = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_STUDENT_MARK:
      return { ...state, mark: payload };
    default:
      return state;
  }
};
