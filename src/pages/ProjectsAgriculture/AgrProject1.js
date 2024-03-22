import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const AgrProject1 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center"> Drones in Logistics:
          Exploring the Potential for Last-Mile Deliveries
        </b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all">
          This research project focuses on leveraging AI for precision medicine, tailoring healthcare to individual patients. It involves developing AI algorithms for genomic data analysis, predicting diagnostics for early disease detection, and optimizing treatment responses through machine learning models. The project aims to create AI-powered clinical decision support systems for informed treatment decisions and implement remote patient monitoring systems for proactive interventions. Ethical considerations, including patient privacy and education initiatives for AI understanding, are integral to the research. The goal is to revolutionize healthcare by integrating AI to enhance diagnostic accuracy, predict treatment responses, and empower both patients and healthcare professionals.
        </p>



        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: AgriOptiAI</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">AgriOptiAI covers the entire precision agriculture spectrum, providing AI-powered solutions for crop monitoring, decision support, input optimization, IoT integration, data security, and economic-environmental impact assessment.

        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 ">  Crop Health Analytics

          </li>
          <li className="p-1">  Predictive Modeling for Yield and Disease


          </li>
          <li className="p-1">
            AI-Driven Decision Support


          </li>
          <li className="p-1">
            Input Optimization Algorithms


          </li>
          <li className="p-1">
            IoT Integration Hub


          </li>
          <li className="p-1">
            Robotic Farming Intelligence

          </li>
          <li className="p-1">
            Secure Data Management


          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience::</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1">Farmers and Agricultural Practitioners
          </li>
          <li className="p-1">Agricultural Technology Developers
          </li>
          <li className="p-1">Policy Makers in Agriculture
          </li>
          <li className="p-1">Environmental Agencies
          </li>
          <li className="p-1">Research Institutions in Agriculture
          </li>

        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all ">
          <li className="p-1">Resource Efficiency: AgriOptiAI enhances resource efficiency, optimizing water, fertilizers, and pesticides.
          </li>
          <li className="p-1">Yield Improvement: Predictive modeling contributes to better crop yield forecasts and disease prevention.
          </li>
          <li className="p-1">Sustainability: The tool assesses economic-environmental impacts, promoting sustainable farming practices.
          </li>
          <li className="p-1">Labor Efficiency: Integration with farm robotics enhances labor efficiency in tasks like planting and harvesting.
          </li>




        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">  AgriOptiAI emerges as a comprehensive AI tool, promising transformative impacts on precision agriculture. It aligns with the project's goals, offering practical solutions for optimal resource management, sustainability, and increased efficiency in farming practices.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AgrProject1;
