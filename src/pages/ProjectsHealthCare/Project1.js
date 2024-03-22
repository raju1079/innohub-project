import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const Project1 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">AI-Driven Precision Medicine:
          Transforming Healthcare Through Personalized Treatment Strategies</b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all"> This research project focuses on leveraging AI for precision medicine, tailoring healthcare to individual patients. It involves developing AI algorithms for genomic data analysis, predicting diagnostics for early disease detection, and optimizing treatment responses through machine learning models. The project aims to create AI-powered clinical decision support systems for informed treatment decisions and implement remote patient monitoring systems for proactive interventions. Ethical considerations, including patient privacy and education initiatives for AI understanding, are integral to the research. The goal is to revolutionize healthcare by integrating AI to enhance diagnostic accuracy, predict treatment responses, and empower both patients and healthcare professionals.</p>


        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: EduAImentor</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">  The MediGenAI tool encompasses a comprehensive scope within AI-driven precision medicine, targeting key areas such as genomic data analysis, predictive diagnostics, and treatment response optimization. It integrates seamlessly into clinical workflows, offering real-time recommendations for informed treatment decisions and supports proactive healthcare interventions through remote patient monitoring. The tool prioritizes ethical considerations, addressing patient privacy and data security, ensuring transparent and responsible AI use. It also includes a patient education interface to enhance understanding and collaboration. Designed for healthcare professionals, patients seeking personalized care, and healthcare institutions focusing on precision medicine, MediGenAI aims to revolutionize healthcare by enhancing diagnostic accuracy and empowering stakeholders for optimal and personalized medical outcomes.
        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 ">Genomic Data Analysis: Advanced AI algorithms for comprehensive analysis of genomic data, identifying genetic markers associated with diseases, treatment responses, and adverse reactions.
          </li>
          <li className="p-1">Predictive Diagnostics: Utilizes machine learning to predict disease risks through the analysis of diverse health data, supporting early disease detection and proactive interventions.


          </li>
          <li className="p-1">Treatment Response Optimization: Develops machine learning models to predict individualized treatment responses, optimizing therapy selection for improved efficacy and reduced side effects.
          </li>
          <li className="p-1">EClinical Decision Support Systems: Integrates AI into clinical workflows, providing real-time recommendations to healthcare professionals for informed treatment decisions.

          </li>
          <li className="p-1">
            Ethical Considerations Module: Ensures robust data protection protocols and transparency in AI algorithms, addressing ethical concerns related to patient privacy and responsible AI use in healthcare.
          </li>
          <li className="p-1">Remote Patient Monitoring: Implements AI-driven systems for continuous data analysis from wearable devices and sensors, facilitating proactive healthcare interventions based on real-time patient data.
          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Target Audience:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 ">Healthcare professionals, including physicians, geneticists, and clinicians.
          </li>
          <li className="p-1 ">Patients seeking personalized and advanced medical care.

          </li>
          <li className="p-1 ">Healthcare institutions and research organizations focusing on precision medicine.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all ">
          <li className="p-1">Improved diagnostic accuracy leading to early disease detection.</li>

          <li className="p-1">Optimized treatment strategies resulting in enhanced efficacy and reduced side effects.


          </li>
          <li className="p-1">Empowered healthcare professionals with AI-driven decision support.

          </li>
          <li className="p-1">Proactive healthcare interventions through continuous remote patient monitoring.
          </li>
          <li className="p-1">Increased patient engagement and collaboration through educational initiatives.

          </li>
        </ul>
        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">MediGenAI stands as a groundbreaking tool at the forefront of AI-driven precision medicine, offering a comprehensive solution for personalized treatment strategies. By seamlessly integrating into clinical workflows, providing predictive insights, and addressing ethical considerations, MediGenAI is poised to revolutionize healthcare delivery, empowering both healthcare professionals and patients in the pursuit of optimal and personalized medical care.
        </p>

      </div>
      <Footer />
    </div>
  );
};

export default Project1;
