// reducers/higher-education-reducer.js
import { ActionTypes } from '../constants/action-types';

const initialState = {
  higherEducation: [],
  // ... other initial states
};

const higherEducationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_HIGHER_EDUCATION:
      return {
        ...state,
        higherEducation: action.payload,
      };
    // ... other cases
    default:
      return state;
  }
};

export default higherEducationReducer;
