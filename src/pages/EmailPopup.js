
import React, { useState } from "react";
import TextField from "../components/formcomponents/TextField";
import TextArea from "../components/formcomponents/TextArea";
import { useDispatch } from "react-redux";
import { UploadEmailPopup } from "../redux/actions/action";

const EmailPopup = ({ onClose }) => {
  const [popupFields, setPopupFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    query: ""

  });
  const [showPopup, setShowPopup] = useState(true);
  // const [isMinimized, setIsMinimized] = useState(false);
  const dispatch = useDispatch();

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
       !popupFields.email ||
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
    onClose(); // Close the popup after submission
  };

  if (!onClose) {
    return null;
  }

  return (
    <div>
        <div className="fixed inset-0 lg:right-[-900px] lg:top-[-100px] flex items-center justify-center z-50">
          <div className="bg-color text-white p-20 rounded-lg pl-3 w-[600px] h-[800px] md:w-[600px] md:h-[680px] lg:h-[325px] lg:w-[235px] relative flex flex-col items-center justify-between">
            <div className="absolute top-2 right-2 flex space-x-2 md:top-[10px] lg:top-0">
              <button
                className="text-white bg-color w-8 h-8 flex text-29xl items-center justify-center lg:text-xl lg:font-semi-bold lg:top-[2px]"
                onClick={onClose}
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="absolute top-15 left-28 text-white text-29xl font-bold items-center justify-center md:top-[20px] md:left-[100px] md:text-18xl lg:top-[4px] lg:left-[70px] lg:text-lg">
                Hi, Welcome to IRC!
              </h1>
              <p className="absolute top-[95px] left-5 text-white text-17xl  font-poppins md:top-[90px] md:left-[15px] md:text-18xl lg:top-[30px] lg:left-[10px] lg:text-sm">
                To: snipe.upl@gmail.com
              </p>
              <p className="absolute top-[170px] left-5 text-white text-17xl font-poppins md:top-[160px] md:left-[15px] lg:top-[60px] lg:left-[10px] lg:text-sm text-left">
                Have a problem or just want to chat?<br />We're just a message away!
              </p>

              <form onSubmit={handleSubmit} className="w-full">
                <div className="absolute top-[405px] flex justify-end w-full space-x-4 ml-[50px] md:ml-[-50px] lg:ml-[150px] lg:space-x-10">
                  <div className="absolute top-[-80px] left-[-210px] w-[400px]  flex flex-col text-13xl space-y-4 mt-4 md:top-[-100px] md:left-[-200px] md:text-[12xl] md:w-[270px] lg:top-[-290px] lg:left-[-270px] lg:text-sm lg:w-[150px] ">
                    <TextField
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={popupFields.firstName}
                      onChange={handleChange}
                      required={true}
                      disabled={false}
                      className="w-auto"
                    />
                  </div>
                  <div className="absolute top-[40px] left-[-230px] w-[400px] flex flex-col text-13xl space-y-4 mt-4 md:top-[-100px] md:left-[60px] md:w-[270px] lg:top-[-290px] lg:left-[-155px] lg:text-sm  lg:w-[150px]">
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
                   <div className="absolute top-[160px] left-[-230px]  w-[400px]  flex flex-col text-13xl space-y-4 mt-4 md:top-[18px] md:left-[-220px] md:w-[550px] lg:top-[-206px] lg:left-[-310px] lg:w-[305px] lg:text-sm">
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
            
                <div className="absolute top-[275px] left-[-230px]  w-[400px] flex flex-col text-13xl space-y-4 mt-4 md:top-[140px] md:left-[-220px] md:w-[550px] lg:top-[-124px] lg:left-[-310px] lg:w-[305px] lg:text-sm">
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
  
                    className="absolute top-[480px] left-[-85px] h-[50px] w-[130px] bg-black text-white text-xl font-poppins font-semi-bold p-0 rounded-lg  md:top-[350px] md:left-[5px] lg:top-[35px] lg:left-[-310px] lg:h-[30px] lg:w-[100px] lg:text-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>                                                                                                   
      
    </div>
  );
};

export default EmailPopup;


