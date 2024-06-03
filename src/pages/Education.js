import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Education = () => {
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
    navigate("/eduproject1");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/education");
  }, [navigate]);

  const onEduProject2Click = useCallback(() => {
    navigate("/eduproject2");
  }, [navigate]);

  const onEduProject3Click = useCallback(() => {
    navigate("/eduproject3");
  }, [navigate]);

  const onEduProject4Click = useCallback(() => {
    navigate("/eduproject4");
  }, [navigate]);

  const onEduProject5Click = useCallback(() => {
    navigate("/eduproject5");
  }, [navigate]);

  const onEduProject6Click = useCallback(() => {
    navigate("/eduproject6");
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
          <div className="absolute w-full top-[95px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[466px] overflow-hidden text-29xl">
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
                    <b className="text-29xl mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px] md:text-29xl font-bold text-white ">Education</b>
            <p className="mt-4 mx-[-60px] md:mx-[-130px] lg:mx-[-100px] xl:mx-[-80px] pl-10 text-13xl md:text-xl lg:text-base text-white text-justify transform scale-120">Education research is crucial for informing decisions in educational
              systems, policies, and practices. It provides empirical evidence for
              evidence-based policies, focusing on teaching methodologies and
              curriculum design to enhance student outcomes. The integration of
              Artificial Intelligence (AI) in education research has
              revolutionized traditional methodologies, offering efficiency and
              depth of analysis. AI facilitates data analytics, predictive
              modelling, and personalized learning interventions, providing
              nuanced perspectives in complex educational systems. AI tools, such
              as natural language processing and sentiment analysis, expedite
              literature reviews and uncover public sentiments in education.
              Virtual classrooms and intelligent tutoring systems, powered by AI,
              enhance observational studies and experimentation in immersive
              learning environments. Ethical considerations are paramount in the
              responsible use of AI in research practices. Education research
              addresses societal challenges like educational inequalities and
              prepares learners for a dynamic workforce. In the era of rapid
              technological advancements, education research fosters adaptability.
              Ultimately, insights gained contribute to informed citizens,
              emphasizing knowledge, critical thinking, and equitable education in
              society.
            </p>
          </div>
        </div>
        </div>


        {/* contain/images */}

        <div className="container flex px-10 py-24 md:flex-row flex-col items-center"onClick={onGroupContainerClick}>
          <div className="lg:max-w-lg lg:w-1/2 md:w-2/3 w-5/6 mb-10 md:mb-0  ">
            <div className=" mx-auto " >
              <div className="absolute mt-[-30px] ml-[-20px] rounded-lg bg-blue w-[290.8px] h-[378.3px]" />

              <span className=" absolute rounded-lg bg-white w-[517.8px] h-[482.9px] cursor-pointer " />
              <img
                className="relative object-center rounded-xl p-3 w-[480.8px] h-[439.6px] top-4 object-fill "
                alt=""
                src="/Educationimg2.png"
              />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
            <h1 className="title-font mb-4 font-medium text-blue font-poppins md:w-[350px] text-29xl md:text-17xl lg:w-[500px] transform scale-120"> AI-Enhanced Personalized Learning for Optimal Student Engagement

            </h1>
            <p className="mb-8 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120"> In this research project, we aim to leverage artificial
              intelligence (AI) to revolutionize the educational experience by
              implementing personalized learning strategies. Traditional
              one-size-fits-all educational models often struggle to
              accommodate the diverse learning styles and paces of individual
              students. Our research focuses on creating an adaptive learning
              environment powered by AI algorithms that tailor educational
              content and methods to meet the unique needs of each student.
            </p>
          </div>
        </div>

        {/* 2 */}

        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center mb-10"onClick={onEduProject2Click}>
          <div className="lg:flex-grow md:w-1/2 lg:pr-14 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font mb-3 font-medium text-blue font-poppins text-29xl md:text-17xl break-keep ">Enhancing Student Collaboration and Problem-Solving Skills
              through AI-Supported Group Learning
            </h1>
            <p className="mb-8 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">This research aims to explore how artificial intelligence can
              facilitate and enhance collaborative learning experiences. The
              project focuses on developing AI-driven tools and methodologies
              to optimize group formation, foster effective communication, and
              assess individual and collective problem-solving skills in
              collaborative educational settings.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="mx-auto">
              <div className="absolute mt-[-25px] ml-[265px] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />

              <span className=" absolute rounded-lg bg-white w-[517.8px] h-[482.9px] cursor-pointer" />
              <img
                className="relative object-center rounded-xl w-[480.8px] h-[439.6px] p-3 top-4 object-fill "
                alt=""
                src="/Educationimg1.jpeg"
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
                Affective Computing in Education</h1>
                <p className="text-gray-600 mb-4">
                This research project delves into the integration of affective computing in educational environments.</p>
                <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4 w-[120px] focus:outline-none rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black" onClick={onEduProject3Click}>Readmore
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
                  AI-Enabled Early Intervention.
                </h1>
                <p className="text-gray-600 mb-4">
                  This research focuses on developing AI algorithms for the early detection of learning disabilities in students.
                </p>
                <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4 w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black" onClick={onEduProject4Click}>Readmore
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
                Augmented Reality and AI Integration </h1>
                <p className="text-gray-600 mb-4">
                This research project explores the integration of augmented reality (AR) and (AI) .</p>
                <button className=" text-right flex items-center mt-auto text-white bg-blue border-0 py-2 px-4  w-[120px] focus:outline-none hover:bg-gray-500 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:bg-gray-500 
                hover:bg-white hover:text-black" onClick={onEduProject5Click}>Readmore
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

export default Education;