import React, { useState } from 'react';
import HrHeader from '../../HrHeader';
import HrSidebar from '../../HrSideBar';
import EventDetails from './EventDetails';
import EventParticipantsDetails from '../Participants/EventParticipantsDetails';
import EventCertificate from '../Certificates/EventCertificate';

const EventHr = () => {
  const [activeTab, setActiveTab] = useState('eventDetails');
  

  return (
    <div className="flex flex-row w-full bg-[#090119]">
      <HrHeader dashboardName="Event Management" />
      <HrSidebar />

      <div className="md:flex-1 md:ml-8 px-4 pt-24 pl-60">
        <div className="text-white">
          <div className="mt-[30px] pl-36">
            <button
              className={`grow justify-center items-center px-10 pt-2 text-xl text-center rounded-l-lg h-[50px] w-[220px] ${activeTab === 'eventDetails' ? 'bg-gray-500' : 'bg-violet-900'}`}
              onClick={() => setActiveTab('eventDetails')}
            >
              Event Details
            </button>
            <button
              className={`grow justify-center items-center px-6 pt-2 rounded-r-none text-xl text-slate-950  w-[220px] h-[50px] ${activeTab === 'participantsDetails' ? 'bg-gray-500' : 'bg-violet-900'}`}
              onClick={() => setActiveTab('participantsDetails')}
            >
              Participants Details
            </button>
            <button
              className={`grow justify-center items-center px-6 pt-2 text-xl rounded-r-lg text-slate-950 w-[220px] h-[50px] ${activeTab === 'certificates' ? 'bg-gray-500' : 'bg-violet-900'}`}
              onClick={() => setActiveTab('certificates')}
            >
              Certificates
            </button>
          </div>

          {activeTab === 'eventDetails' && <EventDetails />}
          {activeTab === 'participantsDetails' && <EventParticipantsDetails />}
          {activeTab === 'certificates' && <EventCertificate />}
        </div>
      </div>
    </div>
  );
};

export default EventHr;
