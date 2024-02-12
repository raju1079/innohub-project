import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const EduProject1 = () => {
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
    <div className="xl:w-full relative bg-gray h-[3148px] overflow-hidden text-left text-xl text-cold-grey-white font-poppins
    w-[1207px] flex flex-col  items-start justify-start py-0 px-5">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[90px] overflow-hidden">
        <img
          className="absolute h-[80.56%] top-[18.22%] bottom-[31.22%] left-[calc(48%_-_596.2px)] max-h-full w-[248.4px] cursor-pointer"
          alt=""
          src="/poplogo.svg"
          onClick={onGroupClick}
        />
        <div className="absolute top-[30px] left-[calc(50%_-_111px)] w-[694px] flex flex-row items-center justify-between">
          <div
            className="relative capitalize font-medium cursor-pointer"
            onClick={onResearchAreaTextClick}
          >
            Research area
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer"
          //onClick={onProjectsTextClick}
          >
            Collabrations
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer"
          //onClick={onProjectsTextClick}
          >
            Blogs
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About us
          </div>
         {/*  <div className="w-[110px] relative rounded-xl bg-cold-grey-white h-7 overflow-hidden shrink-0 text-3xl text-blue">
            <div className="absolute top-[calc(54%_-_18px)] left-[calc(56%_-_44px)] capitalize font-semibold ">
              Sign In
            </div>
          </div> */}
        </div>
      </div>
      <div className="absolute w-full top-[98px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[414px] overflow-hidden">
        <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,_#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
        <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />
        <img
          className="absolute top-[0px] left-[calc(50%_-_721.4px)] w-[1442.8px] h-[375.6px] object-cover"
          alt=""
          src="/artboard-44x-1@2x.png" />
      </div>
      <div className="absolute w-full top-[520px] right-[0px] left-[0px] h-[2682px] overflow-hidden text-base text-blue">
        <div className="absolute top-[68.6px] left-[calc(50%_-_609.7px)] w-[1219.4px] h-[2544.8px]">
          {/*           <div className="absolute top-[159px] left-[calc(50%_-_609.7px)] rounded-8xs bg-gainsboro-200 w-[1195.4px] h-[471.3px]" />
     */}          <div className="absolute top-[828.4px] left-[calc(50%_-_609.7px)] leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[114.6px] text-justify">
            The primary goal of this project is to develop and implement an
            artificial intelligence-based tool, EduAImentor, that enhances
            personalized learning experiences for students, thereby optimizing
            their engagement in educational settings. The tool aims to cater to
            the diverse needs of both educators and students, offering adaptive
            learning paths, real-time feedback, and data-driven insights to
            improve overall academic outcomes.
          </div>

          <div className="absolute top-[66.4px] left-[calc(50%_-_609.7px)] text-13xl leading-[140%] capitalize font-semibold inline-block w-[803px] h-[31.6px]">
            Synopsis:
          </div>
          <div className="absolute top-[700.3px] left-[calc(50%_-_609.7px)] text-13xl leading-[140%] capitalize font-semibold">
            AI Tool Name: EduAImentor
          </div>
          <div className="absolute top-[775.6px] left-[calc(50%_-_609.7px)] text-5xl leading-[140%] capitalize font-semibold">
            Objective:
          </div>
          <div className="absolute top-[932.5px] left-[calc(50%_-_609.7px)] text-5xl leading-[140%] capitalize font-semibold">
            Key Features:
          </div>
          <div className="absolute top-[1000.9px] left-[calc(50%_-_609.7px)] leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[432.8px] text-justify ">
            <p className="m-0 ">
               Adaptive Learning Paths: EduAImentor will analyze individual
              student learning styles, preferences, and performance data to
              dynamically adapt learning paths. This ensures that each student
              receives a customized curriculum that aligns with their strengths,
              weaknesses, and pace of learning.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 ">
               Real-time Feedback Mechanism: The tool will provide instant
              feedback on assessments, assignments, and learning activities,
              fostering a responsive learning environment. Educators can use
              this feedback to make timely interventions, addressing individual
              student needs.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0" >
               Content Personalization: EduAImentor will curate and recommend
              personalized learning materials based on each student's progress,
              interests, and preferred learning modalities. This includes
              interactive multimedia content, quizzes, and supplementary
              resources.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0" >
               Engagement Analytics: Robust analytics will track student
              engagement levels, identifying patterns and areas of improvement.
              This data will be valuable for educators to refine their teaching
              methods and for students to enhance their self-awareness and
              motivation.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0" >
               Collaborative Learning Spaces: EduAImentor will facilitate
              collaborative learning experiences by creating virtual spaces
              where students can work together on projects, discuss topics, and
              share resources. This promotes a sense of community and
              peer-to-peer learning.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0" >
               Integration with Existing Learning Platforms: The tool will
              seamlessly integrate with popular learning management systems
              (LMS) and education platforms, ensuring a smooth adoption process
              for educational institutions.
            </p>
          </div>
          <div className="absolute top-[1470.9px] left-[calc(50%_-_609.7px)] text-5xl leading-[140%] capitalize font-semibold">
            Project Impact:
          </div>
          <div className="absolute top-[1508.4px] left-[calc(50%_-_609.7px)] leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[282px] text-justify">
            <ul className="list-disc pl-6" >
              <li>Improved Learning Outcomes: Personalized learning experiences will lead to improved academic performance and a deeper understanding of subjects among students.</li>
              <li>Enhanced Educator Efficiency: EduAImentor will assist educators in tailoring their teaching strategies, saving time on manual assessment, and enabling more targeted interventions.</li>
              <li>Increased Student Engagement: The adaptive and interactive nature of EduAImentor will boost student motivation and engagement in the learning process.</li>
              <li>Data-Driven Decision Making: Institutions will benefit from valuable insights derived from EduAImentor's analytics, guiding informed decisions on curriculum design and teaching methodologies.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="absolute top-[1750.9px] left-[calc(50%_-_609.7px)] text-5xl leading-[140%] capitalize font-semibold">
            Conclusion:
          </div>
          <div className="absolute top-[1808.4px] left-[calc(50%_-_609.7px)] leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[254px] text-justify">
            <p className="m-0">
              The AI-enhanced personalized learning tool, EduAImentor, has the potential to revolutionize education by providing a tailored and engaging learning experience for students. Its multifaceted features cater to the needs of both educators and students, contributing to improved learning outcomes and a more dynamic and responsive educational environment.
            </p>
          </div>

          <div className="absolute top-[-80px] left-[calc(50%_-_609.7px)] text-29xl leading-[140%] font-semibold-350 inline-block w-[1219.4px]">
            AI-Enhanced Personalized Learning for Optimal Student Engagement
          </div>
          <div className="absolute top-[144.2px] left-[calc(50%_-_609.7px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[518.6px] text-justify">
            <p className="m-0">
              In this research project, we aim to leverage artificial
              intelligence (AI) to revolutionize the educational experience by
              implementing personalized learning strategies. Traditional
              one-size-fits-all educational models often struggle to accommodate
              the diverse learning styles and paces of individual students. Our
              research focuses on creating an adaptive learning environment
              powered by AI algorithms that tailor educational content and
              methods to meet the unique needs of each student.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              In this comprehensive AI-driven educational initiative, algorithms
              are developed for student profiling, utilizing data from
              assessments, quizzes, and interactions with educational content.
              Natural Language Processing (NLP) is employed to analyze written
              responses, providing insights into each student's learning
              preferences, strengths, and areas of improvement. The initiative
              progresses to curriculum customization, where an adaptive
              curriculum is dynamically adjusted based on individual student
              progress and feedback. Machine learning models predict the
              effectiveness of teaching materials, and reinforcement learning
              optimizes content delivery in response to continuous assessment
              results.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Engagement monitoring tools driven by AI are introduced to enhance
              student participation in online and offline learning activities.
              Computer vision analyzes facial expressions and body language,
              while sentiment analysis on written responses gauges emotional
              engagement. Personalized gamification elements are implemented to
              motivate and reward student participation. A real-time feedback
              mechanism is established between AI, educators, and students,
              incorporating NLP algorithms for teacher feedback analysis,
              sentiment analysis for emotional tone understanding, and an
              adaptive feedback mechanism for constructive guidance.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Ethical considerations are addressed with a focus on data privacy,
              bias mitigation, and transparency in AI-driven education. Strict
              data anonymization protocols are implemented, algorithms are
              regularly audited for fairness, and transparent communication
              channels are established with students, educators, and
              stakeholders. Lastly, a long-term impact assessment is proposed to
              evaluate the effects of AI-enhanced personalized learning on
              student academic performance and well-being. This involves
              conducting longitudinal studies to track progress over multiple
              academic years, analyzing standardized test scores, retention
              rates, and self-reported well-being metrics.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[2729px] left-[calc(50%_-_720px)] bg-blue w-[1440px] h-[420px] text-sm font-roboto">
        <b className="absolute top-[20px] left-[150px] text-17xl uppercase flex text-yellow-50 text-center items-center justify-center w-[202px] h-[68px]">
          Subscribe
        </b>
        <div className="absolute top-[68px] left-[619px] text-base inline-block w-[672px]">{`Subscribe to stay tuned for new web design and latest updates. Let's do it! `}</div>
        <div className="absolute top-[20px] left-[619px] w-[672px] h-10 text-base text-cold-grey-30">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cold-grey-10 shadow-[0px_6px_12px_-6px_rgba(255,_255,_255,_0.12),_0px_8px_24px_-4px_rgba(255,_255,_255,_0.08)]" />
          <div className="absolute w-[70.86%] top-[30%] left-[2.29%] inline-block">
            Enter your email Address
          </div>
          <div className="absolute h-4/5 w-[26.22%] top-[10%] right-[0.68%] bottom-[10%] left-[73.1%] bg-midnightblue flex flex-row items-center justify-center py-[5px] px-[26px] box-border text-center text-cold-grey-white">
            <div className="relative">Subscribe</div>
          </div>
        </div>
        <div className="absolute top-[272px] left-[221px] text-center">
          Follow us
        </div>
        <div className="absolute top-[296px] left-[166px] w-[170.7px] h-4">
          <img
            className="absolute top-[0.7px] left-[0px] w-2 h-[14.7px]"
            alt=""
            src="/social.svg" />
          <img
            className="absolute top-[0px] left-[18.7px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg" />
          <img
            className="absolute top-[0.7px] left-[45.3px] w-5 h-[14.7px]"
            alt=""
            src="/social.svg" />
          <img
            className="absolute top-[0px] left-[76px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg" />
          <img
            className="absolute top-[0px] left-[102.7px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg" />
          <img
            className="absolute top-[0px] left-[129.3px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg" />
          <img
            className="absolute top-[0.7px] left-[156px] w-[14.7px] h-[14.7px] object-cover"
            alt=""
            src="/social@2x.png" />
        </div>
        <div className="absolute top-[103px] left-[-1px] box-border w-[1442px] h-0.5 border-t-[2px] border-solid border-cold-grey-white" />
        <div className="absolute top-[383px] left-[148.5px] box-border w-[1143px] h-px border-t-[1px] border-solid border-cold-grey-white" />
        <div className="absolute top-[171px] left-[1089px] w-[234px] h-16 font-poppins">
          <div className="absolute top-[26px] left-[37px] w-[197px] h-[38px]">
            <div className="absolute w-full top-[-60.53%] left-[0%] font-medium flex items-center">
              SNIPE TECH PVT LTD #123,
              70Th Cross 2Nd Floor,<br />
              SVA Arcade 5Th Block,<br />
              Rajaji Nagara,<br />  Bengaluru – 560010
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon.png"
          />
        </div>
        <div className="absolute top-[277px] left-[1089px] w-[186px] h-6 font-poppins">
          <div className="absolute top-[2px] left-[37px] w-[149px] h-5">
            <div className="absolute top-[-5%] left-[0.67%] font-medium">
              hr@snipe.co.in
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon1.png"
          />
        </div>
        <b className="absolute top-[128px] left-[1110px] text-lg">Contact Us</b>
        <div className="absolute top-[317px] left-[1089px] w-44 h-6 font-poppins">
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon.svg"
          />
          <div className="absolute top-[2px] left-[37px] w-[139px] h-5">
            <div className="absolute top-[-60%] left-[0%] capitalize font-medium">
              <p className="m-0">+91 080-23100098</p>
              <p className="m-0">+91 63635 07858</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[392px] left-[635px] w-[171px] h-4 text-xs">
          <div className="absolute top-[6.25%] left-[0%] font-light">
            © 2017 All Rights Reserved
          </div>
        </div>
        <div className="absolute top-[128px] left-[853px] w-[203px] h-[197px]">
          <b className="absolute top-[0%] left-[0%] text-lg">Company</b>
          <div
            className="absolute top-[26.9%] left-[0%] capitalize font-medium font-poppins cursor-pointer"
            onClick={onAboutUsText2Click}
          >
            Research area
          </div>
          <div
            className="absolute top-[43.15%] left-[0%] font-medium font-poppins cursor-pointer"
          //onClick={onCareersTextClick}
          >
            Collabrations
          </div>
          <div className="absolute top-[59.39%] left-[0%] font-poppins"
            onClick={onAboutUsTextClick}>
            About us
          </div>
          <div className="absolute top-[75.63%] left-[0%]">Blogs</div>
          <div className="absolute top-[91.88%] left-[0%]">FAQs</div>
        </div>
        <img
          className="absolute h-[18.05%] w-[17.86%] top-[31.1%] right-[75.17%] bottom-[48.86%] left-[8.97%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/poplogo.svg"
        />
      </div>
    </div>

  );
};

export default EduProject1;
