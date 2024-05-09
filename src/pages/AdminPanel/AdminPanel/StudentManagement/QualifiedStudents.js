import React, { useState, useEffect } from 'react'
import AdminHeader from '../AdminHeader'
import AdminSidebar from '../Adminsidebar'
import Table from '../../../../components/tableComponents/Table'
import { useMemo } from 'react'
import { fetchQualified, fetchStudents } from '../../../../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from "../../../../components/dropdown/DropDown";
import ViewStudent from '../../../../components/enrolledstudents/ViewStudent';


const  QualifiedStudents = () => {
  const mark = useSelector((state) => state.fetchMark.mark); 
  const students = useSelector((state) => state.students.students);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQualified());
    dispatch(fetchStudents());
  }, [dispatch]);

  const combinedData = mark.map((m) => {
    const student = students.find((s) => s.student_id === m.student_id);
    const testScore = m.test_score || 0; 
    const interviewScore = m.interview_score || 0; 
    const totalScore = testScore + interviewScore; 
    const percentage = (totalScore / 50) * 100; 
    let scholarshipGranted = 'No'; 

    // Calculate scholarship based on percentage 
    if (percentage >= 95 && percentage <= 99.99) {
      scholarshipGranted = '50%';
    } else if (percentage >= 90 && percentage <= 94.99) {
      scholarshipGranted = '40%';
    } else if (percentage >= 80 && percentage <= 89.99) {
      scholarshipGranted = '25%';
    } else if (percentage >= 71 && percentage <= 79.99) {
      scholarshipGranted = '10%';
    }
    return { ...m, ...student, percentage, scholarshipGranted };
    });

    const columns = [
        {
          Header: 'UQ.ID',
          accessor: 'roll_no',
        },
        {
          Header: 'Full Name',
          accessor: (row) => `${row.first_name} ${row.last_name}`,
        },{
          Header: 'Test Score',
          accessor: 'test_score',
        },
        {
          Header: 'Interview Score',
          accessor: 'interview_score',
        },
        {
          Header: 'Percentage',
          accessor: (row) => `${row.percentage}%`,
        },
        {
          Header: 'Scholarship Granted',
          accessor: 'scholarshipGranted',
        },
        /*{
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
        }*/
        {
          Header: '', 
          accessor: 'actions', 
          Cell: ({ row }) => (
            <Dropdown
              options={['View', 'Edit', 'Deactivate']}
              onSelect={(option) => handleOptionSelect(option, row.original)}
            />
          ),
        },
    ]
      
    const handleOptionSelect = (option, student) => {
      if (option === 'View') {
        const foundStudent = students.find((s) => s.student_id === student.student_id);
        setSelectedStudent(foundStudent);
        setShowPopup(true);
      }
    };

      
   
  return (
    
    <div className="flex flex-row w-full h-screen bg-[#090119]  overflow-hidden">
    <AdminHeader dashboardName="Student Management" />
    <AdminSidebar/>
     
      <div className="md:flex-1 md:ml-8 px-4 pt-24 pl-60">
       <div className="text-white">
        <Table
          columns={columns}
          data={combinedData} 
          heading="Qualified Students"
       />
      </div>
      </div>
      {showPopup && (
        <ViewStudent student={selectedStudent} onClose={() => setShowPopup(false)} />
      )}
    </div>
  )
}

export default QualifiedStudents