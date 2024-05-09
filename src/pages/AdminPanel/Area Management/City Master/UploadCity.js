import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { uploadNewCity, fetchStates } from '../../../../redux/actions/action'; 
import TextField from "../../../../components/formcomponents/TextField";

const UploadCity = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.states.states); 
  
  const [formData, setFormData] = useState({
    city_name: '',
    state_name: '',
    state_id: '', 
    creation_date: '',
  });

  const { city_name, state_name, state_id, creation_date } = formData;
  
  useEffect(() => {
    dispatch(fetchStates()); 
  }, [dispatch]); 

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setFormData({
      ...formData,
      creation_date: formattedDate
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'state_name') {
      const selectedState = states.find(state => state.state_name === value);
      if (selectedState) {
        setFormData({ ...formData, [name]: value, state_id: selectedState.state_id });
      } else {
        setFormData({ ...formData, [name]: value, state_id: '' }); 
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadNewCity(formData));
    console.log('formdata', formData);
  };

  const handleClear = () => {
    setFormData({
      ...formData,
      city_name: '',
      state_name: '',
      state_id: '',
    });
  };

  const validateCityName = (value) => {
    if (!value) {
      return "City name is required";
    }
    return "";
  };

  return (
    <div>
      <h2 className="text-white">Add City</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
        <div className="mr-5 w-60 mt-8">
            <select
              className="w-full border border-white p-3.5 rounded"
              name="state_name"
              value={state_name}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state.state_id} value={state.state_name}>{state.state_name}</option>
              ))}
            </select>
          </div>
          <div className="mr-5 w-60">
            <TextField
              label="City Name"
              type="text"
              name="city_name"
              value={city_name}
              placeholder="City Name"
              onChange={handleChange}
              validate={validateCityName}
              required
              disabled={!state_name}
            />
          </div>
          <div className="w-60">
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

export default UploadCity;
