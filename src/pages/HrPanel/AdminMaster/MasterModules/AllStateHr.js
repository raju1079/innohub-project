import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HrHeader from '../../HrHeader';
import HrSidebar from '../../HrSideBar';
import UploadState from '../../../../pages/AdminPanel/Area Management/State Master/UploadState';
import StateList from '../../../../pages/AdminPanel/Area Management/State Master/StateList';

const AllStateHr = () => {
  const navigate = useNavigate();
  const [activeMaster, setActiveMaster] = useState('state');

  const handleCityMasterClick = () => {
    navigate('/allCityHR');
    setActiveMaster('city');
  };

  const handleEducationMasterClick = () => {
    navigate('/allEducationHR');
    setActiveMaster('education');
  };

  return (
    <div className="bg-[#090119] flex flex-col">
      <HrHeader dashboardName="State Master" />
      <div className="flex flex-1">
        <HrSidebar />
        <div className="flex flex-col flex-1 items-center">
          <div className="mt-[120px]">
            <button
              className={`grow justify-center items-center px-10 pt-4 text-xl text-center rounded-l-lg h-[50px] w-[220px] ${activeMaster === 'state' ? 'bg-gray-500' : 'bg-violet-900' }`}
              onClick={() => setActiveMaster('state')}
            >
              State Master
            </button>
            <button
              className={`grow justify-center items-center px-6 pt-4 rounded-r-none text-xl text-slate-950 text-white w-[220px] h-[50px] ${activeMaster === 'city' ? 'bg-gray-500' : 'bg-violet-900' }`}
              onClick={handleCityMasterClick}
            >
              City Master
            </button>
            <button
              className={`grow justify-center items-center px-6 pt-4 text-xl rounded-r-lg text-slate-950 text-white w-[220px] h-[50px] ${activeMaster === 'education' ? 'bg-gray-500' : 'bg-violet-900' }`}
              onClick={handleEducationMasterClick}
            >
              Educational Master
            </button>
          </div>
          <div className="flex items-center flex-1 mt-[20px] mr-[130px]">
            <UploadState />
          </div>
          <div className="flex justify-center items-center flex-1 mt-[30px] mr-[40px]">
            <StateList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStateHr;
