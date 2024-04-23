import React, { useState, useEffect, useRef } from "react";

import "../home.css";
import AdminSidebar from "../Adminsidebar";
import AdminHeader from "../AdminHeader";

function AdminHome() {
  return (
    <div>
      <div className="main-container  h-auto bg-[#090119] relative overflow-hidden mx-auto  my-0">
      {/* <Sidebar /> */}
      <AdminSidebar/>
     <AdminHeader dashboardName="Admin Dashboard"/>
      {/* <Dashboard />  */}
      <WelcomeToDash/>
      
      <Students /> 
      <Graph1 />
      <Test />
      <MyComponent />
    </div>
    </div>
  );
}

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to toggle dropdown state
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Function to toggle dropdown state
//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div>
     
    
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//        {/* <AdminSidebar/> */}
//       <div class="p-4 sm:ml-64 ">
//         <div className="flex flex-col items-center px-10 pt-5  max-md:px-5">
//           <div className="flex flex-col items-start px-6 py-6 text-2xl font-bold text-white w-full bg-custom-color rounded-xl  max-md:mt-10 max-md:max-w-full">
//             Admin Dashboard
//             <div className="mt-3 text-sm tracking-wide leading-4">
//               <span className="text-white">Manage your Admin Dashboard. </span>
//               <span className="text-white">learn more</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function WelcomeToDash() {
  return (
    <div>
      <div className="p-4 mt-24 sm:ml-64 ">
        <div className="flex gap-10 px-10 pb-10 font-semibold max-md:flex-wrap">
          <div className="flex flex-col items-start px-6 py-6 text-8xl font-semibold font-inherit text-white w-full rounded-xl  max-md:mt-10 max-md:max-w-full">
            Welcome to Dashboard
          </div>
          <div className="flex flex-auto gap-0 text-2xl font-medium tracking-wide text-center max-md:flex-wrap max-md:max-w-full">
            <div className="grow justify-center items-center px-10 pt-4 text-white  text-center bg-violet-900 rounded-l-lg h-[60px]  w-[250px] max-md:px-5">
              Admin portal
            </div>
            <div className="grow justify-center items-center px-6 pt-4 bg-white  rounded-r-lg text-slate-950 w-[250px] h-[60px] max-md:px-5">
              HR portal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Students() {
  return (
    <div className="p-4 pb-10 sm:ml-60 gap-x-5 ">
      <div className="flex gap-16 md:gap-4 px-8 font-poppins max-md:flex-wrap">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-9 pt-10 pb-3.5 w-full font-poppins text-white bg-violet-900 rounded-3xl max-md:px-5 max-md:mt-10">
            <div className="text-2xl">Total Enrolled Students</div>
            <div className="mt-8 text-4xl">500</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-9 pt-10 pb-3.5 w-full font-poppins text-white bg-violet-900 rounded-3xl max-md:px-5 max-md:mt-10">
            <div className="text-2xl">Total Selected Students</div>
            <div className="mt-8 text-4xl">350</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow p-8 w-full font-poppins text-white bg-violet-900 rounded-3xl max-md:px-5 max-md:mt-10">
            <div className="text-2xl">Total Rejected Students</div>
            <div className="mt-4 text-4xl">150</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Graph1() {
  return (
    <div class="p-4 pb-10 sm:ml-64 ">
      <div className=" gap-10 px-10 font-poppins max-md:flex-wrap">
        <div className="mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[60%]  max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/715fff42a8c1a5e0bb3539bbe54f1981af8139b11665219cd847a0b7aab0f58d?apiKey=73b812aa1cfb46ea91602ee2908c5c32&"
                className="w-full  border-solid aspect-[1.56] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c72eb7054663c03884dd3d2a23ddb6b2184c66801f6cf8834e6f0dbbcab9527?apiKey=73b812aa1cfb46ea91602ee2908c5c32&"
                className="grow w-full  border-solid aspect-[1.02] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Test() {
  return (
    <div class="p-4 pb-10 sm:ml-64 ">
      <div className=" gap-16 px-20 font-poppins max-md:flex-wrap">
        <div className="mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-20 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start px-10 py-9 w-full bg-violet-900 rounded-3xl max-md:px-5 max-md:mt-9 max-md:max-w-full">
                <div className="text-2xl font-poppins text-white md:pl-[-20px]">
                  The test taken(This Week)
                </div>
                <div className="mt-11 text-4xl font-medium text-gray-200 max-md:mt-10 font-poppins text-white">
                  700
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start py-9 pr-20 pl-8 w-full text-gray-200 bg-violet-900 rounded-3xl max-md:px-5 max-md:mt-9 max-md:max-w-full">
                <div className="text-2xl font-poppins text-white">
                  Not yet taken(This Week)
                </div>
                <div className="mt-11 text-4xl font-medium max-md:mt-10 font-poppins text-white">
                  200
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div class="p-4 pb-10 sm:ml-64">
      <div className=" gap-10 px-10 font-poppins max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/920758f855bcaecfc40eab0cf3500f72797e2a9ed2e66386aa6a8da94420f4b6?apiKey=73b812aa1cfb46ea91602ee2908c5c32&"
          className="mt-12 w-full aspect-[3.13] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </div>
  );
}
export default AdminHome;
