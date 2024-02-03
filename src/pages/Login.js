/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
// *
/* export default function Login() {
  return (
//     <>
//       <div className="flex justify-end items-center h-screen">
//         <div className="relative bg-cover bg-center w-1/2 h-full">
//           <div className="flex min-h-full flex-1 flex-col justify-end px-6 py-12 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//               <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//                 Login in to your account
//               </h2>
//             </div>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//               <form className="space-y-6" action="#" method="POST">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Email address
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       autoComplete="email"
//                       required
//                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium leading-6 text-gray-900"
//                     >
//                       Password
//                     </label>
//                     <div className="text-sm">
//                       <a
//                         href="#"
//                         className="font-semibold text-indigo-600 hover:text-indigo-500"
//                       ></a>
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     <input
//                       id="password"
//                       name="password"
//                       type="password"
//                       autoComplete="current-password"
//                       required
//                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 Forgot password?
//                 <div>
//                   <div className="flex justify-center">
//                     <button
//                       type="submit"
//                       className="flex w-96 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                     >
//                       Login
//                     </button>
//                   </div>
//                 </div>
//               </form>

//               <p className="mt-10 text-center text-sm text-gray-500">
//                 Not a member?{" "}
//                 <a
//                   href="#"
//                   className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
//                 ></a>
//               </p>
//             </div>
//           </div>
//           <div className="flex justify-start items-center h-screen">
//             <body className="w-full h-full">
//               <div className="flex justify-start items-center h-screen">
//                 <div className="relative bg-cover bg-center w-full h-full">
//                   <img
//                     src="login.jpg"
//                     alt="Signup Image"
//                     className="absolute inset-0 w-1/2 h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </body>
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className=" flex w-96 justify-center rounded-md bg-indigo-600 px-1 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// } */

import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <div class=" h-screen bg-black">
      <div className="absolute top-[0px]  right-[calc(50%_-_785.65px)] rounded-3xl bg-blue w-[600.8px] h-[728.3px]" />

      <div>
        <img
          className="absolute h-[40.56%] mt-2 w-[268.4px] right-[calc(50%_-_585.65px)] "
          alt=""
          src="/poplogo.svg"
        />
      </div>

      <h1 class="absolute text-3xl mt-[210px]  right-[calc(50%_-_580.65px)] text-white font-semibold">
        Login into your account
      </h1>

      <div class="absolute mt-[285px] h-5 right-[calc(55%_-_700.65px)] text-white  ">
        <div>
          <label
            for="email"
            class="absolute text-lg w-[190px] right-[calc(60%_-_85.65px)] mt-[-16px] text-base mb-3"
          >
            Email Id:
          </label>
          <div class="relative">
            <img
              src="\email.jpeg"
              class="absolute right-[-83px] top-[42px] rounded-md transform -translate-y-1/2 h-11"
              alt="Key Icon"
            />
            <input
              type="email"
              id="email"
              class="border w-full mt-5 right-[calc(50%_--90.65px)] text-base px-10 py-3 rounded-md focus:outline-none focus:ring-0 focus-border-gray-600"
              placeholder="Enter email"
            />
          </div>
        </div>

        <div class="relative mt-[35px] h-1000 right-[10px]  text-white">
          <label for="password" class="block text-base mb-3">
            Password:
          </label>
          <div class="relative">
            <img
              src="\password.jpeg"
              class="absolute right-[-83px] top-[22px] rounded-md transform -translate-y-1/2 h-11"
              alt="Key Icon"
            />
            <input
              type="password"
              id="password"
              class="border w-full text-base px-10 py-3 mb-4 rounded-md focus:outline-none focus:ring-0 focus-border-gray-600"
              placeholder="Enter password"
            />
          </div>
          {/* <div style={{ display: "flex", justifyContent: "flex-start" }}>
           */}{" "}
          <a
            href="/forgot-password"
            className="text-white cursor-pointer  w-full left-[30px] text-sm underline hover:no-underline hover:underline"
            style={{ marginLeft: "auto" }}
          >
            Forgot Password?
          </a>
        </div>
      </div>

      <div>
        <div class="absolute cursor-pointer mt-[500px] h-30 right-11 text-white flex flex-col items-center justify-center mr-6">
          <button
            type="button"
            class=" mb-3 cursor-pointer bg-black text-white px-28 py-3 rounded-md text-sm font-semibold w-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 mr-4 "
          >
            Login now
          </button>
        </div>
      </div>

      {/* <input
        type="password"
        name="password"
        placeholder="Password"
        className="your-input-styles"
      /> */}

      <div>
        <div class="absolute mt-[600px] h-30 right-14 text-white flex flex-col items-center justify-center ">
          <button
            type="button"
            class=" mb-3 bg-white text-black px-28 py-3 rounded-md text-sm font-semibold w-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 mr-4 "
          >
            Signup now
          </button>
        </div>
      </div>

      {/* <div>
          <label for="password" class="block text-base mb-3">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            class="border w-full text-base px-2 py-2 rounded-md focus:outline-none focus:ring-0 focus-border-gray-600"
            placeholder="confirm password"
          />
        </div> */}

      <div className="absolute top-[0px] left-[calc(50%_-_400.65px)] rounded-3xl  w-[880.8px] h-[728.3px]">
        <img
          className="absolute h-[90.56%] mt-3 w-[820.4px] left-[calc(50%_-_885.65px)] "
          alt=""
          src="/Login.jpg"
        />
      </div>
      {/* <div className="absolute down-[6px] left-[calc(70%_-_340.65px)] rounded-3xl  w-[280.8px] h-[528.3px]">
        <img
          className="absolute h-[25.56%] mt-3 w-[280.4px] left-[calc(100%_-_885.65px)] "
          alt=""
          src="\Vector 1 .png"
        />
      </div> */}
      <p>Or Signup</p>

      <div className="relative rounded-2xl w-[680.8px] h-[190.3px]">
        <img
          className="absolute top-[600px] left-1/2 transform -translate-x-1/9 w-[300.4px] h-[80.56%]"
          alt=""
          src="\Vector 1 .png"
        />
      </div>
      {/* <div className="relative rounded-2xl w-[680.8px] h-[8.3px]">
        <img
          className="absolute top-[desired-value] left-1/2 transform -translate-x-1/9 w-[880.4px] h-[15.56%]"
          alt=""
          src="/Vector 1.png"
        />
      </div> */}

      {/* <div className="absolute top-[10px] left-[calc(18%_-_860.65px)] rounded-2xl  w-[900.8px] h-[728.3px]">
        <img
          className="absolute h-[20.56%] mt-3 w-[280.4px] left-[calc(30%_-_885.65px)] "
          alt=""
          src="\Vector 2.png"
        />
      </div> */}
      <div className="absolute top-1 left-[calc(10% - 100.65px)] rounded-2xl w-[200.8px] h-[758.3px]">
        <img
          className="absolute top-1 h-[20.56%] mt-3 w-[180.4px] left-[calc(80% - 585.65px)]"
          alt=""
          src="/Vector 2.png"
        />
      </div>

      {/* <div className="absolute top-19 left-1/2 transform -translate-x-1/2 rounded-3xl w-[280.8px] h-[528.3px]">
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[280.4px] h-[25.56%] mb-3"
          alt=""
          src="\Vector 2.png"
        />
      </div> */}
    </div>
  );
};

export default Login;
