// reducers/citiesReducer.js
const initialState = {
    cities: [],
  };
  
  const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CITIES':
        return {
          ...state,
          cities: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default citiesReducer;
  