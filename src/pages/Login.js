
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";


const Login = ({ histroy }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  /* const onSignInClick = useCallback(() => {
    navigate("/SignIn");
  }, [navigate]);

  const handleSignInClick = () => {
    // Navigate to the signup page
    history.push("/SignIn");
  };
 */
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-[21px] px-0 box-border gap-[19px_0px] tracking-[normal]">
      <div className="w-full flex flex-col items-start justify-start pt-2 px-4 box-border bg-black max-w-full">
        <header className="w-full flex flex-col md:flex-row items-center justify-between max-w-full gap-[20px] text-center text-4xl md:text-xl text-white font-poppins">
          <div className="w-full  flex flex-col md:flex-row items-start justify-start gap-[10px] max-w-full">
            <img
              className="h-[69px] w-[260px] relative mb-2 md:mb-0"
              loading="lazy"
              alt=""
              src="/poplogo.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0 pl-5  px-0 pb-0 md:pb-5 bg-blue rounded-l-lg">
              <h1 className="m-0 relative  font-semibold font-inherit whitespace-nowrap text-6xl md:text-4xl">
              Student Management <br />
              
              </h1>
              <h4>Manage your Admin Dashboard. LEARN MORE</h4>
            </div>
          </div>
         
        
        </header>
      </div>

   </div>
  );
};

export default Login;