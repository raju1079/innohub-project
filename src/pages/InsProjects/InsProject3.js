import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const InsProject3 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center"> Transformative Trends in Insurance Firms:
              Adapting to Digital Disruption and Customer-Centric Models
        </b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all">
        The research project titled "Transformative Trends in Insurance Firms: Adapting to Digital Disruption and Customer-Centric Models" aims to explore and analyze the evolving landscape of insurance firms in the face of digital disruption and changing customer expectations. The study delves into the strategies adopted by insurance companies to adapt their business models, incorporating technology-driven solutions and embracing customer-centric approaches. The scope of the research encompasses a comprehensive analysis of successful industry transformations, the challenges encountered by traditional insurance firms in this dynamic environment, and the strategic initiatives undertaken to remain competitive in the digital age.
           
        </p>


        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name:InsureInsight AI
        </h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
        "InsureInsight AI" focuses on providing insurance firms with an
            advanced analytical tool to navigate transformative trends by
            leveraging digital disruption and adopting customer-centric models.
            The tool aims to analyze vast amounts of data to identify industry
            shifts, customer preferences, and emerging technologies, providing
            actionable insights for strategic decision-making.
       

        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 ">Trend Analysis: Utilizes machine learning algorithms to analyze
              industry trends, digital disruption, and customer preferences,
              identifying key areas for adaptation.
           </li>
           <li className="p-1">   Customer-Centric Metrics: Measures and evaluates customer-centric
              metrics to help insurance firms align their services with evolving
              customer expectations.
              </li>
           <li className="p-1">   Technology Adoption Assessment: Assesses the adoption of emerging
              technologies within the insurance sector, providing
              recommendations for technology integration to stay competitive.
           
          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1">  The primary target audience for "InsureInsight AI" includes
                executives, decision-makers, and strategists within insurance
                firms seeking to navigate digital disruption and embrace
                customer-centric models.
              

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all ">

          <li className="p-1">The tool aims to empower insurance firms with valuable insights,
                enhancing their ability to adapt to transformative trends and
                improve overall business performance. By facilitating informed
                decision-making, "InsureInsight AI" contributes to the
                industry's resilience in the face of digital challenges and
                customer-driven transformations
              
          </li>




        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
        In conclusion, "InsureInsight AI" serves as a crucial ally for
              insurance firms looking to thrive in the digital era. Its advanced
              analytics and predictive capabilities empower organizations to
              proactively address industry shifts, ensuring they remain
              customer-centric and competitive. The tool's impact extends beyond
              immediate adaptations, fostering a culture of continuous
              improvement and strategic resilience within the evolving landscape
              of insurance.
            </p>
      </div>
      <Footer />
    </div>
  );
};


export default InsProject3;