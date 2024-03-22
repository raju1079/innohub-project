import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const AhProject3 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">Automated Heat Detection in Dairy Cattle
          AI for Reproductive Management
        </b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all">
          The research project, "Automated Heat Detection in Dairy Cattle: AI for Reproductive Management," aims to enhance dairy farming practices by integrating artificial intelligence (AI) for automated heat event detection. The project involves data collection on heat patterns, identification of key indicators, development of AI models, and integration with sensor networks. A real-time alert system notifies farmers of detected heat events, and seamless integration with reproductive management software facilitates centralized data management. </p>


        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name:  HeatOptiSync
        </h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          HeatOptiSync encompasses features for AI-driven heat detection, real-time alerts, and seamless integration with reproductive management software for dairy cattle.




        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 "> AI-Driven Heat Detection: Utilizes advanced algorithms for accurate analysis of behavioral and physiological indicators.
          </li>
          <li className="p-1">
            Real-time Heat Event Alerts: Provides timely notifications to farmers through mobile applications, emails, or farm management systems.
          </li>
          <li className="p-1">Integration with Reproductive Management Software: Seamlessly integrates with existing software for enhanced decision-making and centralized data management.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1">Dairy Farmers</li>
          <li className="p-1">Veterinarians</li>
          <li className="p-1">Agricultural Extension Services</li>

          <li className="p-1">Software Developers
          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all ">
          <li className="p-1">Increased Conception Rates: Improves reproductive management, leading to increased conception rates in dairy herds.</li>
          <li className="p-1">Enhanced Data Management: Facilitates centralized data management through integration with existing software.</li>
          <li className="p-1">Continuous Improvement: Establishes a feedback loop for iterative refinement, ensuring ongoing enhancements.</li>
          <li className="p-1">Farmer Adoption: Promotes successful adoption through educational programs and farmer training sessions.</li>



        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          HeatOptiSync stands as an innovative AI tool, aligning with the project's objectives to enhance dairy reproductive management. Its features contribute to improved conception rates, streamlined data management, and continuous system refinement, fostering the adoption of AI-driven technology in dairy farming. HeatOptiSync marks a significant advancement in enhancing overall herd productivity and reproductive efficiency.
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default AhProject3;
