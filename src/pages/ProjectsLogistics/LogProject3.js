import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const LogProject3 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center"> Green Logistics: Sustainable Practices and Environmental Impact Assessment</b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base transform scale-120">
          The "Green Logistics" research project aims to integrate sustainable practices into logistics, exploring eco-friendly strategies and conducting a comprehensive environmental impact assessment. The approach involves a literature review on global green logistics practices, analyzing the impact of green transportation technologies, optimizing supply chains for sustainability, conducting a life cycle assessment of logistics operations, promoting circular economy practices, measuring and reporting carbon footprints, fostering stakeholder collaboration, proposing policy recommendations, and facilitating educational outreach for industry adoption.</p>



        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: EcoLogiSense</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120"> Scope of the Tool: EcoLogiSense covers features for literature review analysis, green technology impact assessment, supply chain optimization, life cycle assessment, waste reduction strategies, carbon footprint measurement, stakeholder collaboration frameworks, policy recommendation generation, and educational outreach facilitation.

        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1 "> Literature Review Analysis: Provides insights from a global review of sustainable logistics practices.
          </li>
          <li className="p-1">
            Green Technology Impact Assessment: Evaluates the effectiveness of green transportation technologies.
          </li>
          <li className="p-1">Supply Chain Optimization: Models and optimizes processes considering sustainability factors.

          </li>
          <li className="p-1">	Life Cycle Assessment (LCA): Quantifies the environmental impact of logistics operations.
          </li>
          <li className="p-1">	Waste Reduction Strategies: Recommends practices for minimizing waste in logistics.
          </li>
          <li className="p-1"> 	Carbon Footprint Measurement: Establishes KPIs and methodologies for carbon emission tracking.
          </li>
          <li className="p-1">	Stakeholder Collaboration Frameworks: Facilitates collaborative initiatives within the logistics ecosystem.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience::</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1">Logistics Managers


          </li>
          <li className="p-1">	Sustainability Professionals

          </li>
          <li className="p-1">	Policy Makers

          </li>
          <li className="p-1">Industry Associations

          </li>
          <li className="p-1">Educational Institutions

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 ">
          <li className="p-1"> 	Sustainable Practices Adoption: Encourages the integration of green logistics practices.

          </li>
          <li className="p-1">		Environmental Impact Reduction: Mitigates the carbon footprint of logistics operations.

          </li>
          <li className="p-1">		Collaborative Ecosystem: Fosters stakeholder collaboration for sustainable logistics.

          </li>
          <li className="p-1">		Policy Advocacy: Influences policymakers toward sustainable logistics regulations.

          </li>
          <li className="p-1">		Industry Awareness: Increases knowledge and adoption of green logistics practices.
          </li>


        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">EcoLogiSense stands as a comprehensive tool facilitating the adoption of sustainable practices in logistics. Through its features, it contributes to reducing environmental impact, fostering collaboration, influencing policies, and promoting knowledge dissemination for a greener logistics ecosystem.
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default LogProject3;
