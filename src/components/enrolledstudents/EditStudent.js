import React from 'react';

const EditStudent = ({ student, onClose }) => {

    const [editedStudent, setEditedStudent] = useState({ ...student });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEditedStudent(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSaveChanges = () => {
      // Implement save changes logic here
      onClose();
    };
  
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
       <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-bold mb-4">Student Details</h2>
        <label>
          Student Id:
          <input type="text" value={editedStudent.student_id} readOnly />
        </label>
        <label>
          Name:
          <input type="text" name="first_name" value={editedStudent.first_name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email_id" value={editedStudent.email_id} onChange={handleInputChange} />
        </label>
        <label>
          Mobile:
          <input type="text" name="mobile_no" value={editedStudent.mobile_no} onChange={handleInputChange} />
        </label>
        <label>
          State:
          <input type="text" name="state" value={editedStudent.state} onChange={handleInputChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={editedStudent.city} onChange={handleInputChange} />
        </label>
        <div className="flex justify-end mt-4">
          <button className="bg-color text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveChanges}>Save Changes</button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
