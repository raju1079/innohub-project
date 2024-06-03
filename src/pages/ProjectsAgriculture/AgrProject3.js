import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const AgrProject3 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">AI-Driven Crop Monitoring and Disease Detection in Smart Farming
        </b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base transform scale-120">
          The research project, "Machine Learning for Crop Yield Prediction: A Comprehensive Analysis," aims to delve into the application of machine learning for accurate and reliable crop yield predictions. The comprehensive approach includes a literature review, data collection and preprocessing, model selection, validation, and addressing spatial and temporal dynamics. The project explores uncertainty analysis, interpretability, scalability, and integration with precision agriculture. Stakeholder engagement and adoption strategies will be investigated to ensure the practical applicability of the findings.      </p>



        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: YieldPredict Pro</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120"> YieldPredict Pro covers all aspects of machine learning-based crop yield prediction, emphasizing a holistic understanding of methodologies and challenges.


        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1 "> Multi-Model Comparison: Allows farmers to compare and choose from various machine learning models for crop yield prediction.
          </li>
          <li className="p-1">
            Spatial-Temporal Insights: Provides detailed analysis considering geographical variations, climate changes, and seasonal patterns.
          </li>
          <li className="p-1">
            Uncertainty Quantification: Incorporates methods for assessing and visualizing uncertainty in crop yield predictions.
          </li>
          <li className="p-1">
            Explainable AI: Ensures model interpretability through feature importance analysis and explainability techniques.
          </li>
          <li className="p-1">
            Scalability Module: Enables adaptation to diverse crops, regions, and agricultural practices for widespread usability.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1">Agricultural Researchers</li>
          <li className="p-1">Data Scientists in Agriculture

          </li>
          <li className="p-1">Farmers and Agronomists</li>

          <li className="p-1">Agricultural Technology Developers
          </li>

        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 ">
          <li className="p-1">Precision Agriculture Integration: Optimizes resource management through the integration of machine learning predictions into precision agriculture practices.

          </li>
          <li className="p-1">Increased Crop Yields: Empowers farmers with accurate predictions, contributing to enhanced decision-making and increased yields.</li>
          <li className="p-1">Scalable Solutions: Provides adaptable models suitable for different crops, regions, and agricultural environments.</li>
          <li className="p-1">Sustainable Farming: By reducing the need for excessive pesticide use, the tool promotes environmentally sustainable farming practices.</li>
          <li className="p-1">Stakeholder Empowerment: Ensures effective communication and education, fostering stakeholder engagement and facilitating the adoption of machine learning in agriculture.</li>




        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          YieldPredict Pro emerges as a versatile tool, aligning with the research project's goals by offering a comprehensive analysis of machine learning for crop yield prediction. Its features empower stakeholders with actionable insights, emphasizing scalability and practical adoption in real-world agricultural scenarios.

        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AgrProject3;
