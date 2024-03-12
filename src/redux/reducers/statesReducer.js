const initialState = {
    states: [],
  };
  
  const statesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_STATES':
        return {
          ...state,
          states: action.payload,
        };
      default:
        return state;
    }
  };

  export default statesReducer;