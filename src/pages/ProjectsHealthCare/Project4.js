import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const Project4 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center"> AI-Assisted Mental Health Diagnosis and Intervention</b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base transform scale-120">   The research project, "Telemedicine Transformation: AI-Enabled Remote Patient Monitoring," focuses on integrating artificial intelligence into telemedicine for more effective remote patient care. Through AI algorithms analyzing wearable device data and health records, the aim is to enhance virtual care quality, particularly for patients with chronic conditions. The approach involves smart wearables and IoT integration, predictive analytics, AI-assisted diagnostics, patient engagement through chatbots, risk stratification, interoperability with EHR, continuous learning, and ethical considerations.            </p>


        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name:  MindWellAI</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">  MindWellAI spans a range of AI-driven features, covering sentiment analysis, behavioral analytics, predictive modeling, diagnostic imaging, virtual assistants, personalized treatment plans, continuous monitoring, and ethical considerations in mental health care.
        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1 ">	Sentiment Analysis: Utilize NLP for analyzing language complexity, sentiment, and emotional tone in written or verbal communication, aiding early detection of mental health concerns.
          </li>
          <li className="p-1">
            Behavioral Analytics: Employ AI to analyze digital biomarkers, identifying behavioral changes associated with mental health conditions.
          </li>
          <li className="p-1"> Predictive Modeling: Develop risk prediction models using diverse data sources to assess an individual's susceptibility to mental health challenges, allowing for proactive interventions.

          </li>
          <li className="p-1"> Diagnostic Imaging: Implement deep learning models for the analysis of neuroimaging data, identifying patterns associated with various mental health disorders.

          </li>

          <li className="p-1"> Virtual Mental Health Assistants: AI-powered virtual assistants providing real-time support, information, and coping strategies based on individual needs.

          </li>
          <li className="p-1">
            Personalized Treatment Plans: Develop AI algorithms recommending personalized treatment plans based on individual mental health assessments, treatment history, and preferences.
          </li>
          <li className="p-1">Continuous Monitoring: Implement AI systems for continuous monitoring of mental health indicators, providing real-time feedback to individuals and healthcare providers.
          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience::</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1">Healthcare Providers: Mental health professionals utilizing AI for enhanced diagnostics and treatment planning.
          </li>
          <li className="p-1">Individuals: Those seeking accessible and personalized mental health support.

          </li>
          <li className="p-1">Mental Health Institutions: Organizations incorporating AI for improved mental health care.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 ">
          <li className="p-1">		Enhanced Diagnostics: Improved accuracy in detecting mental health concerns through sentiment analysis and digital biomarkers.
          </li>
          <li className="p-1">		Personalized Interventions: Tailored treatment plans based on AI recommendations, improving patient outcomes.
          </li>
          <li className="p-1">		Real-time Support: Virtual mental health assistants providing immediate support and coping strategies.</li>
          <li>	Continuous Monitoring: AI systems aiding in continuous mental health monitoring, facilitating timely interventions.
          </li>

        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">  MindWellAI emerges as a comprehensive solution, leveraging AI to transform mental health care. By addressing ethical considerations and offering a diverse set of features, the tool contributes to the early detection, personalized treatment, and ongoing support for individuals with mental health challenges, ultimately fostering a positive impact on mental health outcomes</p>

      </div>
      <Footer />
    </div>
  );
};

export default Project4;
