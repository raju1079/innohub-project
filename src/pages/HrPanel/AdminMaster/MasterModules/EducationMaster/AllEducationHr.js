import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HrHeader from '../../../HrHeader';
import HrSidebar from '../../../HrSideBar';
import UploadEducation from '../../../../../pages/AdminPanel/Area Management/Educational Master/UploadEducation';
import EducationList from '../../../../AdminPanel/Area Management/Educational Master/EducationList';

const AllEducationHr = () => {
  const navigate = useNavigate();
  const [activeMaster, setActiveMaster] = useState('education');

  const handleStateMasterClick = () => {
    navigate('/allStateHR');
    setActiveMaster('state');
  };

  const handleCityMasterClick = () => {
    navigate('/allCityHR');
    setActiveMaster('city');
  };

  return (
    <div className="bg-[#090119] flex flex-col">
      <HrHeader dashboardName="Education Master" />
      <div className="flex flex-1">
        <HrSidebar />
        <div className="flex flex-col flex-1 items-center">
          <div className="mt-[120px]">
            <button className={`grow justify-center items-center px-6 pt-4 text-xl text-center rounded-l-lg text-slate-950 text-white w-[220px] h-[50px] ${activeMaster === 'state' ? 'bg-gray-500' : 'bg-violet-900' }`}
              onClick={handleStateMasterClick}
            >
              State Master
            </button>
            <button className={`grow justify-center items-center px-6 pt-4 text-xl rounded-r-none text-slate-950 text-white w-[220px] h-[50px] ${activeMaster === 'city' ? 'bg-gray-500' : 'bg-violet-900' }`}
              onClick={handleCityMasterClick}
            >
              City Master
            </button>
            <button className={`grow justify-center items-center px-10 pt-4 text-xl rounded-r-lg w-[250px] h-[50px] ${activeMaster === 'education' ? 'bg-gray-500' : 'bg-violet-900' }`}
              onClick={() => setActiveMaster('education')}
            >
              Educational Master
            </button>
          </div>
          <div className="flex justify-center items-center flex-1 mt-[20px] mr-[160px]">
            <UploadEducation />
          </div>
          <div className="flex justify-center items-center flex-1 mt-[30px] mr-[40px]">
            <EducationList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEducationHr;
