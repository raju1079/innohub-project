import React from 'react';

const ViewStudent = ({ student, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-color bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-bold mb-4">Student Details</h2>
        <p><strong>Student Id:  </strong> {student.student_id}</p>
        <p><strong>FirstName:</strong> {student.first_name}</p>
        <p><strong>LastName:</strong> {student.last_name}</p>
        <p><strong>Email:</strong> {student.email_id}</p>
        <p><strong>Mobile:</strong> {student.mobile_no}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>DOB:</strong> {student.dob}</p>
        <p><strong>Address:</strong> {student.address_line1}</p>
        <p><strong>State:</strong> {student.state}</p>
        <p><strong>City:</strong> {student.city}</p>
        <p><strong>Aadhar:</strong> {student.adhaar_no}</p>
        <p><strong>HigherEducation:</strong> {student.higher_education}</p>
        
        <button className="bg-color text-white px-4 py-2 rounded-md mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};


/* const ViewStudent = ({ student, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
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
 */
export default ViewStudent;