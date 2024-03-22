import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const Project5 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">  AI-Based Personalized Treatment Plans for Cancer Patients</b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all"> The research project, "Telemedicine Transformation: AI-Enabled Remote Patient Monitoring," focuses on integrating artificial intelligence into telemedicine for more effective remote patient care. Through AI algorithms analyzing wearable device data and health records, the aim is to enhance virtual care quality, particularly for patients with chronic conditions. The approach involves smart wearables and IoT integration, predictive analytics, AI-assisted diagnostics, patient engagement through chatbots, risk stratification, interoperability with EHR, continuous learning, and ethical considerations. </p>



        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: OncoCareAI</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all"> OncoCareAI spans diverse features, including genomic analysis, predictive modeling, multi-omics integration, radiomic imaging, clinical decision support, real-time monitoring, patient education, and ethical considerations in cancer treatment planning.
        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 ">	Genomic Profiling: AI-driven analysis of genomic data for personalized cancer treatment approaches.
          </li>
          <li className="p-1 ">   Predictive Modeling: Assessment of individual treatment responses for effective and less toxic therapies.
          </li>
          <li className="p-1">  Multi-Omics Integration: Comprehensive understanding of the molecular landscape through AI integration.
          </li>
          <li className="p-1"> AI-Enabled Radiomics: Quantitative imaging analysis for tumor characterization and treatment planning.
          </li>
          <li className="p-1">  Clinical Decision Support: Real-time recommendations for personalized treatment plans based on patient profiles.</li>
          <li className="p-1">  Real-Time Monitoring: AI systems for continuous monitoring, enabling adaptive treatment strategies.</li>
          <li className="p-1">  Patient-Centric Communication: AI-driven tools for patient education and personalized information delivery.
            Ethical Considerations: Strict privacy protocols, informed consent, and transparency in AI algorithm usage.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience::</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1">Oncologists and Healthcare Providers: Utilizing AI for personalized cancer treatment planning.
          </li>
          <li className="p-1">	Cancer Patients: Benefiting from individualized treatment strategies and continuous monitoring.
          </li>
          <li className="p-1">	Healthcare Institutions: Integrating AI for improved oncology practices.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all ">
          <li className="p-1">	Improved Treatment Outcomes: Personalized treatment plans enhancing efficacy and minimizing side effects.
          </li>
          <li className="p-1">	Real-Time Adjustments: AI-driven monitoring facilitating timely adaptations to treatment plans.
          </li>
          <li className="p-1">	Patient Empowerment: AI tools promoting patient understanding and involvement in treatment decisions.</li>
          <li className="p-1">	Ethical Oncology Practices: Adherence to privacy and ethical standards in AI-driven cancer treatment.

          </li>

        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">   OncoCareAI emerges as a comprehensive solution, leveraging AI to transform cancer treatment. By addressing ethical considerations and offering a diverse set of features, the tool contributes to individualized and ethically sound cancer treatment plans, ultimately improving patient outcomes and well-being in the battle against cancer.</p>
      </div>
      <Footer />
    </div>
  );
};
export default Project5;
