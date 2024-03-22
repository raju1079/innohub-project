import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const InformationTechnology = () => {
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
    navigate("/projectit1");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/informationtechnology");
  }, [navigate]);

  const onProjectIT2Click = useCallback(() => {
    navigate("/projectit2");
  }, [navigate]);

  const onProjectIT3Click = useCallback(() => {
    navigate("/projectit3");
  }, [navigate]);

  const onProjectIT4Click = useCallback(() => {
    navigate("/projectit4");
  }, [navigate]);

  const onProjectIT5Click = useCallback(() => {
    navigate("/projectit5");
  }, [navigate]);

  const onProjectIT6Click = useCallback(() => {
    navigate("/projectit6");
  }, [navigate]);

  const onProjectIT7Click = useCallback(() => {
    navigate("/projectit7");
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
            <b className="text-29xl mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px] md:text-29xl font-bold text-white ">InformationTechnology</b>
            <p className="mt-4 mx-[-60px] md:mx-[-130px] lg:mx-[-100px] xl:mx-[-80px] pl-10 text-13xl md:text-xl lg:text-base text-white text-justify break-all">Leveraging artificial intelligence (AI) technologies in IT development and maintenance processes aims to streamline tasks, enhance efficiency, and reduce manual effort.
                AI tools are applied across various aspects of the development lifecycle. In requirements analysis and planning, natural language processing (NLP) aids in understanding project needs,
                while AI algorithms automate project planning by analysing historical data and dependencies. For code development and review, tools like OpenAI Codex generate code snippets and AI-driven static code analysis automates review processes.
                In testing, AI algorithms automate test case generation and dynamically adapt test suites, reducing maintenance efforts. Automated bug detection analyses code changes and logs, prioritizing potential issues, with predictive maintenance anticipating problems
                proactively.
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
                src="InformationTechimg1.jpg"
              />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
            <h1 className="title-font mb-4 font-medium text-blue font-poppins md:w-[350px] text-29xl md:text-17xl lg:w-[500px] break-all">  AI-Powered Requirement Analysis for Software Development: A Comparative Study

            </h1>
            <p className="mb-8 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">  In the rapidly evolving landscape of software development, this research focuses on the crucial role of accurate and efficient project requirement analysis in ensuring project success. The primary objective is to explore the integration of Artificial Intelligence (AI) in the requirement analysis phase, specifically comparing AI-powered methodologies against traditional approaches.

            </p>
          </div>
        </div>

        {/* 2 */}

        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center mb-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-14 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font mb-3 font-medium text-blue font-poppins text-29xl md:text-17xl break-keep ">Automated Code Review with Artificial Intelligence: Improving Code Quality and Development Efficiency
            </h1>
            <p className="mb-8 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all"> Code Quality and Development Efficiency," seeks to revolutionize software development's code review process by integrating Artificial Intelligence (AI). With a primary goal of enhancing code quality and reducing human-intensive efforts, the project undertakes a thorough investigation into AI algorithms' capabilities for code analysis. It commences with an extensive literature review, exploring successful implementations and challenges in AI-driven code analysis, and evaluating techniques such as static code analysis, machine learning, and natural language processing.

            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="mx-auto">
              <div className="absolute mt-[-25px] ml-[265px] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />

              <span className=" absolute rounded-lg bg-white w-[517.8px] h-[482.9px] cursor-pointer" />
              <img
                className="relative object-center rounded-xl w-[480.8px] h-[439.6px] p-3 top-4 object-fill "
                alt=""
                src="/InformationTechimg2.avif"
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
                    Predictive Maintenance :</h1>
                  <p className="text-gray-600 mb-4">
                    The "Predictive Maintenance in Software Development" research project aims to explore the integration of AI to anticipate.</p>
                  <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4 w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onProjectIT3Click}>Readmore
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
                    AI-Driven Testing Strategies:</h1>
                  <p className="text-gray-600 mb-4">
                    The research project titled "AI-Driven Testing Strategies" aims to transform software testing by integrating (AI)</p>
                  <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4 w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onProjectIT4Click}>Readmore
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
                    AI-Driven Documentation:</h1>
                  <p className="text-gray-600 mb-4">
                    The research project titled "AI-Driven Documentation and Knowledge Management".</p>
                  <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4  w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onProjectIT5Click}>Readmore
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-10 xl:w-1/4 lg:w-1/4 lg:mx-[120px] md:w-2/3 w-2/3 ">
                <div className=" absolute mt-[-20px] ml-[40px] rounded-lg bg-blue flex flex-col w-[230.8px] h-[260.3px] overflow-hidden " />

                <div className="relative border-2 border-gray-200 p-6 bg-white rounded-xl">
                  <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 text-blue">
                    Algorithmic Transparency:</h1>
                  <p className="text-gray-600 mb-4">
                    The research project titled "Algorithmic Transparency in Hiring" focuses on addressing .</p>
                  <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4  w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onProjectIT6Click}>Readmore
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
                    AI-Enhanced Job Interviews: </h1>
                  <p className="text-gray-600 mb-4">
                  In the rapidly evolving landscape of software development, this research focuses on the crucial role.</p>
                  <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4  w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onProjectIT7Click}>Readmore
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

export default InformationTechnology;
