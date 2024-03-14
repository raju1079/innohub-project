import React from 'react';
import TextField from '../components/formcomponents/TextField';
import Dropdown from '../components/formcomponents/Dropdown'

const YourComponent = () => {
  return (
    <div className="container mx-12 mt-8">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
        {/* Field 1 */}
        <TextField
          label="Field 1"
          name="field1"
          type="text"
          placeholder="Enter value for Field 1"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
          //className="md:ml-2"
        />

<div className="md:mx-8" >

        <TextField
          className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
          label="Last Name"
          name="field2"
          type="text"
          placeholder="Enter value for Field 2"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
      </div> 
 <div className="h-[166px] w-[155px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border md:align-right">
    <div className="self-stretch flex-1 rounded-8xs bg-white overflow-hidden flex flex-col items-end justify-end py-11 pr-0 pl-[19px] relative z-[1] border-[2px] border-solid border-white">
      <input
        className="w-[calc(100%_-_19px)] [border:none] [outline:none] font-poppins text-xs bg-[transparent] self-stretch h-[18px] relative text-gray-100 text-left inline-block min-w-[83px]"
        placeholder="Upload your Photo"
        type="file"  /* Change type to "file" for file upload */
      />
      {/* <img
        className="w-[27px] h-[27px] absolute !m-[0] top-[33px] left-[calc(50%_-_13.5px)] overflow-hidden shrink-0"
        alt=""
        src="/uilimageupload.svg"
      /> */}
    </div>
  </div>     
  </div>

 
 <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
        {/* Field 1 */}
        <TextField
          label="Field 3"
          name="field1"
          type="text"
          placeholder="Enter value for Field 1"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
<div className="md:mx-8" >
        {/* Field 2 */}
        <TextField
          className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
          label="Field 4"
          name="field2"
          type="text"
          placeholder="Enter value for Field 2"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
        </div>
 </div>
 <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
        {/* Field 1 */}
        <TextField
          label="Field 5"
          name="field1"
          type="text"
          placeholder="Enter value for Field 1"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
<div className="md:mx-8" >
        {/* Field 2 */}
        <TextField
          className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
          label="Field 6"
          name="field2"
          type="text"
          placeholder="Enter value for Field 2"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
        </div>
 </div>
 <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
        {/* Field 1 */}
        <TextField
          label="Field 5"
          name="field1"
          type="text"
          placeholder="Enter value for Field 1"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
<div className="md:mx-8" >
        {/* Field 2 */}
        <TextField
          className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
          label="Field 61"
          name="field2"
          type="text"
          placeholder="Enter value for Field 2"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
        </div>
 </div>
 <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
        {/* Field 1 */}
        <TextField
          label="Field 5"
          name="field1"
          type="text"
          placeholder="Enter value for Field 1"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
<div className="md:mx-8" >
        {/* Field 2 */}
        <TextField
          className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
          label="Field 6"
          name="field2"
          type="text"
          placeholder="Enter value for Field 2"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
        </div>
 </div>
 <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:pb-8">
        {/* Field 1 */}
        <TextField
          label="Field 11"
          name="field1"
          type="text"
          placeholder="Enter value for Field 1"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
<div className="md:mx-8" >
        {/* Field 2 */}
        <TextField
          className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
          label="Field 12"
          name="field2"
          type="text"
          placeholder="Enter value for Field 2"
          value=""
          onChange={() => {}}
          required={true}
          disabled={false}
        />
 </div>

 
</div>

      {/* Other content goes here */}
    </div>
  );
};

export default YourComponent;

























