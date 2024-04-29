import { ActionTypes } from "../constants/action-types";

const initialState = {
  states: [],
};

const DeactivateState = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DEACTIVATE_STATE_SUCCESS:
      return {
        ...state,
        states: state.states.map(state => {
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

export default DeactivateState;     
