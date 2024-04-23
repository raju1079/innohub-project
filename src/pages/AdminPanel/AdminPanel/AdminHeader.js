import React from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = ({ dashboardName }) => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="p-1 pb-2 pt-0 pr-8 sm:ml-2 md:fixed  w-full  bg-[#090119] mt-0">
      <div className="gap-10 px-1 font-semibold max-md:flex-wrap">
        <div className="flex gap-2 font-semibold text-white max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
          <div className=" flex max-md:ml-0 max-md:w-full">
          <img
              className="h-24 w-60 mb-2  md:mb-0"
              loading="lazy"
              alt=""
              src="/poplogo.svg"
              //onClick={onHomeClick}
            />
          </div>
          <div className="flex flex-col grow shrink-0 justify-center items-start py-4 pr-20 pl-7 bg-violet-900 rounded-xl basis-0 w-fit max-md:px-5 max-md:max-w-full">
            <div className="text-xl tracking-wide leading-4">
              {dashboardName}
            </div>
            <div className="mt-3 text-sm tracking-wide leading-4">
              <span className="text-white">Manage your {dashboardName}. </span>
              <span className="text-white">learn more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
