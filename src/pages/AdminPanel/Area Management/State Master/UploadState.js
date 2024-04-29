import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { uploadNewState } from '../../../../redux/actions/action'; 
import TextField from "../../../../components/formcomponents/TextField";

const UploadState = () => {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    state_name: '',
    creation_date: '',
  });

  const { state_name, creation_date } = formData;
  
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
  const stateData = {
    state_name: formData.state_name,
    creation_date: formData.creation_date,
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadNewState(stateData));
    console.log('formdata', stateData);
  };

  const handleClear = () => {
    setFormData({
      ...formData,
      state_name: '',
    });
  };
  const validateStateName = (value) => {
    if (!value) {
      return "State name is required";
    }
    return "";
  };

  return (
    <div>
      <h2 className="text-white">Add State</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <div className="mr-5 w-60">
            <TextField 
              label="State Name"
              type="text"
              name="state_name"
              value={state_name}
              placeholder="State Name"
              onChange={handleChange}
              validate={validateStateName}
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
          <button className="mr-5 bg-[#532fa0] text-white py-3 px-10 rounded text-xl" fullWidth type="submit">Save</button>
          <button className="bg-[#532fa0] text-white py-3 px-10 rounded text-xl" fullWidth onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default UploadState;
