import { ActionTypes } from "../constants/action-types";

const initialState = {
  totalEnrolledStudents: null,
  totalQualifiedStudents: null,
  totalRejectedStudents: null,
};

export const FetchStudent = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_STUDENT:
      return {
        ...state,
        totalEnrolledStudents: payload.totalEnrolledStudents,
        totalQualifiedStudents: payload.totalQualifiedStudents,
        totalRejectedStudents: payload.totalRejectedStudents,
      };
    default:
      return state;
  }
};
