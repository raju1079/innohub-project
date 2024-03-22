import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const ProjectIT2 = () => {
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
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center"> Automated Code Review with Artificial Intelligence: 
          Improving Code Quality and Development Efficiency

        </b>
        <h3 className="text-13xl text-blue m-5" >Synopsis:</h3>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base break-all">
          Code Quality and Development Efficiency," seeks to revolutionize software development's code review process by integrating Artificial Intelligence (AI). With a primary goal of enhancing code quality and reducing human-intensive efforts, the project undertakes a thorough investigation into AI algorithms' capabilities for code analysis. It commences with an extensive literature review, exploring successful implementations and challenges in AI-driven code analysis, and evaluating techniques such as static code analysis, machine learning, and natural language processing.

        </p>



        <h2 className="text-29xl lg:text-17xl text-blue m-5" >AI Tool Name: CodeGuardian</h2>
        <h3 className="text-17xl text-blue m-5" >Objective:</h3>

        <p className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          CodeGuardian" is a state-of-the-art AI-powered automated code review tool designed to elevate code quality, reduce manual efforts, and streamline the software development process. Its comprehensive scope covers code quality improvement by identifying and rectifying issues, implementing AI-driven suggestions, and optimizing code structure.

        </p>

        <h3 className="text-29xl lg:text-17xl text-blue m-5" >Key Features:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1 ">Automated Code Analysis: Utilizes AI algorithms to automatically analyze code for quality, security, and adherence to coding standards.
          </li>
          <li className="p-1">
            Intelligent Suggestion Engine: Generates intelligent and context-aware suggestions for code improvements based on best practices and coding standards.
          </li>
          <li className="p-1">
            Continuous Integration Integration: Seamlessly integrates with popular continuous integration tools, ensuring that code review is an integral part of the development pipeline.
          </li>
          <li className="p-1">
            Security Vulnerability Detection: Employs AI-powered security checks to identify and flag potential security vulnerabilities in the code.
          </li>
          <li className="p-1">
            Scalable for Large Projects: Designed to scale for large codebases, providing efficient and accurate automated code review for projects of varying sizes.

          </li>
          <li className="p-1">
            User-Friendly Dashboard: Offers a user-friendly dashboard that presents actionable insights, allowing developers and teams to focus on priority areas.

          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Target Audience:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">
          <li className="p-1">Software Development Teams: Targeting development teams in various industries seeking to enhance their requirement analysis processes.</li>
          <li className="p-1">	DevOps Teams: Providing a valuable tool for DevOps teams looking to integrate automated code review seamlessly into their workflows.</li>
          <li className="p-1">	Enterprise Solutions: Offering enterprise-level solutions for organizations with complex and large-scale software projects.
          </li>
        </ul>

        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Project Impact:</h3>
        <ul className="mb-5 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all ">
          <li className="p-1">Improved Code Quality: Enhances code quality by automating the identification of issues and suggesting improvements.</li>
          <li className="p-1">Efficient Development Processes: Streamlines the code review process, leading to more efficient development cycles.</li>
          <li className="p-1">	Security Enhancement: Identifies security vulnerabilities in the code, contributing to a more secure software development lifecycle.</li>
          <li className="p-1">Time and Cost Savings: Reduces the time and costs associated with manual code review, allowing developers to focus on critical tasks.</li>



        </ul>
        <h3 className="text-29xl lg:text-17xl  text-blue m-5" >Conclusion:</h3>
        <p className="mb-[200px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base break-all">    "CodeGuardian" is positioned as a comprehensive solution to automate and improve the code review process, addressing the challenges faced by development teams. It leverages AI to augment the capabilities of developers, ensuring high-quality, secure, and efficient software development practices. The tool is not only a practical outcome of the research project but also a commercially viable product with potential widespread application across the software development industry.
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default ProjectIT2;
