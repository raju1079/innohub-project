import React from 'react'
import AdminHeader from '../AdminHeader'
import AdminSidebar from '../Adminsidebar'
import Table from '../../../../components/tableComponents/Table'
import { useMemo } from 'react'

const  QualifiedStudents = () => {

    const columns = [
        {
          Header: 'UQ.ID',
          accessor: 'id',
        },
        {
          Header: 'Full Name',
          accessor: 'fullName',
        },
        {
          Header: 'ProgramAssigned',
          accessor: 'programassigned',
        },
        {
          Header: 'Start Date',
          accessor: 'start date',
        },
        {
          Header: 'End Date',
          accessor: 'enddate',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
        {
          Header: 'Awards',
          accessor: 'Awards',
        },
        {
          Header: 'Recognitions',
          accessor: 'recognition',
        },
        {
            Header:'Certificate',
            accessor:'certificate'
        }
    ]
      
      const data = [
        {
          id: 1,
          fullName: 'John Doe',
          email: 'john@example.com',
          mobile: '1234567890',
          writtenScore: 85,
          interviewScore: 90,
          resultDate: '2024-04-11',
          status: 'Passed',
        },
        // Add more data objects as needed
      ];
      
   
  return (
    
    <div className="flex flex-row w-full h-screen bg-[#090119]  overflow-hidden">
    <AdminHeader dashboardName="Student Management" />
    <AdminSidebar/>
     
      <div className="md:flex-1 md:ml-8 px-4 pt-24 pl-60">
       <div className="text-white">
        <Table
          columns={columns}
          data={data} 
          heading="Qualified Students"
       />
      </div>
      </div>
    </div>
  )
}

export default QualifiedStudents