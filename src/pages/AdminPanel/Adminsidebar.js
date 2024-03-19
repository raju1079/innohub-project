import React from 'react'
import "./Adminsidebar.css"
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

function Adminsidebar() {
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
    <div className='Admisidebar'>
      <div className='admin'>
        <Dropdown onClick={() => toggleVisibility('admin-dropdown-menu')}>
          <Dropdown.Toggle className="cursor-pointer" id="admin-dropdown-toggle">
            <img src="&#8205;" alt="" style={{ width: "50px", height: "50px", backgroundColor: "black", borderRadius:"50%" }}  />
            <p style={{color:"black",marginTop:"-40px", paddingLeft:"90px"}} className="dropdown-toggle ">
              Admin profile <IoMdArrowDropdown />
            </p>
          </Dropdown.Toggle>
          <Dropdown.Menu id="admin-dropdown-menu" className='sidebarditems'>
            <Dropdown.Item>Change Password</Dropdown.Item>
            <Dropdown.Item>FAQ'S</Dropdown.Item>
            <Dropdown.Item>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className='sideComponents'>
        <h4><MdDashboard /> Dashboard</h4>

        <Dropdown onClick={() => toggleVisibility('admin-dropdown-menu2')}>
          <Dropdown.Toggle  id="admin-master-toggle2" className="dropdown-toggle ">
            <h4>Admin Master <IoMdArrowDropdown /> </h4>
          </Dropdown.Toggle>

          <Dropdown.Menu id="admin-dropdown-menu2" className='sidebarditems'>
           <Dropdown.Item onClick={navigateToUser}><HiRectangleGroup /> User management</Dropdown.Item>
            <Dropdown.Item><FaRegUser /> Area management</Dropdown.Item>
            <Dropdown.Item><MdContentCopy /> Role Management</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

       
          <p onClick={navigateToHR} className="cursor-pointer"><HiRectangleGroup /> HR management</p>
          <p><MdEvent /> event management </p>
          <Dropdown onClick={() => toggleVisibility('admin-dropdown-menu3')}>
          <Dropdown.Toggle id="admin-master-toggle3">
          <h4 className="dropdown-toggle ">   <PiStudentBold /> student management <IoMdArrowDropdown /> </h4> 
          </Dropdown.Toggle>

          <Dropdown.Menu id="admin-dropdown-menu3" className='sidebarditems'>
            <Dropdown.Item>
              <p>State master</p>
              <p>City master</p>
            </Dropdown.Item>
          </Dropdown.Menu>
          <p><MdGolfCourse /> course details </p>
        </Dropdown>
      </div>
    </div>
  );
}

export default Adminsidebar;
