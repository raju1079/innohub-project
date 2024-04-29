import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from "../../../../components/formcomponents/TextField";
import { fetchEducationById, updateEducationById } from '../../../../redux/actions/action';

const UpdateEducation = () => {
  const educationDetails = useSelector((state) => state.fetchEducationById.educationById);
  console.log("##############", educationDetails);
  const dispatch = useDispatch();
  const { degreeId } = useParams();
  console.log("ID from URL:", degreeId);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    degree_name: '',
    creation_date: '',
  });

  const { degree_name } = formData;

  useEffect(() => {
    dispatch(fetchEducationById(degreeId));
  }, [dispatch, degreeId ]);
  console.log(degreeId,"degreeId");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const educationData = {
    degree_name: formData.degree_name,
    creation_date: new Date().toISOString().split('T')[0],
  };
  console.log("educationData: ", educationData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEducationById(educationData, degreeId));
    navigate("/allEducation");  
    console.log("formdata", educationData);
  };
  
  const selectedEducation = educationDetails[0];
  useEffect(() => {
    if (selectedEducation) {
      setFormData({
        degree_name: selectedEducation?.degree_name,
        creation_date: selectedEducation?.creation_date,
      });
    }console.log("selectedEducation: ", selectedEducation);
  }, [selectedEducation]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#090119]">
      <div className="w-1/2 border border-gray-300 p-10 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-semibold text-white mb-5">Update Education</h3>
          {selectedEducation && (
            <>
              <h6 className="text-white">EDUCATION NAME: {selectedEducation?.degree_name}</h6>
              <button onClick={() => navigate(-1)} className="mt-5 bg-[#532fa0] p-2 rounded">Back</button>
            </>
          )}
          <div className="flex gap-5 mt-5">
            <div className="w-1/3">
              <TextField
                type="text"
                name="degree_name"                  
                value={degree_name}
                onChange={handleChange}
                placeholder="Degree Name"
                required
              />
            </div>
            <div className="w-1/3">
              <TextField
                type="date"
                //name="creation_date"
                value={educationData.creation_date}
                //onChange={handleChange}
                placeholder="Creation Date"
                disabled 
              />
            </div>
          </div>
          <button type="submit" className="bg-[#532fa0] text-white p-2 rounded mt-5">
            Update & Save Education
          </button> 
        </form>
      </div>
    </div>
  );
};

export default UpdateEducation;