/* import { useCallback ,useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { FaFileUpload } from "react-icons/fa";
import TextField from "./formcomponents/TextField";
import { fetchStates } from '../redux/actions/action'
import {fetchCities} from '../redux/actions/action'
import {setPersonalDetails } from '../redux/actions/action'
import Dropdown from '../components/formcomponents/Dropdown'

const PersonaldetailsForm = () => {
  const navigate = useNavigate();

  

  const dispatch = useDispatch();
  //const selectedState = useSelector((state) => state.states.selectedState);
  const states = useSelector((state) => state.states.states);
  const cities = useSelector((state) => state.cities.cities);
  const personalDetails = useSelector((state) => state.personalDetails);



  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);
  
  useEffect(() => {
    if (selectedState) {
      dispatch(fetchCities(selectedState));
    }
  }, [dispatch, selectedState,]);

 

 /*  const [personalDetails, setPersonalDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobilenumber: '',
    dateofbirth: '',
    address1: '',
    address2:'',
    state:'',
    city:'',
    pincode:'',
    aadharcard:'',
    uploadphoto:''
   }) */

   //const [errors, setErrors] = useState({});

  /*  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }; */
/* 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setPersonalDetails({ [name]: value }));
  };


  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    // Reset selected city when state changes
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
  };

  return (
    <section className="self-stretch rounded-tl-xl rounded-tr-81xl rounded-b-xl bg-color1 box-border rounded-xl overflow-hidden flex flex-row items-start justify-start pt-8 px-[42px] pb-[30px] gap-[0px_119px] max-w-full text-left text-base-6 text-white font-poppins border-[1px] border-solid border-gray-100 mq450:gap-[0px_119px] mq800:gap-[0px_119px] mq800:pt-[21px] mq800:pb-5 mq800:box-border mq1300:flex-wrap mq1300:justify-center mq1300:pl-[21px] mq1300:pr-[21px] mq1300:box-border">
      <div className="w-[394px] flex flex-col items-start justify-start py-0 pr-11 pl-0 box-border gap-[7px_0px] max-w-full mq450:pr-5 mq450:box-border">
        <div className="w-[151px] h-7 relative font-semibold pl-2 inline-block shrink-0 z-[1] ">
          First Name*
        </div>
        <div className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-start pt-[13px] px-3.5 pb-3.5 rounded-lg z-[1]">
          <input
            className="w-32 [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
            placeholder="Enter your  first name "
            type="text"
            value={personalDetails.first_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="relative font-semibold pl-2 z-[1]">Date of Birth *</div>
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start pt-3 px-3.5 pb-[15px] z-[1] border-[1px] border-solid border-color1">
          <input
            className="w-[78px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 text-left inline-block"
            placeholder="DD/MM/YYYY"
            type="text"
           
          />
        </div>
        <div className="w-[115px] relative font-semibold inline-block pl-2 z-[1]">
          Email Id*
        </div>
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start pt-[13px] px-3.5 pb-3.5 z-[1] border-[1px] border-solid border-color1">
          <input
            className="w-[107px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
            placeholder="Enter your email id"
            type="text"
            value={personalDetails.email_id || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="w-[177px] relative font-semibold  pl-2 inline-block z-[1]">
          Aadhar Number*
        </div>
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start pt-[13px] px-3.5 pb-[15px] z-[1] border-[1px] border-solid border-color1">
          <input
            className="w-[165px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
            placeholder="Enter your  Aadhar Number "
            type="number"
            value={personalDetails.adhaar_no || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="w-[173px] relative pl-2 font-semibold inline-block z-[1]">
          Mobile Number*
        </div>
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start pt-[13px] px-3.5 pb-3.5 z-[1] border-[1px] border-solid border-color1">
          <input
            className="w-[159px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
            placeholder="Enter your  mobile number "
            type="text"
            value={personalDetails.mobile_no || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="relative font-semibold z-[1]">Gender*</div>
        
      <div className="self-stretch rounded-[8.08px] bg-whitesmoke flex flex-row items-center justify-between  pb-[11px] pr-4  box-border gap-[20px] max-w-full mq450:flex-wrap">
              <div className="h-[51px] w-[49px] relative rounded-[8.08px] bg-whitesmoke hidden max-w-full" />
              <select 
               className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[20px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[245px] "
               >
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
             
            </div>
          </div>
      <div className="w-[357px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[10px_0px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-end justify-start gap-[9px_0px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1px_0px] max-w-full">
                   <div className="w-[152px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                    <div className="flex-1 relative font-semibold z-[1]">
                      Last Name*
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start pt-[13px] px-3 pb-3.5 z-[1] border-[1px] border-solid border-color1">
                    <input
                      className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
                      placeholder="Enter your last name "
                      type="text"
                      value={personalDetails.last_name || ''}
            onChange={handleInputChange}
            required
                    />
                  </div> 

    
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px_0px]">
                <div className="relative font-semibold z-[1] pl-2">
                  Communication Address line 1 *
                </div>
                <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start pt-[13px] px-3 pb-3.5 z-[1] border-[1px] border-solid border-color1">
                  <input
                    className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
                    placeholder="Enter your  last  name "
                    type="text"
                    value={personalDetails.address_line1 || ''}
            onChange={handleInputChange}
            required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-[3px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px_0px] max-w-full">
              <div className="relative font-semibold z-[1] pl-2">
                Communication Address line 2 *
              </div>
              <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start pt-[13px] px-3 pb-3.5 z-[1] border-[1px] border-solid border-color1">
                <input
                  className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
                  placeholder="Enter your  address "
                  type="text"
                  value={personalDetails.address_line2 || ''}
            onChange={handleInputChange}
            required
                />
              </div>
            </div>
          </div>
           <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0  gap-[4px_0px]">
            <div className="w-[232px] relative font-semibold inline-block z-[1]">
              State *
            </div>
            <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-between  pb-0.5 pr-6 pl-3 whitespace-nowrap gap-[20px] z-[1] text-xs text-gray-300 border-[1px] border-solid border-color1">
              
              
              {/* <div className="relative whitespace-pre-wrap w-full h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[12px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[355px]"> */
    
