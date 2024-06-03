import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const AgrProject2 = () => {
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
          The research project, "AI-Driven Crop Monitoring and Disease Detection in Smart Farming," focuses on leveraging artificial intelligence (AI) to enhance crop monitoring and enable early detection of diseases in smart farming systems. The primary goal is to develop advanced AI tools that can analyze sensor data, satellite imagery, and other sources to provide real-time insights into crop health. This research aims to empower farmers with proactive measures, minimizing crop losses and optimizing agricultural practices.
        </p>



        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: CropAI Guardian</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">CropAI Guardian covers the entire spectrum of crop monitoring and disease detection, integrating AI algorithms with diverse data sources such as sensors, satellite imagery, and historical data.


        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1 "> Real-time Monitoring: Continuous analysis of crop conditions through AI-powered algorithms.

          </li>
          <li className="p-1">
            Disease Identification: Early detection of diseases using machine learning models.

          </li>
          <li className="p-1">
            Sensor Fusion: Integration of data from multiple sensors for comprehensive insights.

          </li>
          <li className="p-1">
            Satellite Image Analysis: Utilization of satellite imagery for large-scale crop assessment.

          </li>
          <li className="p-1">
            Predictive Analytics: Forecasting potential disease outbreaks based on historical and real-time data.


          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience::</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1">Farmers and Agricultural Practitioners
          </li>
          <li className="p-1">Agricultural Technology Developers
          </li>
          <li className="p-1">Precision Agriculture Consultants</li>
          <li className="p-1">Research Institutions in Agriculture
          </li>

        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 ">
          <li className="p-1">Early Disease Detection: CropAI Guardian minimizes crop losses through early disease identification.</li>
          <li className="p-1">Optimized Resource Allocation: Real-time monitoring allows for precise resource allocation, minimizing waste.</li>
          <li className="p-1">Increased Yield: Proactive measures based on AI insights contribute to higher crop yields.</li>
          <li className="p-1">Sustainable Farming: By reducing the need for excessive pesticide use, the tool promotes environmentally sustainable farming practices.</li>



        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">   CropAI Guardian emerges as a pivotal tool in smart farming, aligning with the project's goals of efficient crop monitoring and disease detection. Its real-time insights and predictive capabilities offer a significant impact on agriculture, empowering farmers with the tools needed for proactive and sustainable farming practices.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AgrProject2;
