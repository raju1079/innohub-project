import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const LogProject1 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">  Optimizing Last-Mile Delivery Routes Using Machine Learning Algorithms</b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all"> BlockLogisticsAI encompasses features for robust blockchain architecture, IoT integration, traceability and provenance, smart contract automation, secure data sharing, interoperability, real-world pilot implementations, regulatory compliance, and educational outreach.
        </p>



        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: OptiRouteML</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all"> OptiRouteML encompasses features for data integration, route optimization, real-time adjustments, customer preference consideration, GIS integration, cost-benefit analysis, scalability testing, and continuous evaluation.

        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 "> GIS Integration: Enhance route planning with spatial analysis and visualization using GIS.
          </li>
          <li className="p-1">
            Data Integration: Gather and integrate diverse datasets for accurate algorithmic predictions.
          </li>
          <li className="p-1">
            Route Optimization: Utilize supervised and unsupervised learning for efficient route planning.

          </li>
          <li className="p-1">
            Real-time Adjustments: Implement dynamic algorithms responsive to live data feeds and external conditions.
          </li>
          <li className="p-1">
            Customer Preferences: Consider customer preferences, delivery windows, and special instructions for personalized deliveries.
          </li>
          <li className="p-1">
            Cost-Benefit Analysis: Conduct comprehensive assessments considering fuel costs, maintenance, and labor expenses.
          </li>
          <li className="p-1">
            Evaluation Feedback Loop: Continuous assessment and refinement based on route efficiency, delivery times, and customer satisfaction.

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
          <li className="p-1"> Operational Efficiency: Optimized routes leading to reduced delivery times and operational costs.</li>
          <li className="p-1">Customer Satisfaction: Personalized deliveries aligning with customer preferences.</li>
          <li className="p-1">Cost Reduction: Improved resource allocation and fuel efficiency contributing to overall cost reduction.</li>
          <li className="p-1"> Scalable Solution: Applicable across various delivery scenarios and environments.</li>
          <li className="p-1">Continuous Improvement: Ongoing evaluation and feedback loop ensuring adaptability and refinement.

          </li>

        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">      OptiRouteML presents a transformative solution for last-mile delivery, leveraging machine learning to enhance efficiency, reduce costs, and improve customer satisfaction. By addressing key challenges
          and ensuring scalability, the tool contributes to the evolution of last-mile delivery operations in the modern supply chain landscape.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default LogProject1;
