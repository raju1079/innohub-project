import React, { useState, useEffect } from 'react';
import TextField from "../../../../../components/formcomponents/TextField";
//import TextArea from "../../../../components/formcomponents/TextArea";
import { useDispatch } from 'react-redux';
import { updateEvent } from '../../../../../redux/actions/action';

const EditEventForm = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    ...event,
    dateOfEvent: new Date(event.dateOfEvent).toISOString().split('T')[0], // Format date correctly
    lastDateOfRegistration: new Date(event.lastDateOfRegistration).toISOString().split('T')[0] // Format date correctly
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData({
      ...event,
      dateOfEvent: new Date(event.dateOfEvent).toISOString().split('T')[0], // Format date correctly
      lastDateOfRegistration: new Date(event.lastDateOfRegistration).toISOString().split('T')[0] // Format date correctly
    });
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEvent(formData));
    onClose();
  };

  return (
    <div className="relative bg-color w-screen-full md:ml-[-500px] lg:ml-[300px] mr-16  rounded-3xl border-4 border-white popup-content grid justify-items-start">
      <div className="self-stretch flex flex-col bg-color items-start justify-start max-w-full text-start text-xl text-black font-poppins rounded-3xl border-4 border-white border-solid ">
        <form
          onSubmit={handleSubmit}
          className="w-[670px] mx-0 mt-4 m-0 md:mx-0 md:px-3 md:mt-8 lg:mx-0 lg:mt-5 lg:justify-center md:pt-4 lg:pr-24"
        >
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3 ">
            <TextField
              label="Event Name*"
              name="eventName"
              type="text"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="Enter Event Name"
              required
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <div className="md:mx-8">
              <TextField
                label="Event Platform*"
                name="eventPlatform"
                type="text"
                value={formData.eventPlatform}
                onChange={handleChange}
                placeholder="Enter Event Platform"
                required
                className="w-full md:w-1/2 lg:w-1/4"
              />
            </div>
          </div>
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3 ">
            <TextField
              label="Speaker Name*"
              name="speakerName"
              type="text"
              value={formData.speakerName}
              onChange={handleChange}
              placeholder="Enter Speaker Name"
              required
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <div className="md:mx-8">
              <TextField
                label="Topic*"
                name="topic"
                type="text"
                value={formData.topic}
                onChange={handleChange}
                placeholder="Enter Topic"
                required
                className="w-full md:w-1/2 lg:w-1/4"
              />
            </div>
          </div>
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3 ">
            <TextField
              label="Date of Event*"
              name="dateOfEvent"
              type="date"
              value={formData.dateOfEvent}
              onChange={handleChange}
              required
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <div className="lg:mx-8">
              <TextField
                label="Last Date of Registration*"
                name="lastDateOfRegistration"
                type="date"
                value={formData.lastDateOfRegistration}
                onChange={handleChange}
                required
                className="w-full md:w-1/2 lg:w-1/4"
              />
            </div>
          </div>
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3 ">
            <TextField
              label="Organizer*"
              name="organizer"
              type="text"
              value={formData.organizer}
              onChange={handleChange}
              placeholder="Enter Organizer"
              required
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <div className="lg:mx-8">
              <TextField
                label="Organizer Contact Number*"
                name="organizerContactNumber"
                type="tel"
                value={formData.organizerContactNumber}
                onChange={handleChange}
                placeholder="Enter Contact Number"
                required
                className="w-full md:w-1/2 lg:w-1/4"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6 pb-5 ">
            <button
              onClick={onClose}
              className="bg-black text-white py-2 px-6 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white py-2 px-8 mx-6 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventForm;
