import React from 'react'
import AdminHeader from '../../AdminHeader'
import AdminSidebar from '../../Adminsidebar'
import Table from '../../../../../components/tableComponents/Table'
import { useMemo } from 'react'

const RoleManagement = () => {

    const columns = [
        {
          Header: 'Role ID',
          accessor: 'roleId',
        },
        {
          Header: 'Role Name',
          accessor: 'roleName',
        },
        {
          Header: 'Created At',
          accessor: 'createdat',
        },
        
    ]
      
      const data = [
        {
         roleId: 1,
          roleName: 'admin',
          Createdat: 'john@example.com',
        }
      ];
      
   
  return (
    
    <div className="flex flex-row w-full h-screen bg-[#090119]  overflow-hidden">
    <AdminHeader dashboardName="Role Management" />
    <AdminSidebar/>
   
      <div className="md:flex-1 md:ml-8 px-4 pt-24 pl-60">
       <div className="text-white">
        
        <Table
          columns={columns}
          data={data} 
          heading="Role Management"
       />
        
      </div>
      </div>
    </div>
  )
}

export default RoleManagement