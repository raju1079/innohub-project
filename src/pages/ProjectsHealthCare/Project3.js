import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const Project3 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">Telemedicine Transformation
          AI-Enabled Remote Patient Monitoring</b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all">  The research project, "Telemedicine Transformation: AI-Enabled Remote Patient Monitoring," focuses on integrating artificial intelligence into telemedicine for more effective remote patient care. Through AI algorithms analyzing wearable device data and health records, the aim is to enhance virtual care quality, particularly for patients with chronic conditions. The approach involves smart wearables and IoT integration, predictive analytics, AI-assisted diagnostics, patient engagement through chatbots, risk stratification, interoperability with EHR, continuous learning, and ethical considerations.</p>


        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: PharmaDiscoverAI</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">   Scope of the Tool: TeleHealthAI encompasses a comprehensive suite of AI-driven functionalities to facilitate remote patient monitoring. It covers smart wearables integration, predictive analytics, diagnostic assistance, patient engagement through chatbots, risk stratification, EHR interoperability, continuous learning, and ethical considerations.
        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 "> Real-time Monitoring: AI-enabled analysis of vital signs and health metrics from smart wearables and IoT devices for continuous, real-time patient monitoring.


          </li>
          <li className="p-1"> Predictive Health Trends: Utilize predictive analytics to identify health trends and potential risks, allowing timely intervention.


          </li>
          <li className="p-1">Predictive Modeling for Drug Candidates: Employ advanced AI techniques for predictive modeling, enabling the identification of promising drug candidates with reduced development risks.

          </li>
          <li className="p-1">   AI-assisted Diagnostics: Enhance remote diagnostics through AI analyzing medical images, symptoms, and relevant data, aiding accurate telemedicine consultations.

          </li>
          <li className="p-1">
            Chatbot-Patient Engagement: Implement AI-powered chatbots for personalized communication, education, and health monitoring, fostering improved patient adherence.</li>
          <li className="p-1">Risk Stratification: Utilize AI to stratify patients based on risk levels, prioritizing interventions for those at higher risk.
          </li>
          <li className="p-1"> EHR Interoperability: Ensure seamless information exchange by integrating AI-enabled remote patient monitoring with electronic health records.</li>
          <li className="p-1">
            Continuous Learning: Establish mechanisms for AI models to adapt and improve over time based on evolving patient data and technological advancements.
          </li>
          <li className="p-1">Real-time Decision Support: Provide real-time decision support for researchers and pharmaceutical professionals, aiding in data-driven and informed choices.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience::</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1">Healthcare Providers: Doctors, nurses, and healthcare professionals involved in telemedicine.
          </li>
          <li className="p-1">Patients: Individuals seeking remote healthcare monitoring, especially those with chronic conditions.

          </li>
          <li className="p-1">Telehealth Platforms: Organizations providing telemedicine services.
          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all ">
          <li className="p-1">	Improved Virtual Care Quality: Enhance the quality of remote patient care through AI-driven continuous monitoring and diagnostics.


          </li>
          <li className="p-1">	Enhanced Patient Engagement: Improve patient adherence and engagement through personalized interactions and education via chatbots.
          </li>
          <li className="p-1">	Risk-based Prioritization: Prioritize interventions effectively by stratifying patients based on risk levels.</li>
          <li className="p-1">Seamless Information Exchange: Facilitate comprehensive virtual consultations with EHR integration and interoperability.
          </li>
          <li className="p-1">Adaptability and Learning: Ensure the tool evolves with technological advancements and changing patient data.</li>
        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all"> TeleHealthAI emerges as a transformative solution, blending AI capabilities with telemedicine to provide advanced remote patient monitoring. By addressing ethical considerations and offering a comprehensive suite of features, the tool contributes to improved healthcare accessibility, especially for individuals with chronic conditions, fostering a positive impact on patient outcomes and healthcare efficiency.
        </p>

      </div>
      <Footer />
    </div>
  );
};

export default Project3;
