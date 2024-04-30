import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAdminPanelSettings } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { HiOutlineViewList } from 'react-icons/hi';
import { MdContentCopy } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";
// import PiStudent from 'react-icons'
// import "./Adminsidebar.css"
import "./home.css"
const AdminSidebar = () => {



  const navigateToHR = () => {
    navigate("/hrmanagement");
  };

  const navigateToUser = () => {
    navigate("/usermanagement");
  };



  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDown, setDown] = useState(false);
  const [profileDown, setprofileDown] = useState(false);
  const [isDashboardClicked, setIsDashboardClicked] = useState(false); // Track if dashboard is clicked


  // Function to toggle dropdown state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const studentDropdown = () => {
    setDown(!isDown)
  }

  const profilepicDown = () => {
    setprofileDown(!profileDown)
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);



  // Function to toggle dropdown state
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDashboardClick = () => {
    setIsDashboardClicked(true); // Update state when dashboard is clicked
    navigate("/Adminhome"); // Navigate to dashboard
  };
  
  const handleStudentManagementClick = () => {
    setIsDashboardClicked(false); // Reset state when student management is clicked
  };

  const navigateToEnrolledStudents = () => {
    // Navigate to enrolled students page
    navigate("/enrolled-students");
  };

  /* const navigateToScreeningTestResult = () => {
    navigate("/screeningtest-result");
  };
 */
  const navigateToQualifiedStudents = () => {
    // Navigate to enrolled students page
    navigate("/qualified-students");
  }

  const navigateToAreaManagement = () => {
    navigate("/allState");
  };


  

  return (
    <div >

      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleDropdownToggle} // Attach event handler
      >
        <span className="sr-only">Open sidebar</span>
        <RxDropdownMenu className="w-8 h-8" />
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        ref={dropdownRef} // Assign ref to the aside element
        className={`fixed top-0 ml-[0px] z-40 w-64 h-screen transition-transform ${isDropdownOpen ? "" : "-translate-x-full sm:translate-x-0 pt-24 "
          }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-custom-color dark:bg-gray-800 rounded-tr-[100px] ">

          <ul className="space-y-2 font-medium">

            <button
              type="button"
              class="flex items-center w-64 p-2 text-base text-white bg-custom-color transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 mt-[-30px] rounded-bl-[50px] ml-[-50px] bg-white rounded-tr-[70px]"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={profilepicDown} // Add onClick event handler here
            >

<img src="/admin_profile.PNG" alt="" style={{ width: "50px", height: "50px", backgroundColor: "black", borderRadius: "50%", marginLeft:"20px" }} />
              <p style={{ color: "black", marginTop: "-40px", paddingLeft: "10px" }} className="dropdown-toggle pt-[50px] font-bold">
                Admin
              </p>
              <IoMdArrowDropdown className="w-5 h-5 text-black" />
            </button>
            <ul
              id="dropdown-example"
              className={`py-2 space-y-2 ${profileDown ? "" : "hidden"}`} // Conditionally apply 'hidden' class based on isOpen state
            >

              <a
                href="#"
                class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
              >
                Change profile pictutre
              </a>



              <a
                href="#"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
              >
                Change Password
              </a>


              <a
                href="#"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
              >
                FAQ's
              </a>


              <a
                href="#"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
              >
                Logout
              </a>

            </ul>
            <a
              href="#"
              class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group no-underline pl-[15px]"
            >

              <MdDashboard className="ml-[-60px] cursor-pointer"/>
              <span class="ms-3 ml-[-20px] cursor-pointer ">Dashboard</span>
            </a>

            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-white bg-custom-color transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 pl-[15px]"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={toggleDropdown} // Add onClick event handler here
            >
              <MdAdminPanelSettings className="ml-[-60px] cursor-pointer" />
              <span class="ms-3 ml-[-20px] cursor-pointer ">
                AdminMaster
              </span>
              <IoMdArrowDropdown class="w-5 h-5" />

            </button>
            <ul
              id="dropdown-example"
              className={`py-2 space-y-2 ${isOpen ? "" : "hidden"}`} // Conditionally apply 'hidden' class based on isOpen state
            >

              <a
                href="/usermanagement"
                className="flex items-center w-full p-1 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
              >
                User Management
              </a>


              <a
                href="#"
                className="flex items-center w-full p-1 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
              >
                Role management
              </a>

              <a
                className="flex items-center w-full p-1 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
                onClick={navigateToAreaManagement}
              >
                Master Modules
              </a>

              <a
                href="#"
                className="flex items-center w-full p-1 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
              >
                Access control
              </a>

            </ul>
            <a
              href="#"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group no-underline pl-[15px]"
            >

              <IoIosPerson className="ml-[-60px] cursor-pointer" />
              <span class="ms-3 ml-[-20px] cursor-pointer ">
                Event management
              </span>
            </a>

            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-white bg-custom-color transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 pl-[15px]"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
             // onClick={studentDropdown} // Add onClick event handler here
             onClick={handleStudentManagementClick} // Update onClick event

            >

              <PiStudentBold className="ml-[-60px] cursor-pointer"  />
              <span class="ms-3 ml-[-20px] cursor-pointer ">


                Student management
              </span>
              <IoMdArrowDropdown className="w-5 h-5" />
            </button>
            <ul
              id="dropdown-example"
              className={`py-2 space-y-2 ${isDashboardClicked ? "hidden" : ""}`}>

              <a
                href="#"
                onClick={navigateToEnrolledStudents}
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
              >
                Enrolled students
              </a>
            {/*   <a
                href="#"
                onClick={navigateToScreeningTestResult}
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
              >
                Screening test results
              </a>
 */}

              <a
                href=" "
                onClick={navigateToQualifiedStudents}
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline"
              >
                Qualified students
              </a>
           </ul>
            <a
              href="#"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group no-underline pl-[15px]"
            >
            <MdContentCopy className="ml-[-60px] cursor-pointer"  />
              <span class="ms-3 ml-[-20px] cursor-pointer ">Content management</span>
            </a>
          </ul>
        </div>
      </aside>
    </div>

  );
};

export default AdminSidebar;