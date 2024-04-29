import { ActionTypes } from "../constants/action-types";

const initialState = {
  cities: [],
};

const DeactivateCity = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DEACTIVATE_CITY_SUCCESS:
      return {
        ...state,
        cities: state.cities.map(state => {
          if (state.state_id === payload) {
            return { ...state, status: 1 };
          }
          return state;
        })   
      };
    default:
      return state;
  }
};

export default DeactivateCity;     
