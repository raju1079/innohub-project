import React from 'react'
// import "./AdminHeader.css"
import Adminsidebar from './Adminsidebar';
import { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
function AdminHeader() {
  const navigate = useNavigate();


/*     
    <div>
      <div class="p-4 sm:ml-64">
        <div className="flex flex-col items-center px-10 pt-5  max-md:px-5">
          <div className="flex flex-col items-start px-6 py-6 text-2xl font-bold text-white w-full bg-custom-color rounded-xl  max-md:mt-10 max-md:max-w-full">
            Admin Dashboard
            <div className="mt-3 text-sm tracking-wide leading-4">
              <span className="text-white">Manage your Admin Dashboard. </span>
              <span className="text-white">learn more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 */
const onGroupClickkk = useCallback(() => {
  navigate("/");
}, [navigate]);


  return (
    <div class="p-1 pb-2 pt-0 pr-8 sm:ml-2 md:fixed  w-full mt-0">
      <div className=" gap-10 px-1 font-semibold max-md:flex-wrap">
        <div className="flex gap-2 font-semibold text-white max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
          <div className=" flex max-md:ml-0 max-md:w-full" >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d55d8fd874ebc983fc146160e9916377c00efdee13ac5fd255235e5aceddbb9?apiKey=73b812aa1cfb46ea91602ee2908c5c32&"
              className="shrink-0 my-auto max-w-full aspect-[3.7] basis-0 grow-0 w-fit" 
              onClick={onGroupClickkk}
            />
          </div>
          <div className="flex flex-col grow shrink-0 justify-center items-start py-4 pr-20 pl-7 bg-violet-900 rounded-xl basis-0 w-fit max-md:px-5 max-md:max-w-full">
            <div className="text-xl tracking-wide leading-4">
              Admin Dashboard
            </div>
            <div className="mt-3 text-sm tracking-wide leading-4">
              <span className="text-white">Manage your Admin Dashboard. </span>
              <span className="text-white">learn more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminHeader;
