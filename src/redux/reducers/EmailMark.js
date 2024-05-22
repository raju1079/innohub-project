import { ActionTypes } from "../constants/action-types";

const initialState = {
    emailStatus: {},
};

export const EmailMark = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.EMAIL_SENT_SUCCESS:
          return {
            ...state,
            emailStatus: {
              ...state.emailStatus,
              [payload]: true,
            },
          };
        case ActionTypes.EMAIL_SENT_FAILURE:
          return {
            ...state,
            emailStatus: {
              ...state.emailStatus,
              [payload]: false,
            },
          };
        default:
          return state;
      }
    };