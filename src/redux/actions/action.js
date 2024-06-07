//import axios from "axios";
import { ActionTypes } from '../constants/action-types'
import axios from '../../api/axios'
import { toast } from "react-toastify"

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
        // Store token in localStorage
        localStorage.setItem('token', token);
        
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
    const totalEnrolledStudents = response.data.length; 
   // console.log('Fetched data:', response.data); 
    console.log('totalEnrolledStudents     :',totalEnrolledStudents)
    dispatch({
      type: 'FETCH_STUDENTS_SUCCESS',
      payload: response.data,
      totalEnrolledStudents: totalEnrolledStudents,
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

export const fetchStateById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/state/${id}`);
      console.log(response.data,"data");
    if (response.status === 200) {
      const stateData = response.data;
      //console.log(stateData,"stateData");
      dispatch({
        type: ActionTypes.FETCH_STATE_BY_ID,
        payload: stateData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching state by ID:', error);
  }
};

export const uploadNewState = (newStateData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/state', newStateData);
    const stateData = response.data;
    console.error('State loaded', stateData);
    toast.success("State created successfully");
    dispatch({
      type: ActionTypes.UPLOAD_STATE,
      payload: stateData
    });
  } catch (error) {
    // Check if the error response contains the message indicating state name duplication
    if (error.response && error.response.data && error.response.data.error === 'State name is already available, provide a new state name') {
      toast.error("State name is already available, provide a new State name");
    } else {
      console.error(error);
    }
  }
};

export const updateStateById = (updateStateData, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/state/${id}`, updateStateData);
    const stateData = response.data; 
    console.error('State updated', stateData);
    toast.success("You have successfully updated State");
    dispatch({
      type: ActionTypes.EDIT_STATE,
      payload: stateData
    });    
  } catch (error) {
    console.error( error);
  }
};

