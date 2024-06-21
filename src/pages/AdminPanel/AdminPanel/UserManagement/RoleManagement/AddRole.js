import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { uploadNewRole } from '../../../../../redux/actions/action'; 
import TextField from "../../../../../components/formcomponents/TextField"

const AddRole = ({ onAddRoleClose }) => {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    roles_name: '',
    creation_date: '',
  });

  const { roles_name, creation_date } = formData;
  
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setFormData({
      ...formData,
      creation_date: formattedDate
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const roleData = {
    roles_name: formData.roles_name,
    creation_date: formData.creation_date,
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadNewRole(roleData));
    console.log('formdata', roleData);
    onAddRoleClose();
  };
  
  return (
    <div>
      <h2 className="text-white">Add Role</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mt-10">
          <div className="mr-5 w-60">
            <TextField 
              label="Role Name"
              type="text"
              name="roles_name"
              value={roles_name}
              placeholder="Role Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mr-5 w-60">
            <TextField
              label="Creation Date"
              type="date"
              name="creation_date"
              value={creation_date}
              placeholder="Creation Date" 
              required
              disabled
            />  
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button className="mr-5 bg-white py-2 px-7 rounded text-xl" fullWidth type="submit">Save</button>
          <button type="button" className="bg-white py-2 px-7 rounded text-xl" fullWidth onClick={onAddRoleClose}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default AddRole;
