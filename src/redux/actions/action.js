//import axios from "axios";
import { ActionTypes } from '../constants/action-types'
import axios from '../../api/axios'


export const setStates = (states) => ({
  type: ActionTypes.SET_STATES,
  payload: states,
});

export const fetchStates = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/state'); // replace with your API endpoint
    console.log('States data:', response.data);
    dispatch(setStates(response.data));
    
  } catch (error) {
    console.error('Error fetching cities:', error);
  }
};

export const setCities = (cities) => ({
    type: ActionTypes.SET_CITIES,
    payload: cities,
  });
  
  export const fetchCities = (selectedState) => async (dispatch) => {
    try {
      const response = await axios.get(`/api/city/${selectedState}`); // replace with your API endpoint
       console.log("states fetched", (response.data))
      dispatch(setCities(response.data));
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  
  export const setHigherEducation = (higherEducation) => ({
    type: ActionTypes.SET_HIGHER_EDUCATION,
    payload: higherEducation,
  });
  
  export const fetchHigherEducation = () => async (dispatch) => {
    try {
      const response = await axios.get('/api/degree'); // Replace with your API endpoint
      dispatch(setHigherEducation(response.data));
    } catch (error) {
      console.error('Error fetching higher education:', error);
    }
  };


  export const submitForm = (formData) => async (dispatch) => {
    try {
      const response = await axios.post('api/students', formData);
      dispatch({
        type: 'SUBMIT_FORM_SUCCESS',
        payload: response.data,
      });
  
      console.log(response.data);
    } catch (error) {
      dispatch({
        type: 'SUBMIT_FORM_ERROR',
        payload: error,
      });
  
      console.error('Error submitting form:', error);
    }
  };

  export const resetForm = () => ({
    type: "RESET_FORM",
  });
   

  