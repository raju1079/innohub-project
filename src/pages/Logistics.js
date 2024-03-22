import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/* import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 */



const Logistics = () => {
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

  const onGroupContainerClick = useCallback(() => {
    navigate("/logproject1");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onLogProject2Click = useCallback(() => {
    navigate("/logproject2");
  }, [navigate]);

  const onLogProject3Click = useCallback(() => {
    console.log('Button clicked!')
    navigate("/logproject3");
  }, [navigate]);

  const onLogProject4Click = useCallback(() => {
    navigate("/logproject4");
  }, [navigate]);

  const onLogProject5Click = useCallback(() => {
    navigate("/logproject5");
  }, [navigate]);


  return (
    /* Header */

    <div className="relative bg-gray xl:w-full lg:w-[1300px] md:w-[1180px] w-[749px] px-[0px] mx-full">

       <div className="absolute flex mx-auto top-0 right-0 left-0 h-[90px] overflow-hidden">
        <Header />
      </div>

      body

      {/* Title */}

      <section className="text-white flex flex-wrap  body-font md:mx-[95px] lg:mx-0">
        <div className="container px-24 py-24">
          <div className="absolute w-full top-[70px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[466px] overflow-hidden text-29xl">
            <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
            <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />
            <img
              className="absolute flex flex-col top-[0px] lg:w-auto left-[calc(50%_-_721.4px)] w-[1160.8px] h-[375.6px] object-cover md:w-auto"
              alt=""
              src="/artboard-44x-1@2x.png"
            />
          </div>


          <div className="container mx-auto pt-[350px] font-poppins">
            <div className="w-full">      
            <b className="text-29xl mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px] md:text-29xl font-bold text-white ">Logistics</b>
            <p className="mt-4 mx-[-60px] md:mx-[-130px] lg:mx-[-100px] xl:mx-[-80px] pl-10 text-13xl md:text-xl lg:text-base text-white text-justify break-all">Logistic Research is the systemic inquiry and analysis focused on improving the planning, execution, and management
          of the transportation, storage and distribution of goods and services. It aims to optimize supply chain processes, reduce costs,
          and enhance the overall efficiency of logistic operations. It enhances overall supply chain performance through the application of
          innovative strategies, technologies and methodologies.
        
            </p>
          </div>
        </div>
        </div>


        {/* contain/images */}

         <div className="container flex px-10 py-24 md:flex-row flex-col items-center"onClick={onGroupContainerClick}>
          <div className="lg:max-w-lg lg:w-1/2 md:w-2/3 w-5/6 mb-10 md:mb-0  ">
            <div className=" mx-auto " onClick={onGroupContainerClick}>
              <div className="absolute mt-[-30px] ml-[-20px] rounded-lg bg-blue w-[290.8px] h-[378.3px]" />

              <span className=" absolute rounded-lg bg-white w-[517.8px] h-[482.9px] cursor-pointer " />
              <img
                className="relative object-center rounded-xl p-3 w-[480.8px] h-[439.6px] top-4 object-fill "
                alt=""
                src="/Logisticsimg1.jpg"
              />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
            <h1 className="title-font mb-4 font-medium text-blue font-poppins md:w-[350px] text-29xl md:text-17xl lg:w-[500px] break-all"> 
                Blockchain Technology in Supply Chain

            </h1>
            <p className="mb-8 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all"> This research project investigates the application of blockchain technology in supply chain management, specifically within logistics. The focus is on enhancing transparency and traceability to improve efficiency, reduce fraud, and build trust among stakeholders. The approach involves designing a robust blockchain architecture, integrating with IoT devices for real-time data capture, ensuring traceability through provenance tracking.
              
            </p>
          </div>
        </div>

        {/* 2 */}

        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center mb-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-14 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font mb-3 font-medium text-blue font-poppins text-29xl md:text-17xl break-keep ">    Optimizing Last-Mile Delivery Routes Using Machine Learning Algorithms
            </h1>
            <p className="mb-8 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">The research project aims to revolutionize last-mile delivery operations using machine learning. By optimizing route planning, reducing delivery times, and minimizing operational costs, the study addresses critical challenges in the final leg of the supply chain. The approach includes data collection, route optimization algorithm development, dynamic real-time route adjustment, customer preference consideration, GIS integration, cost-benefit analysis, scalability testing, and an ongoing evaluation feedback loop.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="mx-auto">
              <div className="absolute mt-[-25px] ml-[265px] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />

              <span className=" absolute rounded-lg bg-white w-[517.8px] h-[482.9px] cursor-pointer" />
              <img
                className="relative object-center rounded-xl w-[480.8px] h-[439.6px] p-3 top-4 object-fill "
                alt=""
                src="/Logisticsimg2.jpg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* cards */}
      <section>
      <div className="text-gray-600 body-font overflow-hidden mt-[50px] mb-[150px]">
        <div className="container p-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-10 xl:w-1/4 lg:w-1/4 md:w-2/3 w-2/3">
              <div className=" absolute mt-[-20px] ml-[40px] rounded-lg bg-blue flex flex-col w-[230.8px] h-[260.3px] overflow-hidden " />

              <div className="relative border-2 border-gray-200 p-6 bg-white rounded-xl">
                <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 text-blue ">
                Green Logistics: Sustainable Practices.
             </h1>
                <p className="text-gray-600 mb-4">
                The "Green Logistics" research project aims to integrate sustainable practices.
              </p>
                <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4 w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onLogProject3Click}>Readmore
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>

              </div>
            </div>


            <div className="p-10 xl:w-1/4 lg:w-1/4 md:w-2/3 w-2/3">
              <div className=" absolute mt-[-20px] ml-[40px] rounded-lg bg-blue flex flex-col w-[230.8px] h-[260.3px] overflow-hidden " />

              <div className="relative border-2 border-gray-200 p-6 bg-white rounded-xl">
                <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 text-blue">
                Predictive Analytics for Demand </h1>
                <p className="text-gray-600 mb-4">
                The "Predictive Analytics for Demand Forecasting in Logistics". </p>
                <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4 w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black" onClick={onLogProject4Click}>Readmore
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>


            <div className="p-10 xl:w-1/4 lg:w-1/4 md:w-2/3 w-2/3">
              <div className=" absolute mt-[-20px] ml-[40px] rounded-lg bg-blue flex flex-col w-[230.8px] h-[260.3px] overflow-hidden " />

              <div className="relative border-2 border-gray-200 p-6 bg-white rounded-xl">
                <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 text-blue">
                Drones in Logistics: Exploring 
              </h1>
                <p className="text-gray-600 mb-4">
                The "Drones in Logistics: Exploring the Potential for Last-Mile Deliveries".
              </p>
                <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4  w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onLogProject5Click}>Readmore
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
        
      </div>
</section>


      <Footer />

    </div>

      );
};

export default Logistics;
