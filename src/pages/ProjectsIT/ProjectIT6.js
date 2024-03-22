import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const ProjectIT6 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center">Algorithmic Transparency in Hiring: Building Trust in AI-Driven Recruitment Systems

        </b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all">
          The research project titled "Algorithmic Transparency in Hiring" focuses on addressing the challenges associated with trust and fairness in AI-driven recruitment systems. The research aims to develop methodologies and tools to enhance transparency in algorithms used for candidate evaluation and hiring decisions. Through a comprehensive literature review, the project explores ethical considerations, legal frameworks, and best practices in algorithmic transparency.

        </p>



        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: HireInsight AI
        </h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          The scope of the project involves the development of an Explainable AI Dashboard for AI-driven recruitment systems, aiming to enhance transparency and fairness in hiring decisions. The dashboard will offer detailed insights into the factors influencing hiring choices, promoting a clear understanding of the decision-making process. Integration of fairness metrics and analysis tools will be a key aspect, ensuring unbiased treatment of candidates across diverse demographics. Candidate-facing transparency features will empower candidates to comprehend how the AI model assesses their qualifications, fostering transparency and trust.

        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 "> Explainable AI Dashboard: Offers an explainable AI dashboard that provides detailed insights into the factors influencing hiring decisions, emphasizing transparency in the decision-making process.
          </li>
          <li className="p-1">
            Fairness Metrics and Analysis: Integrates fairness metrics and analysis tools to identify and mitigate biases, ensuring equitable treatment of candidates across different demographics.
          </li>
          <li className="p-1">
            Candidate-Facing Transparency Features: Includes features that allow candidates to understand how the AI model evaluates their qualifications and skills, promoting transparency and building trust.
          </li>
          <li className="p-1">
            Real-time Decision Explanations: Provides real-time explanations for individual hiring decisions, allowing hiring managers to understand the rationale behind the AI-driven recommendations.
          </li>
          <li className="p-1">
            Visualizations for Stakeholders: Incorporates clear visualizations for hiring managers, HR professionals, and candidates, making it easy to interpret and communicate the results of the AI model.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1">		HR Departments and Professionals: Targeting HR departments and professionals seeking to enhance transparency and fairness in their hiring processes.
          </li>
          <li className="p-1">Recruitment Agencies: Providing a valuable tool for recruitment agencies to ensure transparent and ethical practices in candidate evaluation.
          </li>
          <li className="p-1">Enterprise-level Hiring Platforms: Offering a scalable solution for large enterprises with AI-driven hiring platforms, ensuring compliance with ethical and transparency standards.
          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all ">
          <li className="p-1">	Trust Building: Facilitates trust-building among hiring stakeholders by providing clear insights into the decision-making process of AI models.
          </li>
          <li className="p-1">Ethical Compliance: Ensures compliance with ethical hiring practices by identifying and mitigating biases, and fostering fair treatment of candidates.
          </li>
          <li className="p-1">Enhanced Communication: Improves communication between hiring managers, HR professionals, and candidates, leading to a better understanding of AI-driven decisions.
          </li>
          <li className="p-1">Reduced Legal Risks: Mitigates legal risks associated with biased hiring practices, contributing to a more compliant and accountable hiring process.
          </li>



        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          The "Algorithmic Transparency in Hiring" research project, manifested in the "HireInsight AI" tool, represents a significant stride toward creating fair, transparent, and trustworthy AI-driven recruitment systems. By emphasizing explainability, fairness, and clear communication, the tool addresses critical challenges in the adoption of AI in hiring. "HireInsight AI" is positioned not only

        </p>
      </div>
      <Footer />
    </div>
  );
};
export default ProjectIT6;
