import React, { useState } from "react";
import TextField from "../components/formcomponents/TextField";
import TextArea from "../components/formcomponents/TextArea";
import { useDispatch } from "react-redux";

const EmailPopup = () => {
  const [popupFields, setPopupFields] = useState({
    first_name: "",
    last_name: "",
    message: ""
  });
  const [showPopup, setShowPopup] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const dispatch= useDispatch();
  const{first_name, last_name,message}=popupFields;

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
      !popupFields.first_name ||
      !popupFields.last_name ||
      !popupFields.message
    ) {
      alert("Please fill in all fields");
      return;
      
    }
    console.log("Form submitted", popupFields);
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
          <div className="bg-color text-white p-20 rounded-lg pl-3 w-[635px] h-[900px] md:w-[82%] md:h-[700px] lg:h-[250px] lg:w-[1110px] relative flex flex-col items-center justify-between">
            <div className="absolute top-2 right-2 flex space-x-2 lg:top-0">
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
              <h1 className="absolute top-20 left-20 text-white text-29xl font-bold items-center justify-center md:top-[15px] md:left-[250px] md:text-18xl lg:top-[10px] lg:left-[20px] lg:text-3xl">
                Hi, Welcome to IRC!
              </h1>
              <p className="absolute top-40 left-8 text-white text-17xl md:top-[90px] md:left-[235px] md:text-18xl lg:top-[60px] lg:left-[5px] lg:text-xl">
                To: <u>sasmiyasau@gmail.com</u>
              </p>
              <p className="absolute top-60 left-2 text-white text-17xl md:top-[175px] md:left-[175px] lg:top-[110px] lg:left-[5px] lg:text-xl">
                Have a problem or just want to chat?<br />We're just a message away!
              </p>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="absolute top-[400px] flex justify-end w-full space-x-10 ml-[50px] md:ml-[-50px] lg:ml-[150px]">
                  <div className="absolute top-[-10px] left-[-275px] flex flex-col text-13xl space-y-4 mt-4 md:top-[-60px] md:left-[-285px] lg:top-[-400px] lg:text-lg">
                    <TextField
                      label="First Name"
                      name="first_name"
                      type="text"
                      placeholder="Enter your first name"
                      value={popupFields.first_name}
                      onChange={handleChange}
                      required={true}
                      disabled={false}
                      className="md:w-[1000px] lg:w-[20px]"
                    />
                  </div>
                  <div className="absolute top-[105px] left-[-315px] flex flex-col text-13xl space-y-4 mt-4 md:top-[-60px] md:left-[45px] lg:top-[-400px] lg:text-lg">
                    <TextField
                      label="Last Name"
                      name="last_name"
                      type="text"
                      placeholder="Enter your last name"
                      value={popupFields.last_name}
                      onChange={handleChange}
                      required={true}
                      disabled={false}
                    />
                  </div>
                  {/* <div className="absolute top-[218px] left-[-315px] flex flex-col text-13xl space-y-4 mt-4 md:top-[60px] md:left-[-325px] lg:top-[-300px] lg:text-lg">
                    <TextField
                      label="Email"
                      name="email_id"
                       type="text"
                       placeholder="Enter your email id"
                       value={popupFields.email_id}
                       onChange={handleChange}
                       required={true}
                      disabled={false}
                      validate={validateEmail}
                     />
                   </div> */}
                  <div className="absolute top-[230px] left-[-415px] flex flex-col text-13xl space-y-4 mt-4 md:top-[70px] md:left-[-330px] lg:top-[-300px] lg:text-lg">
                    <TextArea
                      label="Message"
                      name="message"
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
                    className="absolute top-[450px] left-20 bg-white text-black text-13xl font-poppins font-bold rounded-lg h-12 w-40 md:top-[325px] md:left-[175px] lg:top-[-100px] lg:left-[230px] lg:text-lg"
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

