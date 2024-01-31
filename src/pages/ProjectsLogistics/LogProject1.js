import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LogProject1 = () => {
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
    <div className="w-full relative bg-gray h-[3264px] overflow-hidden text-left text-xl text-cold-grey-white font-poppins">
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
          <div className="w-[110px] relative rounded-xl bg-cold-grey-white h-7 overflow-hidden shrink-0 text-3xl text-blue">
            <div className="absolute top-[calc(54%_-_18px)] left-[calc(56%_-_44px)] capitalize font-semibold ">
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
          {/*           <div className="absolute top-[159px] left-[calc(50%_-_609.7px)] rounded-8xs bg-gainsboro-200 w-[1195.4px] h-[471.3px]" /> */}
          <div className="absolute top-[398.4px] left-[calc(50%_-_609.7px)] leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[114.6px]">
            OptiRouteML encompasses features for data integration, route optimization, real-time adjustments, customer preference consideration, GIS integration, cost-benefit analysis, scalability testing, and continuous evaluation.

          </div>
          <div className="absolute top-[532.7px] left-[calc(50%_-_609.7px)] leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[432.8px]">
            <p className="m-0">

              GIS Integration: Enhance route planning with spatial analysis and visualization using GIS.

            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Data Integration: Gather and integrate diverse datasets for accurate algorithmic predictions.

            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Route Optimization: Utilize supervised and unsupervised learning for efficient route planning.


            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Real-time Adjustments: Implement dynamic algorithms responsive to live data feeds and external conditions.

            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Customer Preferences: Consider customer preferences, delivery windows, and special instructions for personalized deliveries.

            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Cost-Benefit Analysis: Conduct comprehensive assessments considering fuel costs, maintenance, and labor expenses.

            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Evaluation Feedback Loop: Continuous assessment and refinement based on route efficiency, delivery times, and customer satisfaction.


            </p>
          </div>
          <div className="absolute top-[86.4px] left-[calc(50%_-_609.7px)] text-13xl leading-[140%] capitalize font-semibold inline-block w-[803px] h-[31.6px]">
            Synopsis:
          </div>
          <div className="absolute top-[260.3px] left-[calc(50%_-_609.7px)] text-13xl leading-[140%] capitalize font-semibold">
            AI Tool Name: OptiRouteML

          </div>
          <div className="absolute top-[335.6px] left-[calc(50%_-_609.7px)] text-5xl leading-[140%] capitalize font-semibold">
            Objective:
          </div>
          <div className="absolute top-[472.5px] left-[calc(50%_-_609.7px)] text-5xl leading-[140%] capitalize font-semibold">
            Key Features:
          </div>
          <div className="absolute top-[890.9px] left-[calc(50%_-_609.7px)] leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[432.8px]">
            <p className="m-0  text-5xl text-blue leading-[140%] capitalize font-semibold">
              Target Audience:
            </p>

            <ul>
              <li>Supply Chain Managers: Optimizing last-mile delivery for cost reduction and efficiency.</li>
              <li>Logistics Companies: Improving operational performance in the final phase of delivery.
              </li>
              <li>E-commerce Platforms: Enhancing customer satisfaction through timely and efficient last-mile delivery.
              </li>
            </ul>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-5xl text-blue leading-[140%] capitalize font-semibold">
              Project Impact:
            </p>
            <ul>
              <li>Operational Efficiency: Optimized routes leading to reduced delivery times and operational costs.</li>
              <li>Customer Satisfaction: Personalized deliveries aligning with customer preferences.</li>
              <li>Cost Reduction: Improved resource allocation and fuel efficiency contributing to overall cost reduction.</li>
              <li>Scalable Solution: Applicable across various delivery scenarios and environments.</li>
              <li>Continuous Improvement: Ongoing evaluation and feedback loop ensuring adaptability and refinement.
              </li>
            </ul>


            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-5xl text-blue leading-[140%] capitalize font-semibold">
              Conculsion
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              OptiRouteML presents a transformative solution for last-mile delivery, leveraging machine learning to enhance efficiency, reduce costs, and improve customer satisfaction. By addressing key challenges
              and ensuring scalability, the tool contributes to the evolution of last-mile delivery operations in the modern supply chain landscape.


            </p>
            {/* <p className="m-0">&nbsp;</p>
            <p className="m-0">
              · Integration with Existing Learning Platforms: The tool will
              seamlessly integrate with popular learning management systems
              (LMS) and education platforms, ensuring a smooth adoption process
              for educational institutions.
            </p>
 */}          </div>

          <div className="absolute top-[-70px] left-[calc(50%_-_609.7px)] text-29xl leading-[100%] capitalize font-semibold-350 inline-block w-[1219.4px]">
            Blockchain Technology in Supply Chain:<br />
            <div className="absolute top-[65px] text-13xl"> Enhancing Transparency and Traceability in Logistics</div>
          </div>
          <div className="absolute top-[164.2px] left-[calc(50%_-_609.7px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[1195.4px] h-[518.6px]">
            <p className="m-0">

              BlockLogisticsAI encompasses features for robust blockchain architecture, IoT integration, traceability and provenance, smart contract automation, secure data sharing, interoperability, real-world pilot implementations, regulatory compliance, and educational outreach.
            </p>

          </div>
        </div>
      </div>
      <div className="absolute w-full top-[2010px] right-[0px] left-[0px] h-[826px] overflow-hidden text-5xl font-h1">
        <div className="absolute top-[73.5px] left-[calc(50%_-_597.7px)] w-[1195.4px] h-[678.9px]">
          <div className="absolute top-[26.3px] left-[calc(50%_-_597.7px)] w-[296.1px] h-[37.1px]">
            <div className="absolute top-[1.1px] left-[calc(50%_-_148.05px)] bg-blue w-[199.7px] h-[34.9px]" />
            <div className="absolute top-[0px] left-[calc(50%_-_148.05px)] leading-[140%] capitalize font-semibold whitespace-pre-wrap inline-block w-[296.1px] h-[37.1px]">
              <span>See related</span>
              <span className="text-darkslategray">{`  `}</span>
            </div>
          </div>
          <div className="absolute top-[80px] left-[calc(24%_-_288.4px)] rounded-8xs bg-blueviolet w-full h-[550px]" >
            <div className="absolute top-[-270px] left-[calc(52%_-_597.7px)] w-[1192.7px] h-[554.5px] text-mini font-poppins">
              <div className="absolute top-[0px] left-[calc(50%_-_596.35px)] w-[576.8px] h-[554.5px]">
                {/*  <div className="absolute top-[0px] left-[calc(50%_-_288.4px)] rounded-8xs bg-gainsboro-200 w-[576.8px] h-[285.8px]" /> */}
                <div className="absolute top-[429.5px] left-[calc(50%_-_288.4px)] leading-[150%] inline-block w-[550.1px] h-[115px] text-CBB2FF">
                  The "Predictive Analytics for Demand Forecasting in Logistics and Supply Chain Management" research project aims
                  to enhance supply chain efficiency through advanced data analytics.
                </div>
                <div className="absolute top-[309.8px] left-[calc(50%_-_288.4px)] text-8xl leading-[140%] capitalize font-semibold font-h1 inline-block w-[576.8px] h-[114px]">
                  Predictive Analytics for Demand Forecasting in Logistics and Supply Chain Management
                </div>
              </div>
              <div className="absolute top-[-10px] left-[calc(50%_+_19.55px)] w-[576.8px] h-[554.5px]">
                {/* <div className="absolute top-[0px] left-[calc(50%_-_288.4px)] rounded-8xs bg-gainsboro-200 w-[576.8px] h-[285.8px]" /> */}
                <div className="absolute top-[409.5px] left-[calc(48%_-_288.4px)] leading-[150%] inline-block w-[554.5px] h-[115px] text-CBB2FF">
                  The research project aims to revolutionize last-mile delivery operations using machine learning. By optimizing route planning, reducing delivery times, and minimizing operational costs, the study addresses critical challenges in the final leg of the supply chain.
                </div>
                <div className="absolute top-[309.8px] left-[calc(48%_-_288.4px)] text-8xl leading-[140%] capitalize font-semibold font-h1 inline-block w-[576.8px] h-[82.9px]">
                  Optimizing Last-Mile Delivery Routes Using Machine Learning Algorithms
                </div>
                <div className="absolute top-[260px] left-[calc(-4%_-_596.35px)] w-[576.8px] h-[554.5px]">
                  {/*  <div className="absolute top-[0px] left-[calc(50%_-_288.4px)] rounded-8xs bg-gainsboro-200 w-[576.8px] h-[285.8px]" /> */}
                  <div className="absolute top-[409.5px] left-[calc(50%_-_288.4px)] leading-[150%] inline-block w-[550.1px] h-[115px] ">
                    The "Green Logistics" research project aims to integrate sustainable practices into logistics, exploring eco-friendly strategies and conducting a comprehensive environmental impact assessment. The approach involves a
                    literature review on global green logistics practices, analyzing the impact of green transportation technologies, optimizing supply chains for sustainability, conducting a life cycle assessment of logistics operations.
                  </div>
                  <div className="absolute top-[309.8px] left-[calc(50%_-_288.4px)] text-8xl leading-[140%] capitalize font-semibold font-h1 inline-block w-[576.8px] h-[114px]">
                    Green Logistics: Sustainable Practices and Environmental Impact Assessment
                  </div>
                </div>
              </div>
              <div className="absolute top-[250px] left-[calc(50%_-_1.35px)] w-[576.8px] h-[554.5px]">
                {/*  <div className="absolute top-[0px] left-[calc(50%_-_288.4px)] rounded-8xs bg-gainsboro-200 w-[576.8px] h-[285.8px]" /> */}
                <div className="absolute top-[409.5px] left-[calc(51%_-_288.4px)] leading-[150%] inline-block w-[550.1px] h-[115px]">
                  The "Drones in Logistics: Exploring the Potential for Last-Mile Deliveries" research project aims to assess the feasibility and impact of integrating drone technology into the last-mile delivery process.
                  The approach involves a comprehensive literature review, regulatory analysis, exploration of technological advancements.
                </div>
                <div className="absolute top-[309.8px] left-[calc(50%_-_288.4px)] text-8xl leading-[140%] capitalize font-semibold font-h1 inline-block w-[576.8px] h-[114px]">
                  Drones in Logistics: Exploring the Potential for Last-Mile Deliveries
                </div>
              </div>
            </div>

          </div>
          <div className="absolute top-[-0.5px] left-[calc(50%_-_598.2px)] box-border w-[1196.4px] h-px border-t-[1px] border-solid border-gainsboro-100" />
        </div>
      </div>
      <div className="absolute top-[2844px] left-[calc(50%_-_720px)] bg-blue w-[1440px] h-[420px] text-sm font-roboto">
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
        {/* <div className="absolute top-[153px] left-[852px] box-border w-[50px] h-0.5 border-t-[2px] border-solid border-yellow-50" />
        <div className="absolute top-[153px] left-[1087px] box-border w-[50px] h-0.5 border-t-[2px] border-solid border-yellow-50" /> */}
        <img
          className="absolute h-[18.05%] w-[17.86%] top-[31.1%] right-[75.17%] bottom-[48.86%] left-[8.97%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/poplogo.svg"
        />
      </div>
    </div>
  );
};

export default LogProject1;
