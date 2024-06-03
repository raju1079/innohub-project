import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
  import Footer from "../Footer";


const LogProject5 = () => {
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
          <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center"> Drones in Logistics:
            Exploring the Potential for Last-Mile Deliveries
          </b>
          <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
          <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base transform scale-120">
            The "Drones in Logistics: Exploring the Potential for Last-Mile Deliveries" research project aims to assess the feasibility and impact of integrating drone technology into the last-mile delivery process. The approach involves a comprehensive literature review, regulatory analysis, exploration of technological advancements, integration with existing logistics systems, cost-benefit analysis, customer perception assessment, environmental impact evaluation, identification of operational challenges, and anticipation of future trends.</p>



          <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: DroneOptiLog</h2>
          <h3 className="text-17xl text-blue m-5" >Objective:</h3>

          <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">DroneOptiLog encompasses features for regulatory compliance tracking, technological advancement integration, cost-benefit modeling, customer sentiment analysis, environmental impact assessment, and operational challenge mitigation.
          </p>

          <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
          <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
            <li className="p-1 "> Regulatory Compliance Tracker: Monitors and updates users on evolving drone-related regulations and ensures adherence.
            </li>
            <li className="p-1">
              Integration Dashboard: Facilitates seamless integration of drones into existing last-mile logistics systems.
            </li>
            <li className="p-1">  Cost-Benefit Calculator: Conducts a detailed economic analysis, comparing drone delivery costs with traditional methods. </li>
            <li className="p-1">Customer Sentiment Analyzer: Gathers and analyzes public sentiment regarding drone deliveries to gauge acceptance factors.</li>
            <li className="p-1">
              Environmental Impact Evaluator: Utilizes LCA methodologies to quantify and compare the ecological effects of drone and traditional deliveries.
            </li>
            <li className="p-1">  Operational Challenge Module: Identifies potential challenges and offers mitigation strategies for smooth drone operations.

            </li>
          </ul>

          <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience::</h3>
          <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
            <li className="p-1">		Logistics Executives


            </li>
            <li className="p-1">		Drone Technology Developers

            </li>
            <li className="p-1">		Regulatory Authorities

            </li>
            <li className="p-1">	Environmental Agencies

            </li>
            <li className="p-1">	Last-Mile Delivery Service Providers

            </li>

          </ul>

          <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
          <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 ">
            <li className="p-1">	Enhanced Efficiency: Reduces delivery times and optimizes last-mile logistics processes.

            </li>
            <li className="p-1">		Economic Feasibility: Provides a tool for decision-makers to assess the economic viability of implementing drone deliveries.
            </li>
            <li className="p-1">			Customer Acceptance: Offers insights into customer perceptions, aiding in the development of strategies to increase acceptance.
            </li>
            <li className="p-1">		Environmental Sustainability: Quantifies and compares the environmental impact of drone and traditional deliveries.
            </li>
            <li className="p-1">			Operational Resilience: Identifies challenges and proposes mitigation strategies for a seamless drone delivery experience.

            </li>


          </ul>
          <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
          <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">  DroneOptiLog emerges as a comprehensive tool for stakeholders in the logistics and drone technology sectors, offering insights and analytics to guide the successful integration of drones into last-mile delivery operations. Its features align with the project's objective of exploring the potential of drones in revolutionizing logistics, providing a valuable resource for informed decision-making.</p>
        </div>
        <Footer />
      </div>
    );
  };
export default LogProject5;
