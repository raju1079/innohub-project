// ScrollingTextBox.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const ScrollingText = () => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    // Handle the click event here, for now, we'll navigate to "/new-page"
    navigate('/notification');
   /*  console.log('Box clicked!');
  */ };

  return (
    <div
      className="scrolling-text-box text-base"
      onClick={handleBoxClick}
    >
    
      <marquee behavior="scroll" direction="left">

      <Link to="/apply-internship" className="ml-4 underline cursor-pointer text-xl text-white">
   {/*  Click to Apply */}  click here 
  </Link>

       - Our program is open for registration to 100 students who have secured 80% and above in their ongoing degree. Eligibility requires passing an entrance
   examination and submission of an official college endorsement letter for the free eight-month course.

       {/*  - We are taking 100 students - whose percentage is 80% above in their current degree,
        and one test to be passed, college letter should be submitted - it is a free 8 months course.
       {/*  (3 months training - 2 months AI, 1 Month campus preparation, 6 months project work) */} 
        
        
      </marquee>
      
    </div>
  );
};

export default ScrollingText;
