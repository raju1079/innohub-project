
import React, { useState } from "react";
import TextField from "../components/formcomponents/TextField";
import TextArea from "../components/formcomponents/TextArea";
import { useDispatch } from "react-redux";
import { UploadEmailPopup } from "../redux/actions/action";

const EmailPopup = () => {
  const [popupFields, setPopupFields] = useState({
    firstName: "",
    lastName: "",
    email:"",
    query: ""

  });
  const [showPopup, setShowPopup] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const dispatch= useDispatch();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPopupFields((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? "" : "Invalid email address";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !popupFields.firstName ||
      !popupFields.lastName ||
      !popupFields.email||
      !popupFields.query
    ) {
      alert("Please fill in all fields");
      return;
    }

    const isValidEmail = validateEmail(popupFields.email);
    if (isValidEmail !== "") {
      alert("Please enter a valid email");
      return;
    }

    dispatch(UploadEmailPopup(popupFields));
    setShowPopup(false); 
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    
  };

  const handleMaximize = () => {
    setIsMinimized(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div>
      {!isMinimized && (
        <div className="fixed inset-0 bg-color bg-opacity-50 z-40"></div>
      )}
      {isMinimized ? (
        <div className="fixed bottom-[-18px] right-0 m-4 flex items-center justify-between bg-color text-white w-[300px] h-[50px] rounded-lg p-2 z-50">
          <h1 className="text-white text-xl font-bold">Hi, Welcome to IRC!</h1>
          <button
            className="absolute left-[245px]  top-3 text-white bg-color w-8 h-8 flex items-center justify-center rounded-lg text-29xl font-poppins font-bold"
            onClick={handleMaximize}
          >
            &#9633;
          </button>
          <button
                className="text-white bg-color w-8 h-8 flex text-29xl items-center justify-center lg:text-29xl lg:font-semi-bold lg:top-[2px]"
                onClick={handleClose}
              >
                &times;
              </button>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-color text-white p-20 rounded-lg pl-3 w-[635px] h-[800px] md:w-[720px] md:h-[725px] lg:h-[350px] lg:w-[1110px] relative flex flex-col items-center justify-between">
            <div className="absolute top-2 right-2 flex space-x-2 md:top-[10px] lg:top-0">
              <button
                className="text-white bg-color text-17xl w-8 h-8 font-poppins font semi-bold flex items-center justify-center lg:text-8xl lg:font-semi-bold"
                onClick={handleMinimize}
              >
                -
              </button>
              <button
                className="text-white bg-color w-8 h-8 flex text-29xl items-center justify-center lg:text-xl lg:font-semi-bold lg:top-[2px]"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="absolute top-15 left-28 text-white text-29xl font-bold items-center justify-center md:top-[20px] md:left-[150px] md:text-18xl lg:top-[10px] lg:left-[20px] lg:text-3xl">
                Hi, Welcome to IRC!
              </h1>
              <p className="absolute top-[95px] left-32 text-white text-17xl md:top-[90px] md:left-[170px] md:text-18xl lg:top-[60px] lg:left-[10px] lg:text-xl">
              snipe.upl@gmail.com
              </p>
              <p className="absolute top-[170px] left-2 text-white text-17xl md:top-[160px] md:left-[50px] lg:top-[110px] lg:left-[10px] lg:text-xl">
                Have a problem or just want to chat?<br />We're just a message away!
              </p>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="absolute top-[400px] flex justify-end w-full space-x-10 ml-[50px] md:ml-[-50px] lg:ml-[150px]">
                  <div className="absolute top-[-80px] left-[-275px] flex flex-col text-13xl space-y-4 mt-4 md:top-[-90px] md:left-[-285px] lg:top-[-400px] lg:text-lg">
                    <TextField
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={popupFields.firstName}
                      onChange={handleChange}
                      required={true}
                      disabled={false}
                      className="md:w-[1000px] lg:w-[20px]"
                    />
                  </div>
                  <div className="absolute top-[40px] left-[-315px] flex flex-col text-13xl space-y-4 mt-4 md:top-[-90px] md:left-[45px] lg:top-[-400px] lg:text-lg">
                    <TextField
                      label="Last Name"
                      name="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={popupFields.lastName}
                      onChange={handleChange}
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="absolute top-[160px] left-[-315px] flex flex-col text-13xl space-y-4 mt-4 md:top-[30px] md:left-[-325px] lg:top-[-300px] lg:left-[-328px] lg:text-lg">
                    <TextField
                      label="Email"
                      name="email"
                       type="text"
                       placeholder="Enter your email id"
                       value={popupFields.email}
                       onChange={handleChange}
                       required={true}
                      disabled={false}
                      validate={validateEmail}
                     />
                   </div>
                  <div className="absolute top-[275px] left-[-418px] flex flex-col text-13xl space-y-4 mt-4 md:top-[150px] md:left-[-330px] lg:top-[-190px] lg:text-lg">
                    <TextArea
                      label="Message"
                      name="query"
                      type="text"
                      placeholder="Enter your message here"
                      value={popupFields.message}
                      onChange={handleChange}
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <button
                    type="submit"
                    className="absolute top-[490px] left-20 bg-white text-black text-13xl font-poppins font-bold rounded-lg h-12 w-40 md:top-[390px] md:left-[240px] lg:top-[15px] lg:left-[230px] lg:text-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailPopup;
 