export const deactivateState = (stateId) => async (dispatch) => {
  console.log(stateId, "stateId");
  try {
    const response = await axios.put(`/api/state/${stateId}/deactivate`);
    if (response.status === 200) {
      toast.success(`You have successfully deactivated State Id ${stateId}`);
      dispatch({
        type: ActionTypes.DEACTIVATE_STATE_SUCCESS,
        payload: stateId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating state:', error);
  }
};

export const fetchCityList = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/city');

    if (response.status === 200) {
      const cityData = response.data;
      dispatch({
        type: ActionTypes.FETCH_CITY,
        payload: cityData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching cities:', error);
  }
};

export const fetchCityById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/city/${id}/city`);
      console.log(response.data,"data");
    if (response.status === 200) {
      const cityData = response.data;
      //console.log(cityData,"cityData");
      dispatch({
        type: ActionTypes.FETCH_CITY_BY_ID,
        payload: cityData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching city by ID:', error);
  }
};

export const uploadNewCity = (newCityData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/city', newCityData);
    const cityData = response.data;
    console.error('City loaded', cityData);
    toast.success("City created successfully");
    dispatch({
      type: ActionTypes.UPLOAD_CITY,
      payload: cityData
    });
  } catch (error) {
    // Check if the error response contains the message indicating city name duplication
    if (error.response && error.response.data && error.response.data.error === 'City name is already available, provide a new city name') {
      toast.error("City name is already available, provide a new City name");
    } else {
      console.error(error);
    }
  }
};

export const updateCityById = (updateCityData, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/city/${id}/city`, updateCityData);
    const cityData = response.data; 
    console.error('City updated', cityData);
    toast.success("You have successfully updated City");
    dispatch({
      type: ActionTypes.EDIT_CITY,
      payload: cityData
    });    
  } catch (error) {
    console.error( error);
  }
};

export const deactivateCity = (cityId) => async (dispatch) => {
  console.log(cityId, "cityId");
  try {
    const response = await axios.put(`/api/city/${cityId}/deactivate`);
    if (response.status === 200) {
      toast.success(`You have successfully deactivated City Id ${cityId}`);
      dispatch({
        type: ActionTypes.DEACTIVATE_CITY_SUCCESS,
        payload: cityId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating state:', error);
  }
};

export const fetchEducationById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/degree/${id}`);
      console.log(response.data,"data");
    if (response.status === 200) {
      const educationData = response.data;
      //console.log(educationData,"educationData");
      dispatch({
        type: ActionTypes.FETCH_EDUCATION_BY_ID,
        payload: educationData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching education by ID:', error);
  }
};

export const uploadNewEducation = (newEducationData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/degree', newEducationData);
    const educationData = response.data;
    console.error('Education loaded', educationData);
    toast.success("Education created successfully");
    dispatch({
      type: ActionTypes.UPLOAD_EDUCATION,
      payload: educationData
    });
  } catch (error) {
    // Check if the error response contains the message indicating Education name duplication
    if (error.response && error.response.data && error.response.data.error === 'Education name is already available, provide a new education name') {
      toast.error("Education name is already available, provide a new Education name");
    } else {
      console.error(error);
    }
  }
};

export const updateEducationById = (updateEducationData, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/degree/${id}`, updateEducationData);
    const educationData = response.data; 
    console.error('Education updated', educationData);
    toast.success("You have successfully updated Education");
    dispatch({
      type: ActionTypes.EDIT_EDUCATION,
      payload: educationData
    });    
  } catch (error) {
    console.error( error);
  }
};

export const deactivateEducation = (degreeId) => async (dispatch) => {
  console.log(degreeId, "degreeId");
  try {
    const response = await axios.put(`/api/degree/${degreeId}/deactivate`);
    if (response.status === 200) {
      toast.success(`You have successfully deactivated Education Id ${degreeId}`);
      dispatch({
        type: ActionTypes.DEACTIVATE_EDUCATION_SUCCESS,
        payload: degreeId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating education:', error);
  }
};

export const setRoles = (roles) => ({
  type: ActionTypes.SET_ROLES,
  payload: roles,
});

export const fetchRoles = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/roles');
    // console.log("Roles data", response.data);
    dispatch(setRoles(response.data));
  } catch(error) {
    console.error('Error in fetching roles', error)
  }
};


export const sendUserForm = (userFormData) => async (dispatch) => {
  try {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');
    console.log(token)

    // Check if token exists
    if (!token) {
      // Handle case where token is not found in local storage
      console.error('Token not found in local storage');
      dispatch({
        type: 'SUBMIT_USER_FORM_ERROR',
        payload: 'Token not found in local storage'
      });
      return;
    }

    const response = await axios.post('/api/grant-access', userFormData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('User form data received', response.data);
    dispatch({
      type: 'SUBMIT_USER_FORM_SUCCESS',
      payload: response.data // Assuming your response includes form data
    });
    // await dispatch(userFormData)
    console.log('User form submitted successfully', response.data);
  } catch (error) {
    console.error('Error submitting user form data', error);
    dispatch({
      type: 'SUBMIT_USER_FORM_ERROR',
      payload: error.message
    });
  }
};

export const sendLoginCredentials = (userData) => async (dispatch) => {
  try {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');
    console.log(token);

    // Check if token exists
    if (!token) {
      // Handle case where token is not found in local storage
      console.error('Token not found in local storage');
      dispatch({
        type: 'EMAIL_SENT_FAILURE',
        payload: 'Token not found in local storage'
      });
      return;
    }

    await axios.post('/api/send-login-credentials', userData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Dispatch an action indicating successful email sending if needed
    dispatch({ type: 'EMAIL_SENT_SUCCESS' });
  } catch (error) {
    // Dispatch an action for handling email sending failure if needed
    console.error('Error sending login credentials', error);
    dispatch({ type: 'EMAIL_SENT_FAILURE', payload: error.message });
  }
};





export const fetchUsers=()=>async(dispatch)=>{
  try{
    const response=await axios.get('/api/usermanage');
    console.log('Fetched user data:', response.data); 
    dispatch({
      type:'FETCH_USERS_SUCCESS',
      payload:response.data,
    });
  } catch(error){
    dispatch({
      type:'FETCH_USERS_ERROR',
      payload:error
    });
    console.error(' error in Fetching user data:', error); 
  }
};

export const updateStudentById = (updateStudentData, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/students/${id}`, updateStudentData);
    const studentData = response.data; 
    console.error('Student updated', studentData);
    toast.success("You have successfully updated Student");
    dispatch({
      type: ActionTypes.EDIT_STUDENT,
      payload: studentData
    });    
  } catch (error) {
    console.error( error);
  }
};

export const fetchQualified = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/marks/qualified');

    if (response.status === 200) {
      const markData = response.data;
      dispatch({
        type: ActionTypes.FETCH_MARK,
        payload: markData, 
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching mark:', error);
  }
};

export const uploadNewMark = (newMarkData) => async (dispatch) => {
  try {
    console.log("New mark data:", newMarkData);
    const response = await axios.post('/api/marks', newMarkData);
    const markData = response.data;
    console.error('Mark loaded', markData);
    toast.success(`Mark Added Successfully`);
    dispatch({
      type: ActionTypes.UPLOAD_MARK,
      payload: markData
    });
  } catch (error) {
    console.error("Error uploading new mark:", error.response.data);
  }
};

export const fetchStudentMark = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/marks');

    if (response.status === 200) {
      const markData = response.data;
      dispatch({
        type: ActionTypes.FETCH_STUDENT_MARK,
        payload: markData, 
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching mark:', error);
  }
};

export const sendEmailMark = (studentId) => async (dispatch) => {
  try {
    console.log("Sending email to student:", studentId);
    const response = await axios.post(`/api/marks/${studentId}`); 
    console.log('Email sent response:', response.data);
    toast.success(`Mail Sent Successfully`);
    dispatch({ type: 'EMAIL_SENT_SUCCESS', payload: studentId });
  } catch (error) {
    console.error("Error sending email:", error.response.data);
    dispatch({ type: 'EMAIL_SENT_FAILURE', payload: studentId });
  }
};

export const uploadPayment = (studentId, newpaymentData) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/marks/${studentId}/payment`, newpaymentData);
    const paymentData = response.data;
    console.error('Payment loaded', paymentData);
    toast.success("Update Payment Status successfully");
    dispatch({
      type: ActionTypes.UPLOAD_PAYMENT,
      payload: paymentData
    })
  }catch (error) {
    console.error('Error adding Payment data:', error)
  } 
};

export const fetchTotalStudents = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/students/count');

    if (response.status === 200) {
      const { totalEnrolledStudents, totalQualifiedStudents, totalRejectedStudents } = response.data;
      dispatch({
        type: ActionTypes.FETCH_STUDENT,
        payload: { totalEnrolledStudents, totalQualifiedStudents, totalRejectedStudents },
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching student data:', error);
  }
};


export const UploadEmailPopup = (popupFields) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/Mail`, popupFields);
    dispatch({
      type: 'POPUP_EMAIL_SENT_SUCCES',
      payload: response.data,
    });
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    dispatch({
      type: 'POPUP_EMAIL_SENT_FAILURE',
      payload:error,
    });
    console.error('Error sending email:', error);
  }
};

export const deactivateStudent = (studentId) => async (dispatch) => {
  console.log(studentId, "studentId");
  try {
    const response = await axios.put(`/api/students/${studentId}/deactivate`);
    if (response.status === 200) {
      toast.success(`You have successfully deactivated Student Id ${studentId}`);
      dispatch({
        type: ActionTypes.DEACTIVATE_STUDENT_SUCCESS,
        payload: studentId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating student:', error);
  }
};

export const deactivateQualifiedStudent = (studentId) => async (dispatch) => {
  console.log(studentId, "studentId");
  try {
    const response = await axios.put(`/api/marks/${studentId}/deactivate`);
    if (response.status === 200) {
      toast.success(`You have successfully deactivated Student Id ${studentId}`);
      dispatch({
        type: ActionTypes.DEACTIVATE_QUALIFIED_STUDENT_SUCCESS,
        payload: studentId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating student:', error);
  }
};