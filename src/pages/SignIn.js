import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const SignIn = ({ histroy }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  
  return (
    <div className="xl:w-full relative bg-gray h-[2664px] overflow-hidden text-left text-xl text-cold-grey-white font-poppins
    w-[1237px] flex flex-col  items-start justify-start  py-0 px-5">
      <div className=" sm:max-w-sm absolute bg-blue h-full mt-[0px] rounded-3xl left-[0px] px-[150px] py-[100px]">
        <img
          className="mx-[80px] mt-[30px] my-[100px] absolute  right-[100px] w-auto mx-auto  "
          src="/poplogo.svg"
          alt="Your Company"
        />
        <h2 className="mt-[300px] mr-[10px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
        <form
          className="mt-10 space-y-6"
          action="#"
          method="POST"
          style={{ justifySelf: "end" }}
        >
          <div className="grid grid-cols-2 gap-5 
         ">
          <div>
          <label
              htmlFor="text"
              className="block text-sm font-medium leading-6 text-white"
            >
              First Name:
            </label>
            <div className="mt-2">
              <input
                id="text"
                name="text"
                type="text"
                autoComplete="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
        
          </div>

          <div>
          <label
              htmlFor="text"
              className="block text-sm font-medium leading-6 text-white"
            >
              Last Name:
            </label>
            <div className="mt-2">
              <input
                id="text"
                name="text"
                type="text"
                autoComplete="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
        
          </div>
          </div>

          <div className="grid grid-cols-2 gap-5 ">
          
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email Id:
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium leading-6 text-white"
            >
              Mobile No:
            </label>
            <div className="mt-2">
              <input
                id="number"
                name="Mobile No"
                type="number"
                autoComplete="number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-5 ">
          
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password:
              </label>
            </div>
            <div className="mt-2 ">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
           
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
               conform Password:
              </label>
            </div>
            <div className="mt-2 ">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
           
          </div>
        </div>
          
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              SignUp
            </button>
          </div>
          
        </form>
        
      </div>
      <div>
      <img
          className="absolute h-auto w- mt-[50px] py-[0px] px-[12px] right-[calc(50%_-_695.65px)] "
          alt=""
          src="/signin.png"

        />


      </div>

    </div>
  );
};

export default SignIn;