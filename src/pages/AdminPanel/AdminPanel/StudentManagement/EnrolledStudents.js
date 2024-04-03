import React from 'react'
import AdminHeader from '../AdminHeader'
import AdminSidebar from '../Adminsidebar'
import { useEffect, useState, useMemo,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchStudents } from '../../../../redux/actions/action';
import Table from '../../../../components/tableComponents/Table';
import { CiMenuKebab } from "react-icons/ci";
import Dropdown from "../../../../components/dropdown/DropDown"


const EnrolledStudents= () => {

    const dispatch = useDispatch();
    const students = useSelector((state) => state.students.students);
    const [emailSent, setEmailSent] = useState({});
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

  
    const columns = useMemo(
      () => [
        {
          Header: 'Student Id',
          accessor: 'student_id',
          width: 30,
        },
        {
          Header: 'Name',
          accessor: 'first_name' 
        },
        {
          Header: 'Email',
          accessor: 'email_id',
        },
        {
          Header: 'Mobile',
          accessor: 'mobile_no',
        },
        {
          Header: 'State',
          accessor: 'state',
        },
        {
          Header: 'City',
          accessor: 'city',
        },
        {
          Header: 'Email Sent',
          accessor: 'email_sent',
          Cell: ({ row }) => (
            <input
              className='ml-7'
              type="checkbox"
              checked={emailSent[row.original.student_id] || false}
              onChange={(e) => handleCheckboxChange(e, row.original.student_id)}
            />
          ),
        },
        {
          Header: '', // New column for actions
          accessor: 'actions', // Custom accessor to ensure unique key
          Cell: ({ row }) => (
            <Dropdown
              options={['View', 'Edit', 'Deactivate']}
              onSelect={(option) => handleOptionSelect(option, row.original)}
            />
          ),
        },
      ],
      [emailSent]
    );
  
    useEffect(() => {
      dispatch(fetchStudents());
    }, [dispatch]);
     
    const handleCheckboxChange = (event, studentId) => {
      const { checked } = event.target;
      setEmailSent(prevState => ({
        ...prevState,
        [studentId]: checked
      }));
    };
     
    const handleOptionSelect = (option, student) => {
      if (option === 'View') {
        setSelectedStudent(student);
        setShowPopup(true);
      }
      // You can implement other actions for 'Edit' and 'Deactivate' here
    };

    const onHomeClick = useCallback(() => {
        navigate("/");
      }, [navigate]);
  
  return (
    <div className="flex flex-row w-full  bg-[#090119]  overflow-hidden">
      <div className="w-full">
        <header className="w-full flex flex-col md:flex-row items-start justify-start gap-5 text-4xl md:text-xl text-white font-poppins">
          <div className="w-full items-center flex flex-col  md:flex-row justify-start gap-5">
            <img
              className="h-24 w-60 mb-2  md:mb-0"
              loading="lazy"
              alt=""
              src="/poplogo.svg"
              onClick={onHomeClick}
            />
            <div className="flex-1 flex flex-col w-72 pr-2 items-left justify-start md:px-0 md:pb-0">
              <h1 className="m-0 bg-color h-20 rounded-lg pl-4 pt-5 font-semibold font-inherit whitespace-nowrap text-3xl md:text-xl">
                Student Management
              </h1>
              <div className='absolute pt-14 font-poppins text-sm pl-4'>Manage your Admin Dashboard learn more</div>
            </div>
          </div>
        </header>
        <div className="md:flex md:flex-row">
          <div className="md:w-64">
             <AdminSidebar/>  
          </div>
          <div className="md:flex-1 md:ml-8 px-4">
            <div className="text-white">
              {students.length > 0 ? (
                <Table
                  columns={columns}
                  data={students}
                  heading="Enrolled Students"
                  button="Add new student"                
                />
              ) : (
                <p>loading........</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <Popup student={selectedStudent} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

const Popup = ({ student, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-color bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-bold mb-4">Student Details</h2>
        <p><strong>Student Id:</strong> {student.student_id}</p>
        <p><strong>Name:</strong> {student.first_name}</p>
        <p><strong>Email:</strong> {student.email_id}</p>
        <p><strong>Mobile:</strong> {student.mobile_no}</p>
        <p><strong>State:</strong> {student.state}</p>
        <p><strong>City:</strong> {student.city}</p>
        <button className="bg-color text-white px-4 py-2 rounded-md mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};


export default EnrolledStudents
