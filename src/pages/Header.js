import React, { useState } from 'react';
import { useCallback } from "react";

import { useNavigate } from 'react-router-dom';
// import Footer from "../components/Footer";

const Header = () => {
  const navigate = useNavigate();
  /* const [isMenuOpen, setIsMenuOpen] = useState(false);
  */

  
  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onResearchAreaTextClick = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);



  /* const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };
 */
  return (
       <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[90px] overflow-hidden">
   
    <div className="bg-gray text-white font-poppins">
       <img
          className="w-[180px] pt-1 cursor-pointer"
          alt="Logo"
          src="/poplogo.svg"
          onClick={onGroupClick}
         // onClick={() => handleNavigation('/')}
        />
       <div className="absolute top-[40px] left-[calc(50%_-_111px)] w-[694px] flex flex-row items-center justify-between">
          <div
            className="relative capitalize mt-[-40px] text-xl mx-0 ml-[-70px] md:ml-0 lg:ml-0 xl:ml-0 font-medium cursor-pointer transition   hover:text-blue duration-300 
             Save Changes
           </button>"
            onClick={onResearchAreaTextClick}
          >
            Research area
          </div>
          <div
            className="relative mt-[-40px] text-xl mx-0 ml-[-250px] md:ml-0 lg:ml-[-100px] xl:ml-0 capitalize font-medium cursor-pointer transition hover:text-blue duration-300  "
          onClick={onProjectsTextClick}
          >
            Collaborations
          </div>
          
          <div
            className="relative mt-[-40px] text-xl mx-0 ml-[-270px] md:ml-0 lg:ml-[-50px] xl:ml-0 capitalize font-medium cursor-pointer transition hover:text-blue duration-300 "
          onClick={onProjectsTextClick}
          >
            Blogs
          </div>
          <div
            className="relative mt-[-40px] text-xl mx-0 ml-[-270px] md:ml-0 lg:ml-[-110px] xl:ml-0 capitalize font-medium cursor-pointer transition hover:text-blue duration-300"
            onClick={onAboutUsTextClick}
            >
              About us
   
          </div>
          
          <div
            className="relative mt-[-40px] text-xl mx-0 ml-[-70px] capitalize font-medium cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ">
                    </div>
        </div>
        </div>
    </div>
  );
};

export default Header;