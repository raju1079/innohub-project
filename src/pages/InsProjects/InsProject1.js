import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const InsProject1 = () => {
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
    <div className="w-full relative bg-gray h-[4464px] overflow-hidden text-left text-xl text-cold-grey-white font-poppins">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[90px] overflow-hidden">
        <img
          className="absolute h-[37.56%] top-[31.22%] bottom-[31.22%] left-[calc(50%_-_596.2px)] max-h-full w-[228.4px] cursor-pointer"
          alt=""
          src="/group-1.svg"
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
          // onClick={onProjectsTextClick}
          >
            Collabrations
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer"
          // onClick={onProjectsTextClick}
          >
            Blogs
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About us
          </div>
          <div className="w-[141px] relative rounded-xl bg-cold-grey-white h-10 overflow-hidden shrink-0 text-5xl text-blue">
            <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_44px)] capitalize font-semibold">
              Sign In
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[98px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[414px] overflow-hidden">
        <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,_#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
        <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />
        <img
          className="absolute top-[0px] left-[calc(50%_-_721.4px)] w-[1442.8px] h-[375.6px] object-cover"
          alt=""
          src="/artboard-44x-1@2x.png"
        />
      </div>
      <div className="absolute w-full top-[520px] right-[0px] left-[0px] h-[2682px] overflow-hidden text-base text-blue">
        <div className="absolute top-[68.6px] left-[calc(50%_-_609.7px)] w-[1219.4px] h-[2544.8px]">
          <div className="absolute top-[159px] left-[calc(50%_-_609.7px)] rounded-8xs bg-gainsboro-200 w-[1195.4px] h-[471.3px]" />
          <div className="absolute top-[1028.4px] left-[calc(50%_-_609.7px)] leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[114.6px]">
            The recommended AI tool, "InsureAI," is envisioned as a groundbreaking solution designed to transform the landscape of personal insurance. The tool's scope revolves around leveraging advanced AI algorithms, including machine learning models and predictive analytics, to enable a more refined and personalized risk assessment in the insurance domain. "InsureAI" aims to dynamically adapt to individual customer profiles, providing real-time insights into policyholders' behaviors, preferences, and lifestyles.
          </div>
          <div className="absolute top-[1202.7px] left-[calc(50%_-_609.7px)] leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[432.8px]">
            <p className="m-0">
              Advanced Risk Prediction Models: Utilizes sophisticated machine learning models to predict and assess risks associated with individual policyholders, ensuring a nuanced understanding of their unique circumstances
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Dynamic Adaptation: Adapts in real-time to changes in customer profiles, ensuring that insurance coverage remains aligned with evolving needs and circumstances
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Personalized Recommendations: Offers personalized insurance product recommendations based on the comprehensive analysis of individual policyholders' data, optimizing coverage to suit specific requirements.

            </p>
          {/*   <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Real-time Monitoring: Offers real-time monitoring features to track changes in risk factors and adjust insurance strategies dynamically.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Risk Assessment Models: Incorporates advanced AI-driven risk assessment models to provide corporations with a nuanced understanding of their specific risk profiles..

            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Cost Optimization Algorithms: Utilizes machine learning algorithms to analyze historical data and identify opportunities for cost optimization in insurance premiums and coverage.
            </p>
   //comment        /*<p className="m-0">&nbsp;</p>
            <p className="m-0">
              Evaluation Feedback Loop: Continuous assessment and refinement based on route efficiency, delivery times, and customer satisfaction.


            </p> */}
          </div>
          <div className="absolute top-[666.4px] left-[calc(50%_-_609.7px)] text-13xl leading-[140%] capitalize font-semibold inline-block w-[803px] h-[31.6px]">
            Synopsis:
          </div>
          <div className="absolute top-[910.3px] left-[calc(50%_-_609.7px)] text-13xl leading-[140%] capitalize font-semibold">
            AI Tool Name: InsureAI

          </div>
          <div className="absolute top-[975.6px] left-[calc(50%_-_609.7px)] text-5xl leading-[140%] capitalize font-semibold">
            Objective:
          </div>
          <div className="absolute top-[1132.5px] left-[calc(50%_-_609.7px)] text-5xl leading-[140%] capitalize font-semibold">
            Key Features:
          </div>
          <div className="absolute top-[1600.9px] left-[calc(50%_-_609.7px)] leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[432.8px]">
            <p className="m-0  text-5xl text-blue leading-[140%] capitalize font-semibold">
              Target Audience:
            </p>

            <ul>
              <li>Insurance Providers: "InsureAI" is tailored for insurance companies looking to enhance the precision and relevance of their insurance products, fostering customer satisfaction and loyalty.</li>

              <li>Policyholders: The tool caters to individuals seeking more personalized and cost-effective insurance coverage that aligns closely with their lifestyles and preferences.
              </li>

              {/* <li>Corporate Risk Managers: "CorpInsureOptimize" is designed for professionals responsible for managing corporate risks, providing them with tools to optimize insurance coverage and associated costs
              </li> */}
            </ul>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-5xl text-blue leading-[140%] capitalize font-semibold">
              Project Impact:
            </p>
            <ul>
              <li>The project aims to bring about a transformative impact on the personal insurance sector by introducing a more customer-centric and responsive approach to risk assessment. "InsureAI" is expected to optimize insurance premiums, accuracy of coverage, and overall customer satisfaction, thereby reshaping industry standards.</li>

             {/*  <li>The research project aims to have a substantial impact on corporate insurance efficiency by introducing "CorpInsureOptimize." The tool's implementation is expected to lead to more informed decision-making, reduced insurance costs, and improved risk mitigation strategies for corporations, thereby enhancing the overall effectiveness of corporate insurance processes.</li>

              <li>The tool aims to empower insurance firms with valuable insights, enhancing their ability to adapt to transformative trends and improve overall business performance. By facilitating informed decision-making, "InsureInsight AI" contributes to the industry's resilience in the face of digital challenges and customer-driven transformations.</li>
 */}
            </ul>


            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-5xl text-blue leading-[140%] capitalize font-semibold">
              Conculsion
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
            In conclusion, the development and implementation of "InsureAI" hold the potential to revolutionize personal insurance by harnessing the power of AI for tailored coverage. The tool's adaptive nature and personalized recommendations are poised to redefine customer experiences, establishing a new paradigm for the ethical and effective use of AI in the insurance industry. This research project serves as a foundational step towards ushering in a more dynamic, customer-friendly, and efficient era in the realm of personal insurance.

            </p>
           {/*  <p className="m-0">&nbsp;</p>
            <p className="m-0">
             "CorpInsureOptimize" stands as a pivotal tool in reshaping how corporations approach insurance efficiency. By harnessing AI for advanced risk assessment and cost optimization, this tool is positioned to bring about positive transformations in the corporate insurance landscape, fostering a balance between risk mitigation and financial prudence. The research project sets the stage for a new era in corporate insurance practices, where data-driven insights and innovation lead to more resilient and economically viable insurance solutions.
            </p>
 */}          </div>

          <div className="absolute top-[-70px] left-[calc(50%_-_609.7px)] text-29xl leading-[100%] capitalize font-semibold inline-block w-[1219.4px]">
          Corporate Insurance Efficiency: A Comprehensive Study on Risk Mitigation and Cost Optimization
          </div>
          <div className="absolute top-[734.2px] left-[calc(50%_-_609.7px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[518.6px]">
            <p className="m-0">

            The "CorpInsureOptimize" AI tool is developed to comprehensively address the efficiency of corporate insurance processes. It focuses on two key aspects: risk mitigation and cost optimization. The tool delves into innovative approaches and technologies that can be employed by corporations to streamline risk management, ultimately leading to more efficient and cost-effective corporate insurance solutions.
            </p>

          </div>
        </div>
      </div>
      <div className="absolute w-full top-[3210px] right-[0px] left-[0px] h-[826px] overflow-hidden text-5xl font-h1">
        <div className="absolute top-[73.5px] left-[calc(50%_-_597.7px)] w-[1195.4px] h-[678.9px]">
          <div className="absolute top-[26.3px] left-[calc(50%_-_597.7px)] w-[296.1px] h-[37.1px]">
            <div className="absolute top-[1.1px] left-[calc(50%_-_148.05px)] bg-blue w-[199.7px] h-[34.9px]" />
            <div className="absolute top-[0px] left-[calc(50%_-_148.05px)] leading-[140%] capitalize font-semibold whitespace-pre-wrap inline-block w-[296.1px] h-[37.1px]">
              <span>See related</span>
              <span className="text-darkslategray">{`  `}</span>
            </div>
          </div>
          <div className="absolute top-[124.4px] left-[calc(50%_-_597.7px)] w-[1192.7px] h-[554.5px] text-mini font-poppins">
            <div className="absolute top-[0px] left-[calc(50%_-_596.35px)] w-[576.8px] h-[554.5px]">
              <div className="absolute top-[0px] left-[calc(50%_-_288.4px)] rounded-8xs bg-gainsboro-200 w-[576.8px] h-[285.8px]" />
              <div className="absolute top-[439.5px] left-[calc(50%_-_288.4px)] leading-[150%] inline-block w-[550.1px] h-[115px]">
              The research project titled "Transformative Trends in Insurance Firms: Adapting to Digital Disruption and Customer-Centric Models" aims to explore and analyze the evolving landscape of insurance firms in the face of digital disruption and changing customer expectations. 
              
              </div>
              <div className="absolute top-[309.8px] left-[calc(50%_-_288.4px)] text-8xl leading-[140%] capitalize font-semibold font-h1 text-blue inline-block w-[576.8px] h-[114px]">
              Transformative Trends in Insurance Firms: Adapting to Digital Disruption and Customer-Centric Models
              </div>
            </div>
            <div className="absolute top-[0px] left-[calc(50%_+_19.55px)] w-[576.8px] h-[554.5px]">
              <div className="absolute top-[0px] left-[calc(50%_-_288.4px)] rounded-8xs bg-gainsboro-200 w-[576.8px] h-[285.8px]" />
              <div className="absolute top-[439.5px] left-[calc(50%_-_288.4px)] leading-[150%] inline-block w-[554.5px] h-[115px]">
              The research project titled "Hospitals as Stakeholders: Exploring the Role and Impact of Healthcare Institutions in Insurance" delves into the intricate dynamics between hospitals and the insurance ecosystem. 
             </div>
              <div className="absolute top-[309.8px] left-[calc(50%_-_288.4px)] text-8xl leading-[140%] capitalize font-semibold font-h1 text-blue inline-block w-[576.8px] h-[82.9px]">
              Hospitals as Stakeholders: Exploring the Role and Impact of Healthcare Institutions in Insurance
              </div>
            </div>
          </div>
          <div className="absolute top-[-0.5px] left-[calc(50%_-_598.2px)] box-border w-[1196.4px] h-px border-t-[1px] border-solid border-gainsboro-100" />
        </div>
      </div>
      <div className="absolute top-[4044px] left-[calc(50%_-_720px)] bg-blue w-[1440px] h-[420px] text-sm font-roboto">
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
            src="/social.svg"
          />
          <img
            className="absolute top-[0px] left-[18.7px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0.7px] left-[45.3px] w-5 h-[14.7px]"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0px] left-[76px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0px] left-[102.7px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0px] left-[129.3px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0.7px] left-[156px] w-[14.7px] h-[14.7px] object-cover"
            alt=""
            src="/social@2x.png"
          />
        </div>
        <div className="absolute top-[103px] left-[-1px] box-border w-[1442px] h-0.5 border-t-[2px] border-solid border-cold-grey-white" />
        <div className="absolute top-[383px] left-[148.5px] box-border w-[1143px] h-px border-t-[1px] border-solid border-cold-grey-white" />
        <div className="absolute top-[171px] left-[1089px] w-[234px] h-16 font-poppins">
          <div className="absolute top-[26px] left-[37px] w-[197px] h-[38px]">
            <div className="absolute w-full top-[-60.53%] left-[0%] capitalize font-medium flex items-center">
              SNIPE TECH PVT LTD #123, 70Th Cross 2Nd Floor, SVA Arcade 5Th
              Block, Rajaji Nagara Bengaluru – 560010
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="absolute top-[277px] left-[1089px] w-[186px] h-6 font-poppins">
          <div className="absolute top-[2px] left-[37px] w-[149px] h-5">
            <div className="absolute top-[-5%] left-[0.67%] capitalize font-medium">
              hr@snipe.co.in
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon.svg"
          />
        </div>
        <b className="absolute top-[128px] left-[1089px] text-lg">Contact Us</b>
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
            © 2021 All Rights Reserved
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
            onClick={onCareersTextClick}
          >
            Projects
          </div>
          <div className="absolute top-[59.39%] left-[0%] font-poppins">
            About us
          </div>
          <div className="absolute top-[75.63%] left-[0%]">Collaboration</div>
          <div className="absolute top-[91.88%] left-[0%]">FAQs</div>
        </div>
        <div className="absolute top-[153px] left-[852px] box-border w-[50px] h-0.5 border-t-[2px] border-solid border-yellow-50" />
        <div className="absolute top-[153px] left-[1087px] box-border w-[50px] h-0.5 border-t-[2px] border-solid border-yellow-50" />
        <img
          className="absolute h-[8.05%] w-[15.86%] top-[43.1%] right-[75.17%] bottom-[48.86%] left-[8.97%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-1.svg"
        />
      </div>
    </div>
  );
};

export default InsProject1;
