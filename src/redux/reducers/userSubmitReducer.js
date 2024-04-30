const initialState = {
    userFormData: null,
    token: null,
    error: null,
};

const userSubmitReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_USER_FORM_SUCCESS':
            console.log('User form data received', action.payload);
            return {
                ...state,
                userFormData: action.payload.userFormData,
                message: action.payload.token,
                error: null,
            };
        case 'SUBMIT_USER_FORM_ERROR':
            console.log('Error occurred while submitting user form:', action.payload.message);
            return {
                ...state,
                error: action.payload.message,
            };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
};

export default userSubmitReducer;
