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
      const response = await axios.post('/api/students', formData);
      dispatch({
        type: 'SUBMIT_FORM_SUCCESS',
        payload: response.data,
      });
  
            // After form submission, send an email
    await dispatch(sendEmail(formData)); // Assuming email is part of formData
  
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
  
  
  export const adminLogin = (username, password) => async (dispatch) => {
    try {
      // Make HTTP POST request to login endpoint
      const response = await axios.post('/api/login', { username, password });
  
      // Extract message and token from response data
      const { message, token } = response.data;
      console.log('Token:', token);
      
      // Check if login was successful
      if (message === 'Login successful') {
        // Dispatch action to update Redux state with token
        dispatch({
          type: 'ADMIN_LOGIN_SUCCESS',
          payload: token // Store token in the Redux state
        });
      } else {
        // Dispatch action for login error
        dispatch({
          type: 'ADMIN_LOGIN_ERROR',
          payload: 'Invalid username or password'
        });
      }
    } catch (error) {
      console.error('Error occurred while logging in:', error);
      // Dispatch action for login error
      dispatch({
        type: 'ADMIN_LOGIN_ERROR',
        payload: 'Error occurred while logging in'
      });
    }
  };

export const fetchStudents = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/students');
   // console.log('Fetched data:', response.data); 
    dispatch({
      type: 'FETCH_STUDENTS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_STUDENTS_ERROR',
      payload: error,
    });
   // console.error('Error fetching students:', error);
  }
};

export const sendEmail = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/enrollMail', formData);
    dispatch({
      type: 'SEND_EMAIL_SUCCESS',
      payload: response.data,
    });
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    dispatch({
      type: 'SEND_EMAIL_ERROR',
      payload: error,
    });
    console.error('Error sending email:', error);
  }
};


export const updateEmailStatus = (student_Id, emailSent) => {
  console.log("updateEmailStatus Action:", student_Id, emailSent);
  return {
    type: 'UPDATE_EMAIL_STATUS',
    payload: { student_Id, emailSent },
  };
};
