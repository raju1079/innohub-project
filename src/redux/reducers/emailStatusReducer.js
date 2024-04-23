const initialState = {
  students: [], // Your existing student data
  emailStatus: {}, // Object to store email sent status for each student
  // other state properties...
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_EMAIL_STATUS":
      const { student_Id, emailSent } = action.payload;
      console.log("UPDATE_EMAIL_STATUS action dispatched with payload:", action.payload);
      console.log("Current state before update:", state);
      const updatedEmailStatus = {
        ...state.emailStatus,
        [student_Id]: emailSent,
      };
      console.log("Updated email status:", updatedEmailStatus);
      return {
        ...state,
        emailStatus: updatedEmailStatus,
      };
    default:
      return state;
  }
};

export default reducer;
