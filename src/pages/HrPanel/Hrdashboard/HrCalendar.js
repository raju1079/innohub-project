import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import './Calendarstyles.css'; // Ensure to import the base CSS for Calendar

const holidays = [
  { date: '2024-07-04', name: 'Independence Day' },
  { date: '2024-12-25', name: 'Christmas Day' },
];

const birthdays = [
  { date: '2024-01-15', name: 'John Doe' },
  { date: '2024-02-20', name: 'Jane Smith' },
];

const events = [
  ...holidays.map(event => ({ ...event, type: 'holiday' })),
  ...birthdays.map(event => ({ ...event, type: 'birthday' })),
];

const CalendarApp = () => {
  const [value, setValue] = useState(new Date());

  const isEvent = (date, type) => {
    return events.some(event => new Date(event.date).toDateString() === date.toDateString() && event.type === type);
  };

  const getEvent = (date) => {
    return events.find(event => new Date(event.date).toDateString() === date.toDateString());
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (isEvent(date, 'holiday')) {
        return 'bg-red-200 text-white rounded-full';
      }
      if (isEvent(date, 'birthday')) {
        return 'bg-blue-200 text-white rounded-full';
      }
    }
    return null;
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const event = getEvent(date);
      if (event) {
        return <p className="text-xs text-center">{event.name}</p>;
      }
    }
    return null;
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 pl-40 bg-gray-100 overflow-y-auto border border-white rounded-lg">
        <div className="p-4 pb-10">
          <div className="flex flex-col gap-4 px-8 font-poppins">
            <div className="flex flex-row w-full">
              <div className="flex flex-row grow px-9 pt-10 pb-3.5 w-full font-poppins text-white bg-violet-900 rounded-3xl">
                <div className="mt-4 mb-8 text-2xl">Total Enrolled</div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-row grow px-9 pt-10 pb-3.5 w-full font-poppins text-white bg-violet-900 rounded-3xl">
                <div className="mt-4 mb-8 text-2xl">Total Selected Students</div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-row grow px-9 pt-10 pb-3.5 w-full font-poppins text-white bg-violet-900 rounded-3xl">
                <div className="mt-4 mb-8 text-2xl">Total Rejected Students</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CalendarApp;
