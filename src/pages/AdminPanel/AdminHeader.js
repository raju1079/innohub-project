import React from 'react'
import "./AdminHeader.css"
import Adminsidebar from './Adminsidebar';
function AdminHeader() {
  return (
    <div className=''>

   
    <div className='admin-main'>
       
        <img
          className="h-10 cursor-pointer"
          alt="Logo"
          src="/poplogo.svg"
         // onClick={() => handleNavigation('/')}
         style={{marginTop:"20px"}}
        />
      
        
      <div className='adminhead'>
<h2>Admin Dashboard</h2>
<p>Manage your admin dashboard, learn more...</p>
      </div>
      <Adminsidebar/>
    </div>
   
    </div>
  )
}

export default AdminHeader;
