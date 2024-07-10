import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdArrowDropdown } from 'react-icons/io';
import Table from '../../../../components/tableComponents/Table';
import AddEventForm from './AddEventForm';
import Dropdown from '../../../../components/dropdown/DropDown';
import { fetchEvents, deleteEvent } from '../../../../redux/actions/action';
import EventDetailModal from './Dropdowns/EventDetailModal';
import EditEventForm from './Dropdowns/EditEventForm';
import ConfirmDeleteModal from './Dropdowns/ConfirmDeleteModal';

const EventDetails = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events || []);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openEventForm = () => {
    setShowEventForm(true);
    setDropdownOpen(false);
  };

  const closeEventForm = () => {
    setShowEventForm(false);
  };

  const openDetailModal = (event) => {
    setSelectedEvent(event);
    setShowDetailModal(true);
  };

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setShowEditModal(true);
  };

  const openDeleteModal = (event) => {
    setSelectedEvent(event);
    setShowDeleteModal(true);
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Event Name',
        accessor: 'eventName',
      },
      {
        Header: 'Speaker Name',
        accessor: 'speakerName',
      },
      {
        Header: 'Event Date',
        accessor: (row) => formatDate(row.dateOfEvent),
      },
      {
        Header: 'Speaker Bio',
        accessor: 'speakerDetails',
      },
      {
        Header: 'Contact Number',
        accessor: 'organizerContactNumber',
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({ row }) => (
          <Dropdown
            options={['View', 'Edit', 'Delete']}
            onSelect={(option) => {
              if (option === 'View') openDetailModal(row.original);
              if (option === 'Edit') openEditModal(row.original);
              if (option === 'Delete') openDeleteModal(row.original);
            }}
          />
        ),
      },
    ],
    []
  );

  return (
    <div className="text-white">
      <div className="mb-2 pt-4 flex justify-end items-center pr-8 relative">
        <button
          onClick={toggleDropdown}
          className="bg-color hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span>Add Event</span>
          <IoMdArrowDropdown className="w-5 h-6 ml-2" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-36 w-32 mr-7  bg-white rounded-md shadow-lg z-10">
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={openEventForm}
              >
                Event
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Hackathon
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Gallery
              </a>
            </div>
          </div>
        )}
      </div>

      <Table columns={columns} data={events} heading="Event Management" />

      {showEventForm && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <AddEventForm onClose={closeEventForm} />
        </div>
      )}

      {showDetailModal && (
        <EventDetailModal
          event={selectedEvent}
          onClose={() => setShowDetailModal(false)}
        />
      )}

      {showEditModal && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <EditEventForm
            event={selectedEvent}
            onClose={() => setShowEditModal(false)}
          />
        </div>
      )}

      {showDeleteModal && (
        <ConfirmDeleteModal
          event={selectedEvent}
          onClose={() => setShowDeleteModal(false)}
          onDelete={() => {
            dispatch(deleteEvent(selectedEvent.id));
            setShowDeleteModal(false);
          }}
        />
      )}
    </div>
  );
};

export default EventDetails;
