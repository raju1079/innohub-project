const initialState = {
    events: [], // Initialize as an empty array
    loading: false,
    error: null
  };
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_EVENT_REQUEST":
      case "FETCH_EVENTS_REQUEST":
      case "UPDATE_EVENT_REQUEST":
      case "DELETE_EVENT_REQUEST":
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'ADD_EVENT_SUCCESS':
        return {
          ...state,
          loading: false,
          events: [...state.events, action.payload] // Add new event to existing events
        };
      case 'FETCH_EVENTS_SUCCESS':
        return {
          ...state,
          loading: false,
          events: action.payload // Replace events with fetched data
        };
      case 'UPDATE_EVENT_SUCCESS':
        return {
          ...state,
          loading: false,
          events: state.events.map(event => event.id === action.payload.id ? action.payload : event) // Update specific event in the list
        };
      case 'DELETE_EVENT_SUCCESS':
        return {
          ...state,
          loading: false,
          events: state.events.filter(event => event.id !== action.payload) // Remove deleted event from the list
        };
      case 'ADD_EVENT_FAILURE':
      case 'FETCH_EVENTS_FAILURE':
      case 'UPDATE_EVENT_FAILURE':
      case 'DELETE_EVENT_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload // Set error message in case of failure
        };
      default:
        return state;
    }
  };
  
  export default eventReducer;
  