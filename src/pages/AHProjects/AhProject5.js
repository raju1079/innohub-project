import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const AhProject5 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">  Predictive Analytics for Swine Production:AI-Optimized Growth Models

        </b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all">
          The research project, "Predictive Analytics for Swine Production: AI-Optimized Growth Models," aims to revolutionize swine farming by integrating AI technologies. The project involves comprehensive data collection on swine growth parameters, identification of key influencing factors, and the development of AI-driven growth prediction models. Integration with genetic and nutritional data, optimization of feed formulation using AI, and real-time monitoring of swine health are key components. The project also includes integration with precision farming technologies, economic modeling, education programs for farmers, and continuous improvement based on feedback.</p>


        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name:SwineOptiGrow
        </h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          SwineOptiGrow encompasses features for AI-driven growth prediction, feed formulation optimization, health monitoring, and integration with precision farming technologies for swine farmers.


        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 ">AI-Driven Growth Prediction: Utilizes machine learning techniques for accurate prediction of swine growth trajectories.

          </li>
          <li className="p-1">liFeed Formulation Optimization: Analyzes nutritional requirements, feed composition, and growth predictions to optimize feed formulations.


          </li>
          <li className="p-1">Real-time Health Monitoring: Utilizes sensors and IoT devices for continuous monitoring of swine health, enabling early disease detection.


          </li>
          <li className="p-1">Integration with Precision Farming: Collaborates with precision farming technologies to enhance overall farm management.


          </li>
          <li className="p-1">Economic Modeling: Conducts comprehensive economic modeling and cost-benefit analysis for informed decision-making.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1">Swine Farmers</li>
          <li className="p-1">Swine Geneticists
          </li>
          <li className="p-1">Nutritionists</li>

          <li className="p-1">Agricultural Extension Services

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all ">
          <li className="p-1">Improved Productivity: Enhances swine growth, feed efficiency, and overall production outcomes through AI-optimized models.</li>
          <li className="p-1">	Resource Utilization: Optimizes feed formulations and resource utilization for sustainable and efficient swine farming..</li>
          <li className="p-1">Real-time Health Intervention: Enables early detection of health issues, facilitating timely and proactive interventions.</li>
          <li className="p-1">Economic Viability: Assess the financial impact through economic modeling, ensuring economic viability and profitability.</li>
          <li className="p-1">Knowledge Empowerment: Facilitates adoption through education programs, workshops, and training sessions for swine farmers.</li>




        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          SwineOptiGrow stands as a transformative AI tool, aligning with the project's goals to optimize swine farming practices. Its features contribute to improved productivity, resource utilization, and overall economic viability, making it an essential asset for swine farmers seeking precision and efficiency in their operations. SwineOptiGrow stands as a catalyst for innovation in the swine farming industry, fostering sustainable and economically sound practices.</p>
      </div>
      <Footer />
    </div>
  );
};
export default AhProject5;
