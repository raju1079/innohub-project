import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const AgrProject4 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">AI-Based Soil Health Assessment for Sustainable Agriculture

        </b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base transform scale-120">
          The research project, "AI for Soil Health Assessment in Sustainable Agriculture," aims to leverage artificial intelligence (AI) to provide accurate assessments of soil health for sustainable farming. The approach includes an extensive literature review, data collection and integration strategies, development of AI models, and exploration of applications in predicting soil nutrient levels, moisture content, disease identification, and fertilizer optimization. The project addresses interpretability, integration with precision agriculture, validation, and explores future trends. The goal is to empower farmers with AI-driven insights for informed decision-making toward resource-efficient and sustainable agricultural practices.</p>



        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: SoilIntel Pro
        </h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120"> SoilIntel Pro covers a comprehensive suite of AI-driven features for soil health assessment, catering to various aspects of sustainable agriculture.


        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1 ">Multi-Parameter Prediction: Predicts soil health indicators, including nutrient levels, moisture content, and disease susceptibility.
          </li>
          <li className="p-1">
            Real-time Recommendations: Offers real-time suggestions for soil amendments, fertilization, and irrigation practices based on AI analysis.
          </li>
          <li className="p-1">
            Interpretability Dashboard: Provides a user-friendly interface for farmers to interpret and understand AI-driven recommendations.
          </li>
          <li className="p-1">Integration with Precision Agriculture: Seamlessly integrates with precision agriculture systems for targeted and efficient farming practices.
          </li>
          <li className="p-1">  Validation Module: Includes robust validation methodologies to ensure the accuracy and reliability of AI-driven soil health assessments.
          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1">Farmers and Agronomists</li>

          <li className="p-1">Agricultural Researchers</li>
          <li className="p-1">Precision Agriculture Technology Develope

          </li>

          <li className="p-1">Environmental Agencies
          </li>

        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 ">
          <li className="p-1">Resource Efficiency: Optimizes resource management through AI-driven recommendations, contributing to sustainable agriculture.
          </li>
          <li className="p-1">Increased Crop Productivity: Enhances soil health, leading to improved crop productivity and yield.</li>
          <li className="p-1">User Adoption: Facilitates farmer adoption through an interpretable and user-friendly AI tool.</li>
          <li className="p-1">Environmental Sustainability: Reduces environmental impact through optimized fertilizer and irrigation practices.</li>
          <li className="p-1">Future-Ready Agriculture: Paves the way for future trends and innovations in AI-driven soil health assessment.</li>


        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          SoilIntel Pro emerges as a cutting-edge tool, aligning with the research project's goals by offering a holistic solution for AI-driven soil health assessment. Its features empower farmers with actionable insights, fostering sustainable agriculture practices and providing a foundation for future advancements in the field.

        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AgrProject4;
