import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";



const AhProject2 = () => {
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
            <div className="absolute w-full top-[70px] right-[0px] left-[0px] bg-gradient-to-b from-black [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)]  h-[466px] overflow-hidden text-4xl md:text-5xl lg:text-6xl">
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center"> AI-Driven Disease Prediction and Prevention in Livestock</b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all">
          The research project, "Smart Feeding Systems: AI Optimization for Livestock Nutrition," aims to transform livestock nutrition practices through AI integration into feeding systems. The project involves comprehensive data collection, nutritional analysis, and AI-driven optimization for individualized diets. Real-time monitoring of livestock health, dynamic adjustment of diets, and precision feeding strategies will be implemented to enhance productivity. The research includes a cost-benefit analysis, education programs for livestock managers, and an environmental impact assessment. The continuous improvement framework ensures iterative refinement based on feedback from livestock performance.
          < br />
          NutriOptiFeed encompasses features for AI-driven nutritional optimization, real-time health monitoring, and precision feeding for diverse livestock species and production goals.
        </p>


        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: NutriOptiFeed
        </h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">   NutriOptiFeed encompasses features for AI-driven nutritional optimization, real-time health monitoring, and precision feeding for diverse livestock species and production goals.




        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 "> AI-Driven Nutrition Optimization: Utilizes advanced algorithms to optimize feed formulation and delivery processes.
          </li>
          <li className="p-1">
            Real-time Health Monitoring: Integrates IoT devices and sensors for continuous monitoring of key health indicators.
          </li>
          <li className="p-1">  Dynamic Diet Adjustment: Adapts individualized diets based on real-time health data and changing environmental conditions.
          </li>
          <li className="p-1">   Precision Feeding Strategies: Implements AI models aligned with specific production goals for targeted outcomes.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1">Livestock Managers</li>
          <li className="p-1">Nutritionists</li>
          <li className="p-1">Veterinarians</li>
          <li className="p-1">Agricultural Extension Services</li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all ">
          <li className="p-1">Enhanced Productivity: Improves livestock health, growth, and overall productivity through AI-optimized nutrition.  </li>

          <li className="p-1">Cost-Benefit Efficiency: Evaluates economic implications, fostering feed efficiency and production outcomes.</li>

          <li className="p-1">Education and Adoption: Facilitates effective adoption through education and training programs for livestock managers.</li>

          <li className="p-1">Environmental Sustainability: Assesses and enhances environmental impact, ensuring responsible resource utilization.</li>


        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          NutriOptiFeed emerges as a pivotal AI tool, aligning with the project's goals by providing a comprehensive system for AI-optimized livestock nutrition. Its features contribute to enhanced productivity, economic efficiency, and sustainable farming practices. NutriOptiFeed stands as a revolutionary solution, ensuring the well-being of livestock and fostering responsible agricultural practices

        </p>
      </div>
      <Footer />
    </div>
  );
};
export default AhProject2;
