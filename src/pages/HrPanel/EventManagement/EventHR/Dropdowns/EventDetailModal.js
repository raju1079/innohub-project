import React from 'react';

const ViewEventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-color pl-8 rounded-lg shadow-lg w-full max-w-2xl ml-24 mt-28 border-4 border-white border-solid">
        <h2 className="text-2xl mb-4">Event Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Event Name:</strong> {event.eventName}
          </div>
          <div>
            <strong>Event Platform:</strong> {event.eventPlatform}
          </div>
          <div>
            <strong>Topic:</strong> {event.topic}
          </div>
          <div>
            <strong>Email:</strong> {event.email}
          </div>
          <div>
            <strong>Organizer Contact Number:</strong> {event.organizerContactNumber}
          </div>
          <div>
            <strong>Event Website URL:</strong> {event.eventWebsiteUrl}
          </div>
          <div>
            <strong>Date of Event:</strong> {new Date(event.dateOfEvent).toLocaleDateString('en-GB')}
          </div>
          <div>
            <strong>Last Date of Registration:</strong> {new Date(event.lastDateOfRegistration).toLocaleDateString('en-GB')}
          </div>
          <div>
            <strong>Select Event:</strong> {event.selectEvent}
          </div>
          <div>
            <strong>Speaker Name:</strong> {event.speakerName}
          </div>
          <div>
            <strong>Organizer:</strong> {event.organizer}
          </div>
          <div>
            <strong>Address:</strong> {event.address}
          </div>
          <div>
            <strong>Free/Paid:</strong> {event.freePaid}
          </div>
          <div>
            <strong>Paid Amount:</strong> {event.paidAmount}
          </div>
          <div>
            <strong>About Event:</strong> {event.aboutEvent}
          </div>
          <div>
            <strong>Speaker Details:</strong> {event.speakerDetails}
          </div>
        </div>
        <div className="mt-6 flex justify-end mb-4 mr-4">
          <button
            onClick={onClose}
            className="bg-black text-white py-2 px-6 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEventModal;
