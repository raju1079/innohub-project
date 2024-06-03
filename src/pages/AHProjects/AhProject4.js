import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const AhProject4 = () => {
  const navigate = useNavigate();

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

  return (
    <div className="relative bg-gray md:w-full w-[739px] p-0 mx-full">
      <Header />
      <div className="bg-gray py-16 mx-10 font-poppins">
        <div className="container mx-auto">
          <div className="px-4 md:px-0">
            <div className="absolute w-full top-[95px] right-[0px] left-[0px] bg-gradient-to-b from-black [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)]  h-[466px] overflow-hidden text-4xl md:text-5xl lg:text-6xl">
              <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
              <div className="absolute top-[181px] left-[50%] transform -translate-x-1/2 rounded-full bg-gray-400 w-[686px] h-[686px] overflow-hidden" />
              <img
                className="absolute top-[0px] left-[50%] transform -translate-x-1/2 w-full md:max-w-[1160px] md:h-[375.6px] md:w-auto h-auto"
                alt=""
                src="/artboard-44x-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-[300px] font-poppins ">
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center"> Precision Agriculture:
          AI-Enhanced Precision Poultry Farming for Efficient Egg Production
        </b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base transform scale-120">
          The research project, "AI-Enhanced Precision Poultry Farming for Efficient Egg Production," aims to optimize poultry farming practices, focusing on egg production efficiency. The project involves comprehensive data collection on poultry farming parameters, identification of key factors influencing egg production, and the development of AI models for predictive egg production. Integration with environmental control systems, precision feed management optimization, health monitoring, and early disease detection are key components. The project includes computer vision for egg quality assessment, a real-time alert system, and a decision support system for farm managers. </p>


        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name:EggOptiFarm

        </h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          EggOptiFarm encompasses features for AI-driven predictive modeling, real-time alerts, and decision support systems for optimizing various aspects of poultry farming, specifically egg production.



        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1 "> Predictive Egg Production Modeling: Utilizes machine learning techniques for accurate prediction of egg production outcomes.

          </li>
          <li className="p-1">

            Environmental Control System Integration: Dynamically adjusts lighting, temperature, and ventilation for optimal egg production conditions.

          </li>
          <li className="p-1">


            Precision Feed Management Optimization: Analyzes feed composition and consumption patterns for enhanced nutritional aspects of egg production.

          </li>
          <li className="p-1">

            Health Monitoring and Early Disease Detection: Implements AI-powered systems for continuous health monitoring and early disease detection.

          </li>
          <li className="p-1">

            Computer Vision for Egg Quality Assessment: Utilizes image recognition for real-time quality control in the egg production line.

          </li>
          <li className="p-1">

            Real-time Alerts and Decision Support System: Provides timely alerts and decision support for farm managers based on AI insights.
          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1">Poultry Farmers</li>
          <li className="p-1">Farm Managers</li>
          <li className="p-1">Veterinary Experts</li>

          <li className="p-1">Agricultural Extension Services
          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 ">
          <li className="p-1">Maximized Egg Production Efficiency: Improves egg production efficiency through predictive modeling and optimized farm conditions.</li>
          <li className="p-1">Enhanced Nutritional Aspects: Optimizes feed management for improved nutritional aspects of egg production.</li>
          <li className="p-1">Early Disease Detection: Facilitates early detection of diseases, minimizing impact on egg-laying performance.</li>
          <li className="p-1">Real-time Quality Control: Ensures egg quality through computer vision systems in real-time.</li>
          <li className="p-1">Seamless Farm Integration: Facilitates adoption through training programs, documentation, and ongoing support.</li>




        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          EggOptiFarm emerges as a comprehensive AI tool, aligning with the project's goals to enhance efficiency and productivity in poultry farming, particularly in egg production. Its features contribute to maximized egg production efficiency, improved nutritional aspects, and real-time quality control, making it a valuable asset for poultry farmers seeking precision in their operations. EggOptiFarm stands as a transformative solution for the poultry industry, fostering optimized and efficient egg production practices.</p>
      </div>
      <Footer />
    </div>
  );
};
export default AhProject4;
