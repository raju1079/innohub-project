import { ActionTypes } from "../constants/action-types";

const initialState = {
  educationById: []
}

const FetchEducationById = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_EDUCATION_BY_ID:
      return { ...state, educationById: payload }
    default:
      return state;
  }
}

export default FetchEducationById;
