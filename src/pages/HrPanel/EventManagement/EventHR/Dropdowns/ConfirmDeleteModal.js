import React from 'react';

const ConfirmDeleteModal = ({ event, onClose, onDelete }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-color p-8 rounded-lg shadow-lg border-4 border-white border-solid">
        <h2 className="text-2xl mb-4">Confirm Delete</h2>
        <p>Are you sure you want to delete the event "{event.eventName}"?</p>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
