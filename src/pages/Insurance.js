import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Insurance = () => {
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
    navigate("/insproject1");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onInsProject2Click = useCallback(() => {
    navigate("/insproject2");
  }, [navigate]);

  const onInsProject3Click = useCallback(() => {
    navigate("/insproject3");
  }, [navigate]);

  const onInsProject4Click = useCallback(() => {
    navigate("/insproject4");
  }, [navigate]);

  const onInsProject5Click = useCallback(() => {
    navigate("/insproject5");
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
            <b className="text-29xl mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px] md:text-29xl font-bold text-white ">Insurance</b>
            <p className="mt-4 mx-[-60px] md:mx-[-130px] lg:mx-[-100px] xl:mx-[-80px] pl-10 text-13xl md:text-xl lg:text-base text-white text-justify break-all">Research in insurance spans various critical areas, reflecting the
                dynamic and complex nature of the insurance industry. One key research
                area involves risk assessment and management, exploring innovative
                ways to predict and mitigate risks in different insurance sectors.
                Understanding the impact of emerging technologies, such as Artificial
                Intelligence and blockchain, on insurance operations is another
                crucial aspect. Additionally, research can delve into customer
                behavior and preferences, aiming to enhance personalized insurance
                offerings and improve customer satisfaction. Analysing regulatory
                frameworks, especially in the context of evolving global economic
                conditions, is essential for ensuring compliance and adapting
                insurance practices to changing legal landscapes. Ultimately,
                insurance research is imperative to foster innovation, improve
                operational efficiency, and address emerging challenges in an industry
                that plays a pivotal role in managing and mitigating risks. The
                significance of insurance research lies in its potential to drive
                industry evolution, fostering resilience and adaptability. In-depth
                research informs insurance providers about emerging trends, market
                demands, and regulatory changes, allowing them to tailor products that
                meet evolving customer needs. Moreover, research aids in optimizing
                risk models and developing innovative coverage solutions, ensuring
                that insurance remains a robust and effective risk management tool. As
                the insurance landscape continues to evolve with technological
                advancements and shifts in socio-economic dynamics, ongoing research
                is essential for the industry to proactively respond to challenges,
                enhance customer experiences, and contribute to overall economic
                stability. The scope of research in insurance is vast, encompassing a
                wide range of domains that collectively contribute to the industry's
                growth, sustainability, and ability to navigate an ever-changing
                landscape.

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
                src="/Insuranceimg1.jpg"
              />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
            <h1 className="title-font mb-4 font-medium text-blue font-poppins md:w-[350px] text-29xl md:text-17xl lg:w-[500px] break-all">  Personalized Risk Assessment in Personal Insurance: Integrating
              AI for Tailored Coverage"

            </h1>
            <p className="mb-8 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all"> The research project titled "Personalized Risk Assessment in
              Personal Insurance: Integrating AI for Tailored Coverage"
              endeavors to revolutionize the landscape of personal insurance
              by integrating Artificial Intelligence (AI) to refine risk
              assessment methodologies. The study focuses on harnessing AI
              algorithms to develop personalized insurance products that
              intricately cater to the distinct needs, behaviors, and
              lifestyles of individual policyholders.

            </p>
          </div>
        </div>

        {/* 2 */}

        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center mb-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-14 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font mb-3 font-medium text-blue font-poppins text-29xl md:text-17xl break-keep "> Corporate Insurance Efficiency: A Comprehensive Study on Risk
              Mitigation and Cost Optimization
            </h1>
            <p className="mb-8 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all"> The research project titled "Corporate Insurance Efficiency: A
              Comprehensive Study on Risk Mitigation and Cost Optimization"
              endeavors to explore and enhance the efficiency of corporate
              insurance processes by delving into advanced strategies for risk
              mitigation and cost optimization. The primary focus is on
              identifying innovative approaches and leveraging cutting-edge
              technologies to improve risk management practices within
              corporations, aiming to result in more economically viable
              insurance solutions.

            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="mx-auto">
              <div className="absolute mt-[-25px] ml-[265px] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />

              <span className=" absolute rounded-lg bg-white w-[517.8px] h-[482.9px] cursor-pointer" />
              <img
                className="relative object-center rounded-xl w-[480.8px] h-[439.6px] p-3 top-4 object-fill "
                alt=""
                src="/Insuranceimg2.jpg"
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
                    Transformative Trends in Insurance Firms:</h1>
                  <p className="text-gray-600 mb-4">
                    The research project titled "Transformative Trends in Insurance Firms: Adapting to Digital Disruption and Customer-Centric Models".</p>
                  <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4 w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onInsProject3Click}>Readmore
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
                    Hospitals as Stakeholders:  </h1>
                  <p className="text-gray-600 mb-4">
                    The research project titled "Hospitals as Stakeholders: Exploring the Role and Impact of Healthcare Institutions in Insurance".</p>
                  <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4 w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onInsProject4Click}>Readmore
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
                    Ethical Dimensions of Insurance</h1>
                  <p className="text-gray-600 mb-4">
                    The research project titled "Ethical Dimensions of Insurance in Healthcare" intricately examines the ethical.</p>
                  <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4  w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onInsProject5Click}>Readmore
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

export default Insurance;
