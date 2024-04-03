import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import TextField from "../../components/formcomponents/TextField";
import { submitForm, resetForm } from "../../redux/actions/action"
import { fetchStates } from '../../redux/actions/action'
import { fetchCities } from '../../redux/actions/action'
import { fetchHigherEducation } from '../../redux/actions/action'
import { sendEmail } from '../../redux/actions/action';
import DatePicker from "../../components/formcomponents/DatePicker";
import { FaFileUpload } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const EnrollmentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [formFields, setFormFields] = useState({
    // Initial form data
    first_name: '',
    last_name: '',
    dob: '',
    address_line1: '',
    address_line2: '',
    email_id: '',
    adhaar_no: '',
    mobile_no: '',
    gender: '',
    state: '',
    city: '',
    pincode: '',
    upload_photo: '',
    higher_education: "",
    marks_obtained: "",
    year_of_completion: "",
    specialization: "",
    university: "",
    HSC: "",
    HSC_marks: "",
    HSC_completion_yr: "",
    SSC: "",
    SSC_marks: "",
    SSC_completion_yr: "",
    achievements: "",
    upload_resume: ""
  });


  const formData = useSelector((state) => state.form);
  const error = useSelector((state) => state.error);
  const states = useSelector((state) => state.states.states);
  const cities = useSelector((state) => state.cities.cities);
  const higherEducation = useSelector((state) => state.higherEducation.higherEducation);
  const emailSent = useSelector((state) => state.email.emailSent);
  const emailError = useSelector((state) => state.email.emailError);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedHigherEducation, setSelectedHigherEducation] = useState('');

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  useEffect(() => {
    if (selectedState) {
      dispatch(fetchCities(selectedState));
    }
  }, [dispatch, selectedState,]);

  useEffect(() => {
    dispatch(fetchHigherEducation());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      // Handle file uploads
      const file = e.target.files[0];
      setFormFields({
        ...formFields,
        [name]: file,
      });
    } else {
      // Handle other input types
      setFormFields({
        ...formFields,
        [name]: value,
      });
    }
  };

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const stateName = states.find(state => state.state_id === parseInt(selectedState))?.state_name || '';
    const cityName = cities.find(city => city.city_id === parseInt(selectedCity))?.city_name || '';

    const updatedFormFields = {
      ...formFields,
      state: stateName,
      city: cityName,
      gender: selectedGender,
      higher_education: selectedHigherEducation

    };
    dispatch(submitForm(updatedFormFields));

    dispatch(sendEmail(updatedFormFields)); // Dispatch sendEmail directly

    setShowSuccessPopup(true); // Show the success pop-up

    handleReset();
    console.log("handleSubmit", updatedFormFields)
  };


  const handleReset = () => {
    dispatch(resetForm());
    setFormFields({
      first_name: '',
      last_name: '',
      dob: '',
      address_line1: '',
      address_line2: '',
      email_id: '',
      adhaar_no: '',
      mobile_no: '',
      gender: '',
      pincode: '',
      upload_photo: '',
      higher_education: "",
      marks_obtained: "",
      year_of_completion: "",
      specialization: "",
      university: "",
      HSC: "",
      HSC_marks: "",
      HSC_completion_yr: "",
      SSC: "",
      SSC_marks: "",
      SSC_completion_yr: "",
      achievements: "",
      upload_resume: ""

    });
    setSelectedState('');
    setSelectedCity('');
    setSelectedGender('');
    setSelectedHigherEducation('');

  };


  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? "" : "Invalid email address";
  };

  const validateDateOfBirth = (value) => {
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    const [year] = value.split('-');

    // Check if the date format is correct and if the year part contains exactly four digits
    return dobRegex.test(value) && year.length === 4 ? "" : "Invalid date of birth";
  };

  const validateMobileNumber = (value) => {
    const isValid = /^\d{10}$/.test(value); // Assumes a 10-digit mobile number
    return isValid ? "" : "Invalid mobile number";
  };

  // Validation function for Aadhar number (example)
  const validateAadharNumber = (value) => {
    const isValid = /^\d{12}$/.test(value); // Assumes a 12-digit Aadhar number
    return isValid ? "" : "Invalid Aadhar number";
  };


  const validateMarks = (value) => {
    const marks = parseFloat(value);

    if (marks < 80) {
      return 'Marks should be above 80% to proceed further.';
    }

    return '';
  };


  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-[21px] px-0 box-border gap-[19px_0px] tracking-[normal]">
      <div className="w-full flex flex-col items-start justify-start pt-2 px-4 box-border bg-black max-w-full">
        <header className="w-full flex flex-col md:flex-row items-center justify-between max-w-full gap-[20px] text-center text-4xl md:text-xl text-white font-poppins">
          <div className="w-full  flex flex-col md:flex-row items-start justify-start gap-[10px] max-w-full">
            <img
              className="h-[69px] w-[260px] relative mb-2 md:mb-0"
              loading="lazy"
              alt=""
              src="/poplogo.svg"
            />
            <div className="flex-1 flex flex-col items-center justify-start pt-0 pl-5 md:pt-[7px] px-0 pb-2 md:pb-0">
              <h1 className="m-0 relative  font-semibold font-inherit whitespace-nowrap text-6xl md:text-4xl">
                Enrollment Form
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2 md:pt-[5px] px-0 pb-0 text-left text-xl">
            <div className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-8 cursor-pointer">
              <div
                className="h-[45px] rounded-xl flex-1 md:mr-5 relative capitalize font-medium text-white inline-block box-border pl-5 pr-5 pt-0  mb-5 md:text-lg"
                onClick={onHomeClick}
              >
                <FaHome
                  className="h-8 w-14" />
                Home
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="self-stretch flex flex-col bg-color items-start justify-start max-w-full text-start text-xl text-black font-poppins">
        <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden flex flex-col items-start justify-start pt-[7px] px-0 pb-0 gap-[4px_0px] max-w-full border-[1px] border-solid border-white">
          <div className="flex flex-row items-start justify-start py-0 px-[18px]">
            <h2 className="m-0 h-[30px] relative text-inherit font-semibold font-inherit inline-block mq450:text-base">
              Personal Details
            </h2>
          </div>
          <div className="self-stretch h-1 flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
            <div className="mb-[-572px] h-[576px] flex-1 relative bg-color1 overflow-hidden max-w-full" />
          </div>
        </div>
        {/* <PersonaldetailsForm />  */}
        <form className="w-[280px] mx-0 mt-4 m-0 md:mx-0 md:px-3 md:mt-8 lg:mx-0 lg:mt-10" onSubmit={handleSubmit}>
          <div className="h-[166px] w-[155px] flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border">
            <div className="self-stretch mx-2 flex-1 rounded-8xs bg-white overflow-hidden flex flex-col  justify-end py-11 pr-0 pl-[19px] relative z-[1] border-[2px] border-solid border-white">
              <label className="relative w-[calc(100% - 19px)] h-[18px] bg-transparent text-gray-100 text-left inline-block min-w-[83px] border-none outline-none font-poppins text-xs">
                Upload your Photo
                <input
                  className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                  type="file"
                  onChange={handleChange}
                  name="upload_photo"
                />
              </label>
              <FaFileUpload
                className="w-[40px] h-[40px] absolute !m-[0] top-[25px] left-[calc(50%_-_20px)] overflow-hidden shrink-0"
              />
            </div>
          </div>

          <div className="flex flex-col mx-2  md:flex-row space-y-4 md:space-y-0 pb-3 ">
            <TextField
              label="First Name"
              name="first_name"
              type="text"
              placeholder="Enter your first name"
              value={formFields.first_name}
              onChange={handleChange}
              required={true}
              disabled={false}
              className="w-full md:w-1/2 lg:w-1/4"
            />

            <div className="md:mx-8" >
              <TextField
                label="Last Name"
                name="last_name"
                type="text"
                placeholder="Enter your last name"
                value={formFields.last_name}
                onChange={handleChange}
                required={true}
                disabled={false}
                className="w-full md:w-1/2 lg:w-1/4"
              />
            </div>
          </div>

          <div className="flex flex-col mx-2  md:flex-row space-y-4 md:space-y-0 pb-3 ">
            <TextField
              label="Email"
              name="email_id"
              type="text"
              placeholder="Enter your email id"
              value={formFields.email_id}
              onChange={handleChange}
              required={true}
              disabled={false}
              validate={validateEmail}
            />
            <div className=" mx-5 ml-0 md:mx-8 " >

              <DatePicker
                label="Date of Birth"
                value={formFields.dob}
                onChange={(newDateValue) => handleChange({ target: { name: 'dob', value: newDateValue } })}
                required={true}
                validate={validateDateOfBirth}
              />
            </div>
          </div>
          <div className="flex flex-col mx-2  md:flex-row space-y-4 md:space-y-0 pb-3">

            <TextField
              label="Communication Address line 1"
              name="address_line1"
              type="text"
              placeholder="Enter your address"
              value={formFields.address_line1}
              onChange={handleChange}
              required={true}
              disabled={false}
            />
            <div className="md:mx-8" >

              <TextField
                className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
                label="Communication Address line 2"
                name="address_line2"
                type="text"
                placeholder="Enter your address2"
                value={formFields.address_line2}
                onChange={handleChange}
                required={true}
                disabled={false}
              />
            </div>
          </div>
          <div className="flex flex-col mx-2  md:flex-row space-y-4 md:space-y-0 pb-3">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 text-white gap-[5px_0px]">
              <div className="w-[232px] relative font-semibold inline-block z-[1]">
                State
              </div>
              <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-between  pb-0.5 pr-6 pl-3 whitespace-nowrap gap-[20px] z-[1] text-xs text-gray-300 border-[1px] border-solid border-color1">
                <select
                  className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[315px] "
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

            </div>
            <div className="md:mx-8" >
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px_0px] text-lg text-white">
                <div className="relative font-semibold inline-block z-[1] items-start">
                  City
                </div>
                <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-between pt-[1px] pb-0.5 pr-6 pl-3 whitespace-nowrap gap-[20px] z-[1] border-[1px] border-solid border-color1">
                  <select
                    className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[315px] "
                    value={selectedCity}
                    onChange={handleCityChange}>
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city.city_id} value={city.city_id}>
                        {city.city_name}
                      </option>
                    ))}
                  </select></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-2 md:flex-row space-y-4 md:space-y-0 pb-3">
            <TextField
              label="Pincode"
              name="pincode"
              type="text"
              placeholder="Enter your pincode"
              value={formFields.pincode}
              onChange={handleChange}
              required={true}
              disabled={false}
            />
            <div className="md:mx-8" >

              <TextField
                className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
                label="Mobile Number"
                name="mobile_no"
                type="text"
                placeholder="Enter your mobile number"
                value={formFields.mobile_no}
                onChange={handleChange}
                required={true}
                disabled={false}
                validate={validateMobileNumber}
              />
            </div>
          </div>
          <div className="flex flex-col mx-2 md:flex-row space-y-4 md:space-y-0 md:pb-6">

            <TextField
              label="Aadhar Number"
              name="adhaar_no"
              type="text"
              placeholder="Enter your aadhar number"
              value={formFields.adhaar_no}
              onChange={handleChange}
              required={true}
              disabled={false}
              validate={validateAadharNumber}
            />
            <div className="md:mx-8" >
              <div className="relative text-base-6 font-semibold font-poppins text-white items-start inline-block">
                Gender
              </div>

              <div className="self-stretch rounded-[8.08px] bg-whitesmoke flex flex-row items-center justify-between  pb-[11px] pr-4  box-border gap-[20px] max-w-full mq450:flex-wrap">
                <div className="h-[51px] w-[165px] relative rounded-[8.08px] bg-whitesmoke hidden max-w-full" />
                <select
                  className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[20px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[270px] md:min-w-[355px] "
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <hr />

          <div className="self-stretch mb-5 mx-0  rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden flex flex-col items-start justify-start pt-[7px] px-0 pb-0 gap-[4px_0px] max-w-[5500px] border-[1px] border-solid border-white w-[318px] sm:w-[360px] md:w-[755px] lg:w-[1010px] xl:w-[1426px]">
            <div className="flex flex-row items-start justify-start py-2 px-[18px]">
              <h2 className="m-0 h-[30px] relative text-inherit font-semibold font-inherit inline-block mq450:text-base">
                EducationalDetails
              </h2>
            </div>
          </div>
          {/* <EducationalDetails/> */}
          <div>
            <div className="flex flex-col mx-2 w-[270px] md:flex-row space-y-4 md:space-y-0 pt-5 pb-2 md:pl-3 lg:pl-3 xl:pl-3 ">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[9px_0px]">
                <div className="w-[183px] relative text-base-6 font-semibold font-poppins text-white text-left inline-block">
                  Higher Education
                </div>
                <div className="rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start px-3.5  border-[1px] border-solid border-white">
                  <select
                    className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[48px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[230px] "
                    value={selectedHigherEducation}
                    onChange={(e) => setSelectedHigherEducation(e.target.value)}
                  >
                    <option value="">Select Higher Education</option>
                    {higherEducation.map((edu) => (
                      <option key={edu.degree_id} value={edu.degree_name}>
                        {edu.degree_name}
                      </option>

                    ))}
                  </select>
                </div>
              </div>
              <div className=" pl-0 md:pl-3 lg:pl-3 xl:pl-3">
                <TextField
                  label="Marks in % "
                  name="marks_obtained"
                  type="text"
                  placeholder="Enter marks in %"
                  value={formFields.marks_obtained}
                  onChange={handleChange}
                  required={true}
                  disabled={false}
                  width="190px"
                  validate={validateMarks}
                />
              </div>
              <div className=" pl-0 md:pl-3 lg:pl-3 xl:pl-3">
                <TextField
                  label="Year of Completion"
                  name="year_of_completion"
                  type="text"
                  placeholder="Enter year of completion"
                  value={formFields.year_of_completion}
                  onChange={handleChange}
                  required={true}
                  disabled={false}
                  width="180px"
                />
              </div>
            </div>
            <div className="flex flex-col mx-2 w-[270px] md:flex-row space-y-4 md:space-y-0 pb-6 pl-0 md:pl-3 lg:pl-3 xl:pl-3">
              <div>
                <TextField
                  label="Specialization"
                  name="specialization"
                  type="text"
                  placeholder="Enter specialization"
                  value={formFields.specialization}
                  onChange={handleChange}
                  required={true}
                  disabled={false}
                  width="230px"
                />
              </div>
              <div className=" pl-0 md:pl-3 lg:pl-3 xl:pl-3">
                <TextField
                  label="University"
                  name="university"
                  type="text"
                  placeholder="Enter university"
                  value={formFields.university}
                  onChange={handleChange}
                  required={true}
                  disabled={false}
                  width="190px"
                />
              </div>
            </div>

          </div>
          <div className="flex flex-col mx-2 w-[270px] md:flex-row space-y-4 md:space-y-0 pb-2 md:pl-3 lg:pl-3 xl:pl-3">
            <TextField
              label="12th Board"
              name="HSC"
              type="text"
              placeholder="Enter University"
              value={formFields.HSC}
              onChange={handleChange}
              required={true}
              disabled={false}
              width="230px"
            />
            <div className="pl-0 md:pl-3 lg:pl-3 xl:pl-3">
              <TextField
                label="Marks in % (GPA)"
                name="HSC_marks"
                type="text"
                placeholder="Enter marks in %"
                value={formFields.HSC_marks}
                onChange={handleChange}
                required={true}
                disabled={false}
                width="190px"
              />
            </div>
            <div className=" pl-0 md:pl-3 lg:pl-3 xl:pl-3">
              <TextField
                label="Year of Completion"
                name="HSC_completion_yr"
                type="text"
                placeholder="Enter year of completion"
                value={formFields.HSC_completion_yr}
                onChange={handleChange}
                required={true}
                disabled={false}
                width="180px"
              />
            </div>
          </div>

          <div className="flex flex-col mx-2 w-[270px] md:flex-row space-y-4 md:space-y-0 pb-2 pl-0 md:pl-3 lg:pl-3 xl:pl-3">
            <TextField
              label="10th Board"
              name="SSC"
              type="text"
              placeholder="Enter University"
              value={formFields.SSC}
              onChange={handleChange}
              required={true}
              disabled={false}
              width="230px"
            />
            <div className=" pl-0 md:pl-3 lg:pl-3 xl:pl-3">
              <TextField
                label="Marks in % (GPA)"
                name="SSC_marks"
                type="text"
                placeholder="Enter in %/GPA"
                value={formFields.SSC_marks}
                onChange={handleChange}
                required={true}
                disabled={false}
                width="190px"
              />
            </div>
            <div className=" pl-0 md:pl-3 lg:pl-3 xl:pl-3">
              <TextField
                label="Year of Completion"
                name="SSC_completion_yr"
                type="text"
                placeholder="Enter year of completion"
                value={formFields.SSC_completion_yr}
                onChange={handleChange}
                required={true}
                disabled={false}
                width="180px"
              />
            </div>
          </div>
          <div className="flex flex-col mx-2 w-[270px] md:flex-row space-y-4 md:space-y-0 pb-6 pl-0 md:pl-3 lg:pl-3 xl:pl-3">
            <TextField
              label="Achivements/Hobbies"
              name="achievements"
              type="text"
              placeholder="Enter your achivements"
              value={formFields.achievements}
              onChange={handleChange}
              required={true}
              disabled={false}
              width="230px"
            />
            <div className=" pl-3 ">
              <TextField
                label="Upload Resume"
                name="upload_resume"
                type="file"
                accept=".pdf"
                placeholder="upload resume"
                value={formFields.upload_resume}
                onChange={handleChange}
                //required={true}
                //disabled={false}
                width="200px"

              />
              {/*  <FaFileUpload /> */}
            </div>
          </div>
          <div className="md:grid grid-flow-col  ">
            <div className="w-[453px] mx-5 lg:mx-[300px] flex flex-row items-start justify-start py-0 pr-0 pt-12 pb-20 box-border max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[0px_39px] max-w-full mq450:gap-[0px_39px]">
                <button type="submit" className="cursor-pointer my-2 [border:none] pt-[13px] px-[13px] pb-3.5 bg-black flex-1 rounded-lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center box-border min-w-[130px] hover:bg-darkslategray">
                  <b className="w-[152px] relative text-base-2 inline-block font-poppins text-white text-center shrink-0">
                    Submit
                  </b>
                </button>

                <button className="cursor-pointer my-2 [border:none] pt-[13px] px-[13px] pb-3.5 bg-black flex-1 rounded-lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center box-border min-w-[130px] hover:bg-darkslategray ">
                  <b className="w-[152px] relative text-base-2 inline-block font-poppins text-white text-center shrink-0">
                    Cancel
                  </b>
                </button>
              </div>
            </div>
          </div>

          {showSuccessPopup && (
            <div
              className="bg-black w-[426px] h-[124px] absolute top-[210px] left-[144px] border-[1px] border-white text-white text-center pt-40"
              onClick={() => setShowSuccessPopup(false)} // Hide the pop-up on click
            >
              Submitted successfully!
            </div>
          )}

          {/*  {emailSent && (
      <p>Email has been successfully sent.</p>
    )}
    {emailError && (
      <p>Error in sending email: {emailError.message}</p>
    )} */}

          {error && <div className="text-red-500">Error: {error.message}</div>}

        </form>
      </main>
    </div>
  );
};

export default EnrollmentForm;
