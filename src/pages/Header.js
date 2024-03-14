import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Footer from "../components/Footer";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
       <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[90px] overflow-hidden">
   
    <div className="bg-gray text-white font-poppins">
      <nav className="flex items-center justify-between py-4 px-5">
        <img
          className="h-10 cursor-pointer"
          alt="Logo"
          src="/poplogo.svg"
         // onClick={() => handleNavigation('/')}
        />
        <div className="hidden md:flex space-x-6">
          <div
            className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300"
            onClick={() => handleNavigation('/researcharea')}
          >
            Research area
          </div>
          <div
            className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300"
            //onClick={() => handleNavigation('/desktop-3')}
          >
            Collaborations
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 "
          //onClick={onProjectsTextClick}
          >
            Blogs
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 "
            //onClick={onAboutUsTextClick}
          >
            About us
          </div>
           </div>
        <div className="md:hidden ">
          <button
            className="text-white focus:outline-none  text-lg font-semibold bg-inherit mb-3"
            onClick={toggleMenu}
          >
            <img 
            src='/Menu.svg'
            />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className=" absolute top-0 right-0 mt-[50px] mr-[60px] ">
             <div
            className="cursor-pointer mb-0"
            onClick={() => handleNavigation('/researcharea')}
          >
            Research area
          </div>
          
          <div className=" absolute top-0 right-0 mt-[60px] mr-[60px] ">
             <div
            className="cursor-pointer mb-2 mt-4 absolute capitalize text-blue-200 font-medium  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300"
            onClick={() => handleNavigation('/researcharea')}
          >
            collaborative
          </div>
        
          <div
            className=" cursor-pointer text-blue-200"
            //onClick={() => handleNavigation('/desktop-3')}
          >
            Collaborations
          </div>
          <div
            className="absolute capitalize text-blue-200 font-medium cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 "
          //onClick={onProjectsTextClick}
          >
            Blogs
          </div>
          <div
            className="absolute capitalize text-blue-200 font-medium cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 "
            //onClick={onAboutUsTextClick}
          >
            About us
          </div>
          </div>
          </div>
      )}
      {/* <Footer/> */}
    </div>
    </div>
  );
};

export default Header;