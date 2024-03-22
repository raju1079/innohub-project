import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const AnimalHusbandry = () => {
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
    navigate("/ahproject1");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/animalhusbandry");
  }, [navigate]);

  const onAhProject2Click = useCallback(() => {
    navigate("/ahproject2");
  }, [navigate]);

  const onAhProject3Click = useCallback(() => {
    navigate("/ahproject3");
  }, [navigate]);

  const onAhProject4Click = useCallback(() => {
    navigate("/ahproject4");
  }, [navigate]);

  const onAhProject5Click = useCallback(() => {
    navigate("/ahproject5");
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
            <b className="text-29xl mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px] md:text-29xl font-bold text-white ">AnimalHusbandry</b>
            <p className="mt-4 mx-[-60px] md:mx-[-130px] lg:mx-[-100px] xl:mx-[-80px] pl-10 text-13xl md:text-xl lg:text-base text-white text-justify break-all"> Animal husbandry, a vital component of agriculture, involves breeding and raising domestic animals like cattle, poultry, sheep, goats, and pigs for diverse purposes such as food production and labor.
            Key objectives include selective breeding for enhanced traits, ensuring animal health through disease prevention and veterinary care,
            and providing balanced nutrition. Livestock housing with proper ventilation and temperature control, along with effective reproduction management, contributes to the well-being of animals.
            Waste management minimizes environmental impact, and ethical practices address animal welfare, emphasizing humane treatment and stress reduction. Productivity optimization strategies are implemented for efficient production of meat, milk, eggs, and other products.
            Integration of technology, including artificial intelligence and data analytics, enhances efficiency and sustainability. Animal husbandry practices also focus on sustainable and environmentally friendly approaches to reduce ecological footprints, ensuring the long-term viability
            of agricultural systems.
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
                src="/AnimalHusbandryimg1.jpg"
              />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
            <h1 className="title-font mb-4 font-medium text-blue font-poppins md:w-[350px] text-29xl md:text-17xl lg:w-[500px] break-all">   Smart Feeding Systems: AI Optimization for Livestock Nutrition
             

            </h1>
            <p className="mb-8 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">The research project, "Smart Feeding Systems: AI Optimization for Livestock Nutrition," aims to transform livestock nutrition practices through AI integration into feeding systems. The project involves comprehensive data collection, nutritional analysis, and AI-driven optimization for individualized diets.
                  Real-time monitoring of livestock health, dynamic adjustment of diets, and precision feeding strategies will be implemented to enhance productivity.
      
            </p>
          </div>
        </div>

        {/* 2 */}

        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center mb-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-14 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font mb-3 font-medium text-blue font-poppins text-29xl md:text-17xl break-keep ">   AI-Driven Disease Prediction and Prevention in Livestock
             </h1>
            <p className="mb-8 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all"> The research project, "AI-Driven Disease Prediction and Prevention in Livestock," focuses on leveraging artificial intelligence to enhance disease prediction and prevention in livestock.
                The approach involves comprehensive data collection, feature engineering, and the development of machine learning models for early disease prediction.    
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="mx-auto">
              <div className="absolute mt-[-25px] ml-[265px] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />

              <span className=" absolute rounded-lg bg-white w-[517.8px] h-[482.9px] cursor-pointer" />
              <img
                className="relative object-center rounded-xl w-[480.8px] h-[439.6px] p-3 top-4 object-fill "
                alt=""
                src="/AnimalHusbandryimg2.jpg"
                onClick={onAhProject2Click}
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
                Automated Heat Detection in Dairy</h1>
                <p className="text-gray-600 mb-4">
                The research project, "Automated Heat Detection in Dairy Cattle: AI for Reproductive Management".
      </p>
                <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4 w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onAhProject3Click}>Readmore
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
                AI-Enhanced Precision Poultry       </h1>
                <p className="text-gray-600 mb-4">
                The research project, "Predictive Analytics for Swine Production: AI-Optimized Growth Models," aims to revolutionized.</p>
                <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4 w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black"onClick={onAhProject4Click}>Readmore
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
                Predictive Analytics for Swine Production </h1>
                <p className="text-gray-600 mb-4">
                The research project titled "Ethical Dimensions of Insurance in Healthcare" intricately examines the ethical.</p>
                <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4  w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black">Readmore
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

export default AnimalHusbandry;
