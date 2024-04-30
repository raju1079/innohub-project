// rolesReducer.js

import { ActionTypes } from "../constants/action-types";

const initialState = {
  roles: [], // Initial state with an empty array for roles
};

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ROLES:
      return {
        ...state,
        roles: action.payload, // Update roles in the state with the payload received from the action
      };
    default:
      return state;
  }
};

export default rolesReducer;
