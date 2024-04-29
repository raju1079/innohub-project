import { ActionTypes } from "../constants/action-types";

const initialState = {
  cityById: []
}

const FetchCityById = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_CITY_BY_ID:
      return { ...state, cityById: payload }
    default:
      return state;
  }
}

export default FetchCityById;
