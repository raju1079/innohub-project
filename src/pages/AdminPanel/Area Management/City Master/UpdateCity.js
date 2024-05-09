import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from "../../../../components/formcomponents/TextField";
import { fetchCityById, updateCityById, fetchStates } from '../../../../redux/actions/action';

const UpdateCity = () => {
  const cityDetails = useSelector((state) => state.fetchCityById.cityById);
  const states = useSelector((state) => state.states.states);
  const dispatch = useDispatch();
  const { cityId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city_name: '',
    state_name: '',
    state_id: '',
    creation_date: '', 
  });
  const [selectedStateName, setSelectedStateName] = useState('');

  const { city_name } = formData;

  useEffect(() => {
    dispatch(fetchCityById(cityId));
    dispatch(fetchStates());
  }, [dispatch, cityId]);

  useEffect(() => {
    if (cityDetails.length > 0) {
      const selectedCity = cityDetails[0];
      setFormData({
        city_name: selectedCity?.city_name,
        //state_name: getStateName(selectedCity?.state_id),
        state_id: selectedCity?.state_id,
        creation_date: selectedCity?.creation_date,
      });
      setSelectedStateName(getStateName(selectedCity?.state_id));
    }
  }, [cityDetails, states]);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const creation_date = `${year}-${month}-${day}`;
    setFormData({
      ...formData,
      creation_date: creation_date,
    });
  }, [cityDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'city_name') {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getStateName = (stateId) => {
    const state = states.find(state => state.state_id === stateId);
    return state ? state.state_name : '';
  };

  const cityData = {
    city_name: formData.city_name,
    state_id: formData.state_id,
    state_name: getStateName(formData.state_id),
    creation_date: formData.creation_date, 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCityById(cityData, cityId));
    navigate("/allCity");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#090119]">
      <div className="w-1/2 border border-gray-300 p-10 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-semibold text-white mb-5">Update City</h3>
          {cityDetails.length > 0 && (
            <>
              <h6 className="text-white">CITY NAME: {cityDetails[0]?.city_name}</h6>
              <button onClick={() => navigate(-1)} className="mt-5 bg-[#532fa0] p-2 rounded">Back</button>
            </>
          )}
          <div className="flex gap-5 mt-5">
            <div className="w-1/3">
              <TextField
                type="text"
                name="city_name"
                value={city_name}
                onChange={handleChange}
                placeholder="City Name"
                required
              />
            </div>
            <div className="w-1/3">
              <TextField
                type="text"
                value={selectedStateName}
                disabled
              />
            </div>  
            <div className="w-1/3">
              <TextField
                type="date"
                value={cityData?.creation_date}
                disabled
              />
            </div>
          </div>
          <button type="submit" className="bg-[#532fa0] text-white p-2 rounded mt-5">
            Update & Save City
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCity;
