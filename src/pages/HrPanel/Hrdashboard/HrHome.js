import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HrHeader from '../HrHeader';
import HrSidebar from '../HrSideBar';
import { fetchTotalStudents , adminLogin } from '../../../redux/actions/action';
import HrCalendar from './HrCalendar';

const HrHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    totalEnrolledStudents,
    totalQualifiedStudents,
    totalRejectedStudents
  } = useSelector((state) => state.fetchStudent);

  const adminState = useSelector((state) => state.admin);


  useEffect(() => {
    dispatch(fetchTotalStudents());
  }, [dispatch]);

  /* const handleAdminPortalClick = () => {
    if (adminState === 'admin') {
      navigate('/adminhome');
    } else {
      alert('You do not have permission to access the admin portal');
    }
  }; */

  const handleAdminPortalClick = () => {
    navigate('/adminhome');
  };

  return (
    <div className="main-container h-auto bg-[#090119] relative overflow-hidden mx-auto my-0">
      <HrHeader dashboardName="HR Dashboard" />
      <HrSidebar />
      <div className="p-8 mt-24 sm:ml-64">
        <div className="flex gap-10 px-10 pb-10 font-semibold max-md:flex-wrap">
          <div className="flex flex-col items-start px-6 py-6 text-8xl font-semibold font-inherit text-white w-full rounded-xl max-md:mt-10 max-md:max-w-full">
            Welcome to Dashboard
          </div>
          <div className="flex flex-auto gap-0 text-2xl font-medium tracking-wide text-center max-md:flex-wrap max-md:max-w-full">
            <div
              className="grow justify-center items-center px-10 pt-4 text-black text-center bg-white rounded-l-lg h-[60px] w-[250px] max-md:px-5 cursor-pointer"
              onClick={handleAdminPortalClick}
            >
              Admin portal
            </div>
            <div className="grow justify-center items-center px-6 pt-4 bg-color rounded-r-lg text-white w-[250px] h-[60px] max-md:px-5">
              HR portal
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 pb-10 sm:ml-60 gap-x-5">
        <div className="flex gap-16 md:gap-4 px-8 font-poppins max-md:flex-wrap">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-9 pt-10 pb-3.5 w-full font-poppins text-white bg-violet-900 rounded-3xl max-md:px-5 max-md:mt-10">
              <div className="mt-4 mb-8 text-2xl">Total Enrolled Students: {totalEnrolledStudents}</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-9 pt-10 pb-3.5 w-full font-poppins text-white bg-violet-900 rounded-3xl max-md:px-5 max-md:mt-10">
              <div className="mt-4 mb-8 text-2xl">Total Selected Students: {totalQualifiedStudents}</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-9 pt-10 pb-3.5 w-full font-poppins text-white bg-violet-900 rounded-3xl max-md:px-5 max-md:mt-10">
              <div className="mt-4 mb-8 text-2xl">Total Rejected Students: {totalRejectedStudents}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 pb-10 sm:ml-64">
        <div className="gap-10 px-10 font-poppins max-md:flex-wrap">
          <div className="mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/715fff42a8c1a5e0bb3539bbe54f1981af8139b11665219cd847a0b7aab0f58d?apiKey=73b812aa1cfb46ea91602ee2908c5c32&"
                  className="w-full border-solid aspect-[1.56] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c72eb7054663c03884dd3d2a23ddb6b2184c66801f6cf8834e6f0dbbcab9527?apiKey=73b812aa1cfb46ea91602ee2908c5c32&"
                  className="grow w-full border-solid aspect-[1.02] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-600 text-white flex flex-col items-center justify-center">
        {/* <HrCalendar /> */}
      </div>
    </div>
  );
};

export default HrHome;
