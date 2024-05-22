import { ActionTypes } from "../constants/action-types";

const initialState = {
  newPayment: [],
};

export const UploadPayment = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPLOAD_PAYMENT:
      return { ...state, newPayment: payload };
    default:
      return state;
  }
};
