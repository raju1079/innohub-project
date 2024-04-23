import React, { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../redux/actions/action';
import { FaHome } from "react-icons/fa";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AdminHome } from "./AdminPanel/AdminPanel/AdminHomepage/AdminHome";
import useHistory from "react";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const adminState = useSelector((state) => state.admin);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleAdminLogin = () => {
    // Dispatch adminLogin action with username and password
    dispatch(adminLogin(credentials.username, credentials.password));
  };

  const onHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    // If login attempt was unsuccessful, show alert
    if (adminState.error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [adminState.error]);
  

  useEffect(() => {
    if (adminState.loggedIn) {
      navigate('/Adminhome');
    }
    
  }, [adminState.loggedIn, navigate]);
  

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen  bg-[#090119] px-8 lg:p-0">
      {/* Images and Vectors for larger screens */}
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <div className="relative">
          <img className="w-full max-w-md" src="/login.jpg" alt="Login" />

          <img className="absolute top-0 left-0 mt-[-50px] ml-[-10%]" src="/Vector 2.png" alt="Vector 1" style={{ maxWidth: '30%' }} />
          <div
            className=" h-[45px] lg:top-[-450px] lg:left-[-500px] xl:left-[-500px] rounded-xl flex-1 md:mr-5 relative capitalize font-medium text-white inline-block box-border pl-5 pr-5 pt-0  mb-5 md:text-lg"

          >
            <FaHome
              className="h-8 w-14" onClick={onHomeClick} />
            Home
          </div>


        </div>
      </div>

      {/* Login Form */}
      <div className="w-full bg-color max-w-md mt-[0px] lg:mt-0 rounded-[50px_50px_50px_50px] lg:rounded-[120px_0px_0px_120px] ">
        <div className="flex justify-center">
          <img className="w-32 h-32 mt-7 md:w-48 md:h-38 " src="/poplogo.svg" alt="Your Company" />
        </div>
        <h2 className=" text-center text-2xl md:text-3xl font-extrabold text-white">
          Login into your account
        </h2>
        <form className="mt-0 space-y-10 px-5 lg:px-10 py-5" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="space-y-5 rounded-md shadow-sm-space-y-px">
            <div>
              <label htmlFor="email" className="block text-3xl font-medium leading-6 text-white">
                Email Id:
              </label>
              <div className="input-container flex mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="appearance-none  rounded-l-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                <CiMail className="bg-black text-white w-[50px] h-[45px] rounded-r-md " />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-3xl font-medium leading-6 text-white">
                Password
              </label>
              <div className="input-container flex mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}

                  required
                  className="appearance-none  rounded-l-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <RiLockPasswordLine className="bg-black text-white w-[50px] h-[45px] rounded-r-md" />
              </div>
            </div>
          </div>
          <div className="text-md mt-3">
            <a href="#" className="font-semibold text-white hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
          <div>
            <button
              type="button"
              className="group relative ml-[60px] lg:ml-[150px] flex justify-center py-3 px-8 lg:py-2 lg:px-10 mb-[10px] border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-white hover:text-black focus:outline-purple focus:ring-2 focus:ring-offset-2 focus:ring-blue cursor-pointer"
              onClick={handleAdminLogin}
            >
              Login </button>


              {showAlert && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline"> Invalid username or password.</span>
            </div>
          )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
