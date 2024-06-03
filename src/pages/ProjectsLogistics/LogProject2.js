import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const LogProject2 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">  Optimizing Last-Mile Delivery Routes Using Machine Learning Algorithms</b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base transform scale-120">  This research project investigates the application of blockchain technology in supply chain management, specifically within logistics. The focus is on enhancing transparency and traceability to improve efficiency, reduce fraud, and build trust among stakeholders. The approach involves designing a robust blockchain architecture, integrating with IoT devices for real-time data capture, ensuring traceability through provenance tracking, implementing smart contracts for automated processes.</p>



        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: BlockLogisticsAI</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">BlockLogisticsAI encompasses features for robust blockchain architecture, IoT integration, traceability and provenance, smart contract automation, secure data sharing, interoperability, real-world pilot implementations, regulatory compliance, and educational outreach.

        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1 "> 	Robust Blockchain Architecture: Ensures scalability, security, and interoperability.
          </li>
          <li className="p-1">IoT Integration: Captures real-time data from the physical supply chain for transparency.

          </li>
          <li className="p-1">Traceability and Provenance: Records product movements and ensures authenticity.


          </li>
          <li className="p-1">Smart Contracts Automation: Streamlines processes and enforces contractual agreements.

          </li>
          <li className="p-1">Secure Data Sharing: Facilitates transparent collaboration among stakeholders.

          </li>
          <li className="p-1">Interoperability: Seamless integration with existing supply chain management systems.

          </li>
          <li className="p-1">Real-World Pilot Implementations: Practical assessments of blockchain feasibility in specific supply chain segments.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience::</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1"> Supply Chain Managers: Seeking transparency, traceability, and efficiency improvements.</li>
          <li className="p-1">	Logistics Companies: Enhancing operational integrity and reducing fraud in logistics.
          </li>
          <li className="p-1">	Regulatory Bodies: Establishing standards for blockchain implementation in logistics.


          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 ">
          <li className="p-1"> Enhanced Efficiency: Improved transparency leading to streamlined logistics processes.

          </li>
          <li className="p-1">	Reduced Fraud: Blockchain's immutability reduces the risk of fraudulent activities.
          </li>
          <li className="p-1">	Increased Trust: Transparent and traceable supply chain builds trust among stakeholders.

          </li>
          <li className="p-1">	Interoperability: Seamless integration with existing systems encourages widespread adoption.

          </li>
          <li className="p-1">	Educational Outreach: Increased awareness and understanding of blockchain benefits.</li>


        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">BlockLogisticsAI presents a comprehensive solution for enhancing transparency and traceability in supply chain logistics through blockchain technology. By addressing key challenges and ensuring practical feasibility through pilot implementations, the tool contributes to the evolution of transparent and trustworthy supply chain practices.

        </p>
      </div>
      <Footer />
    </div>
  );
};

export default LogProject2;