/*     <select 
               className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[245px] "
               value={selectedState}
      onChange={handleStateChange}>
      <option value="">Select State</option>
      {states.map((state) => (
        <option key={state.state_id} value={state.state_id}>
          {state.state_name}
        </option>
      ))}
    </select>

</div>
      /*      {/*  </div> */
  /*         </div> 
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px_0px] text-lg text-gray-300">
          <div className="w-[232px] relative font-semibold inline-block z-[1]">
              City *
            </div>
            <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-between pt-[1px] pb-0.5 pr-6 pl-3 whitespace-nowrap gap-[20px] z-[1] border-[1px] border-solid border-color1">
              
              
              
              <select
              className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[245px] "
              value={selectedCity}
              onChange={handleCityChange}>
                <option value="">Select City</option>
              {cities.map((city) => (
              <option key={city.city_id} value={city.city_id}>
                         {city.city_name}
                </option>
      ))}
    </select>
            </div>
            <div className="relative text-base-6 font-semibold pt-3 text-white z-[1]">
              Pincode
            </div>
            <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start pt-[13px] px-3.5 pb-3.5 z-[1] border-[1px] border-solid border-color1">
              <input
                className="w-[116px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
                placeholder="Enter your  pincode "
                type="text"
                value={personalDetails.pincode || ''}
            onChange={handleInputChange}
            required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[166px] w-[155px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border">
        <div className="self-stretch flex-1 rounded-8xs bg-white overflow-hidden flex flex-col items-end justify-end py-11 pr-0 pl-[19px] relative z-[1] border-[2px] border-solid border-white">
          <input
            className="w-[calc(100%_-_19px)] [border:none] [outline:none] font-poppins text-xs bg-[transparent] self-stretch h-[18px] relative text-gray-100 text-left inline-block min-w-[83px]"
            placeholder="Upload your Photo"
            type="text"
          />
          <img
            className="w-[27px] h-[27px] absolute !m-[0] top-[33px] left-[calc(50%_-_13.5px)] overflow-hidden shrink-0"
            alt=""
            src="/uilimageupload.svg"
          />
        </div>
      </div>
    </section>
  );
};
 

export default PersonaldetailsForm;  */ 