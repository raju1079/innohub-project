import { ActionTypes } from "../constants/action-types";

const initialState = {
  educations: [],
};

const DeactivateEducation = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DEACTIVATE_EDUCATION_SUCCESS:
      return {
        ...state,
        educations: state.educations.map(state => {
          if (state.degree_id === payload) {
            return { ...state, status: 1 };
          }
          return state;
        })   
      };
    default:
      return state;
  }
};

export default DeactivateEducation;     
