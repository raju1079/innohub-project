import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { uploadNewEducation } from '../../../../redux/actions/action'; 
import TextField from "../../../../components/formcomponents/TextField";

const UploadState = () => {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    degree_name: '',
    creation_date: '',
  });

  const { degree_name, creation_date } = formData;
  
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
  const educationData = {
    degree_name: formData.degree_name,
    creation_date: formData.creation_date,
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadNewEducation(educationData));
    console.log('formdata', educationData);
  };

  const handleClear = () => {
    setFormData({
      ...formData,
      degree_name: '',
    });
  };

  const validateDegreeName = (value) => {
    if (!value) {
      return "Degree name is required";
    }
    return "";
  };

  return (
    <div>
      <h2 className="text-white">Add Education</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <div className="mr-5 w-60">
            <TextField
              label="Degree Name"
              type="text"
              name="degree_name"
              value={degree_name}
              placeholder="Degree Name"
              onChange={handleChange}
              validate={validateDegreeName}
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
        <div className="mt-5 flex justify-center">
          <button className="mr-5 bg-[#532fa0] text-white py-3 px-10 text-xl rounded" fullWidth type="submit">Save</button>
          <button className="bg-[#532fa0] text-white py-3 px-10 text-xl rounded" fullWidth onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default UploadState;
