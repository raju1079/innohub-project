import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const Project2 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">AI-Enhanced Clinical Imaging For Accurate Disease Diagnosis</b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base transform scale-120"> This research project seeks to transform the drug discovery process by leveraging the capabilities of artificial intelligence (AI). The primary objective is to accelerate pharmaceutical innovations through the development and application of AI algorithms in various stages of drug discovery. By automating and optimizing tasks such as target identification, compound screening, and predictive modelling, the research aims to expedite the discovery of novel drugs, reduce costs, and enhance the efficiency of bringing new medications to market.</p>


        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: PharmaDiscoverAI</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">  The PharmaDiscoverAI tool aims to revolutionize the drug discovery process by integrating artificial intelligence across key stages, including target identification, compound screening, and predictive modeling. It encompasses automation and optimization features to streamline pharmaceutical innovations.
        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1 ">Target Identification Acceleration: Utilize AI algorithms to expedite the identification of potential drug targets by analyzing complex biological datasets.

          </li>
          <li className="p-1">Compound Screening Optimization: Enhance efficiency in the screening of compounds by implementing machine learning models to predict the potential effectiveness and safety profiles.

          </li>
          <li className="p-1">Predictive Modeling for Drug Candidates: Employ advanced AI techniques for predictive modeling, enabling the identification of promising drug candidates with reduced development risks.

          </li>
          <li className="p-1">Data Integration and Analysis: Facilitate seamless integration and analysis of diverse biological and chemical data sources, leveraging AI for comprehensive insights.
          </li>
          <li className="p-1">
            Cost Reduction Strategies: Implement cost-saving measures through AI-driven optimization, reducing expenses associated with unsuccessful drug candidates.
          </li>
          <li className="p-1">Real-time Decision Support: Provide real-time decision support for researchers and pharmaceutical professionals, aiding in data-driven and informed choices.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Target Audience::</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">
          <li className="p-1 ">Pharmaceutical Researchers: Scientists and researchers involved in drug discovery processes.

          </li>
          <li className="p-1 ">Pharmaceutical Companies: Organizations aiming to enhance the efficiency and success rate of drug development.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 ">
          <li className="p-1">Accelerated Drug Discovery: PharmaDiscoverAI accelerates the drug discovery timeline, leading to faster identification of potential drug candidates.

          </li>

          <li className="p-1">Cost Efficiency: The tool's optimization features contribute to significant cost reductions in the drug development process.


          </li>
          <li className="p-1">Increased Success Rates: AI-driven predictions and analyses enhance the likelihood of identifying successful drug candidates, reducing the risk of failures.

          </li>
        </ul>
        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120">PharmaDiscoverAI emerges as a transformative tool in the pharmaceutical industry, leveraging AI to expedite drug discovery processes, reduce costs, and increase the overall efficiency of bringing new medications to market. By providing advanced analytics, real-time decision support, and predictive modeling, the tool addresses key challenges in the pharmaceutical research landscape, ultimately contributing to advancements in healthcare and improved patient outcomes.

        </p>

      </div>
      <Footer />
    </div>
  );
};

export default Project2;
