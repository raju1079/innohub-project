import React from 'react'

// import "./Adminsidebar.css"
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Dropdown } from 'react-bootstrap';
import { MdDashboard } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { HiRectangleGroup } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { MdGolfCourse } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
function AdminbarChart() {
  const navigate = useNavigate();

  const navigateToHR = () => {
    navigate("/hrmanagement");
  };

  const navigateToUser = () => {
    navigate("/usermanagement");
  };

  const toggleVisibility = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    }
  };
  return (
    <div>
       <div className=" max-w-[240px] h-[816px] bg-purple-700 rounded-br-[100px] ">
      <div className='max-w-[260px] bg-white border-t border-[50px] rounded-tl-none rounded-tr-2xl rounded-br-none h-auto'>

        <Dropdown  onClick={() => toggleVisibility('admin-dropdown-menu')}>
          <Dropdown.Toggle className="mt-[20px] ml-[20px] bg-transparent" >
            <img src="&#8205;" alt="" style={{ width: "50px", height: "50px", backgroundColor: "black", borderRadius:"50%" }} className='ml-[-20px]'  />
            <p style={{color:"black",marginTop:"-40px", paddingLeft:"90px"}} >
              Admin<IoMdArrowDropdown />
            </p>
          </Dropdown.Toggle>
          <Dropdown.Menu id="admin-dropdown-menu" >
            <Dropdown.Item>Change Password</Dropdown.Item>
            <Dropdown.Item>FAQ'S</Dropdown.Item>
            <Dropdown.Item>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className='mt-[60px] ml-[5px] p-[10px]'>
        <h4><MdDashboard /> Dashboard</h4>

        <Dropdown className='bg-purple-700 bg-transparent' onClick={() => toggleVisibility('admin-dropdown-menu2')}>
          <Dropdown.Toggle  id="admin-master-toggle2">
            <h4>Admin Master <IoMdArrowDropdown /> </h4>
          </Dropdown.Toggle>

          <Dropdown.Menu id="admin-dropdown-menu2" className='bg-purple-700  grid grid-rows-4 grid-flow-row gap-4'>
           <Dropdown.Item onClick={navigateToUser}><HiRectangleGroup /> User management</Dropdown.Item>
            <Dropdown.Item><FaRegUser /> Area management</Dropdown.Item>
            <Dropdown.Item><MdContentCopy /> Role Management</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

       
          <p onClick={navigateToHR} className="cursor-pointer"><HiRectangleGroup /> HR management</p>
          <p><MdEvent /> event management </p>
          <Dropdown  onClick={() => toggleVisibility('admin-dropdown-menu3')}>
          <Dropdown.Toggle id="admin-master-toggle3">
          <h4 className="mt-[20px] ml-[20px] bg-transparent">   <PiStudentBold /> student management <IoMdArrowDropdown /> </h4> 
          </Dropdown.Toggle>

          <Dropdown.Menu id="admin-dropdown-menu3" className='bg-purple-700  grid grid-rows-4 grid-flow-row gap-4'>
            <Dropdown.Item>
              <p>State master</p>
              <p>City master</p>
            </Dropdown.Item>
          </Dropdown.Menu>
          <p><MdGolfCourse /> course details </p>
        </Dropdown>
      </div>
    </div>
    </div>
  )
}

export default AdminbarChart
