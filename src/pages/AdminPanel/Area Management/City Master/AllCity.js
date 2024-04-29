import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../AdminPanel/Adminsidebar';
import AdminHeader from '../../AdminPanel/AdminHeader';
import UploadCity from './UploadCity';
import CityList from './CityList';

const AllCity = () => {
  const navigate = useNavigate();
  const [activeMaster, setActiveMaster] = useState('city');

  const handleStateMasterClick = () => {
    navigate('/allState');
    setActiveMaster('state');
  };

  const handleEducationMasterClick = () => {
    navigate('/allEducation');
    setActiveMaster('education');
  };

  return (
    <div className="bg-[#090119] flex flex-col">
      <AdminHeader dashboardName="City Master" />
      <div className="flex flex-1">
        <AdminSidebar />
        <div className="flex flex-col flex-1 items-center">
          <div className="mt-[120px]">
            <button className={`grow justify-center items-center px-6 pt-4 text-xl rounded-l-lg text-slate-950 text-white w-[220px] h-[50px] ${activeMaster === 'state' ? 'bg-gray-500' : 'bg-violet-900' }`}
              onClick={handleStateMasterClick}
            >
              State Master
            </button>
            <button className={`grow justify-center items-center px-10 pt-4 text-xl text-center rounded-r-none w-[220px] h-[50px] ${activeMaster === 'city' ? 'bg-gray-500' : 'bg-violet-900' }`}
              onClick={() => setActiveMaster('city')}
            >
              City Master
            </button>
            <button className={`grow justify-center items-center px-6 pt-4 text-xl rounded-r-lg text-slate-950 text-white w-[220px] h-[50px] ${activeMaster === 'education' ? 'bg-gray-500' : 'bg-violet-900' }`}
              onClick={handleEducationMasterClick}
            >
              Educational Master
            </button>
          </div>
          <div className="flex justify-center items-center flex-1 mt-[20px] ml-[110px]">
            <UploadCity />
          </div>
          <div className="flex justify-center items-center flex-1 mt-[30px] ml-[70px]">
            <CityList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCity;
