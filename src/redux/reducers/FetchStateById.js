import { ActionTypes } from "../constants/action-types";

const initialState = {
  stateById: []
}

const FetchStateById = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_STATE_BY_ID:
      return { ...state, stateById: payload }
    default:
      return state;
  }
}

export default FetchStateById;
