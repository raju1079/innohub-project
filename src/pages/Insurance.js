import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
/* import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 */

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
    <div className="xl:w-full relative bg-gray h-[3160px] overflow-hidden text-left text-xl text-cold-grey-white font-poppins
    w-[1207px] flex flex-col  items-start justify-start  py-0 px-5">
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
            Collaborations
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
          </div>
         */}</div>
      </div>
      <div className="absolute w-full top-[90px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[466px] overflow-hidden text-29xl">
        <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,_#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
        <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />
        <img
          className="absolute top-[0px] left-[calc(50%_-_721.4px)] w-[1442.8px] h-[375.6px] object-cover"
          alt=""
          src="/artboard-44x-1@2x.png"
        />
        <b className="absolute top-[293.6px] left-[calc(52%_-_624.1px)] capitalize">
          Insurance
        </b>
      </div>
      <div className="absolute w-full top-[506px] right-[0px] left-[0px] h-[394px] overflow-hidden text-13xl">
        {/* <div className="absolute top-[31.6px] left-[calc(50%_-_599.9px)] w-[1199.7px] h-[330.8px]">
          <b className="absolute top-[0px] left-[calc(50%_-_599.55px)] capitalize">
           
          </b> */}
        <div className="absolute top-[0px] left-[calc(50%_-_599.85px)] text-base capitalize text-justify inline-block w-[1199.7px] h-[261px]">
          Research in insurance spans various critical areas, reflecting the
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
        </div>
        {/*  </div> */}
      </div>
      <div className="absolute w-full top-[950px] right-[0px] left-[0px] h-[1340px] overflow-hidden text-17xl text-blue">
        <div className="absolute top-[120px] left-[calc(50%_-_597.4px)] w-[1194.8px] h-[1111px]">
          <div
            className="absolute top-[0px] left-[calc(50%_-_597.4px)] w-[1194.8px] h-[516.4px] cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[0px] left-[calc(50%_-_597.4px)] w-[551.3px] h-[516.4px]">
              <div className="absolute top-[0px] left-[calc(50%_-_275.65px)] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />
              <div className="absolute top-[33.5px] left-[calc(50%_-_242.15px)] rounded-lg bg-white w-[517.8px] h-[482.9px]" />
            </div>
            <img
              className="absolute top-[48px] left-[calc(50%_-_548.4px)]  w-[490.8px] h-[455.6px] object-fill rounded-md"
              alt=""
              src="/Insuranceimg1.jpg"
            />

            <div className="absolute top-[51.1px] left-[calc(50%_-_4.2px)] w-[601.6px] h-[334.6px]">
              <div className="absolute top-[0px] left-[calc(50%_-_300.8px)] leading-[140%] capitalize font-semibold inline-block w-[545.8px] h-[53px]">
                Personalized Risk Assessment in Personal Insurance: Integrating
                AI for Tailored Coverage"          </div>
              <div className="absolute top-[253.8px] left-[calc(50%_-_300.8px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[601.6px] h-[150.7px] text-justify">
                The research project titled "Personalized Risk Assessment in
                Personal Insurance: Integrating AI for Tailored Coverage"
                endeavors to revolutionize the landscape of personal insurance
                by integrating Artificial Intelligence (AI) to refine risk
                assessment methodologies. The study focuses on harnessing AI
                algorithms to develop personalized insurance products that
                intricately cater to the distinct needs, behaviors, and
                lifestyles of individual policyholders.

              </div>
            </div>
          </div>
          <div className="absolute top-[594.6px] left-[calc(50%_-_597.4px)] w-[1194.8px] h-[516.4px] text-8xl">
            <div className="absolute top-[0px] left-[calc(50%_+_46.1px)] w-[551.3px] h-[516.4px]" onClick={onInsProject2Click}>
              <div className="absolute top-[0px] left-[calc(50%_-_275.65px)] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />
              <div className="absolute top-[33.5px] left-[calc(50%_-_242.15px)] rounded-lg bg-white w-[517.8px] h-[482.9px]" />
              <img
                className="absolute top-[50px] right-[calc(50%_-_256.4px)]  w-[480.8px] h-[450.6px] object-fill rounded-md cursor-pointer"
                alt=""
                src="/Insuranceimg2.jpg"
              />
            </div>
            <div className="absolute top-[108.9px] left-[calc(50%_-_597.4px)] w-[601.6px] h-[294.5px]">
              <div className="absolute top-[0px] left-[calc(50%_-_300.8px)] leading-[140%] capitalize font-semibold inline-block w-[545.8px] h-[106.1px]">
                Corporate Insurance Efficiency: A Comprehensive Study on Risk
                Mitigation and Cost Optimization
              </div>
              <div className="absolute top-[150.1px] left-[calc(50%_-_300.8px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[601.6px] h-[128.4px] text-justify">
                The research project titled "Corporate Insurance Efficiency: A
                Comprehensive Study on Risk Mitigation and Cost Optimization"
                endeavors to explore and enhance the efficiency of corporate
                insurance processes by delving into advanced strategies for risk
                mitigation and cost optimization. The primary focus is on
                identifying innovative approaches and leveraging cutting-edge
                technologies to improve risk management practices within
                corporations, aiming to result in more economically viable
                insurance solutions.



              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:w-100 flex flex-wrap justify-center w-full font-poppins ">
        <div className="absolute top-[2290px] left-[calc(50%_-_720px)] text-sm font-roboto shadow-md ">

          <div className="mt-6 w-[450px] h-[300px] bg-white rounded-xl overflow-hidden">
            <div className="  px-5 py-4 text-3xl font-semibold text-left px-2 py-1 text-blue">
              Transformative Trends in Insurance Firms: Adapting to Digital Disruption and Customer-Centric Models
            </div>
            <div className="text-black  px-5 py-1 text-sm text-left px-2 py-1 font-poppins">
              The research project titled "Transformative Trends in Insurance Firms: Adapting to Digital Disruption and Customer-Centric Models" aims to explore and analyze .
            </div>
            <div className="pt-0 mt-7 text-center">
              <button className="absolute  w-[100px] h-[30px] text-white bg-blue  text:align-center left-[300px] rounded hover:bg-indigo-600 hover:text-black cursor-pointer" onClick={onInsProject3Click}>Read more</button>
            </div>
          </div>
        </div>

        <div className="absolute top-[2290px] left-[calc(50%_-_222px)] text-sm font-roboto">

          <div className="mt-6 w-[450px] h-[300px] bg-white rounded-xl overflow-hidden">
            <div className="text-3xl font-semibold text-left px-5 py-4 text-blue">
              Hospitals as Stakeholders: Exploring the Role and Impact of Healthcare Institutions in Insurance
            </div>
            <div className="text-black text-sm text-left px-5 py-1 font-poppins">
              The research project titled "Hospitals as Stakeholders: Exploring the Role and Impact of Healthcare Institutions in Insurance". </div>
            <button className="absolute  w-[100px] h-[30px] text-white bg-blue  text:align-center left-[300px] rounded hover:bg-indigo-600 hover:text-black cursor-pointer" onClick={onInsProject4Click}>Read more</button>
          </div>


        </div>

        <div className="absolute top-[2290px] left-[calc(50%_-_-270px)]  text-sm font-roboto">

          <div className="mt-6 w-[450px] h-[300px] bg-white rounded-xl overflow-hidden">
            <div className="text-3xl font-semibold text-left px-5 py-4 text-blue">
              Ethical Dimensions of Insurance in Healthcare: Balancing Profitability, Patient Welfare, and Privacy             </div>
            <div className="text-black text-sm text-left px-5 py-4 font-poppins">
              The research project titled "Ethical Dimensions of Insurance in Healthcare" intricately examines the ethical complexities inherent in the intersection of insurance, healthcare.</div>
            <button className="absolute  w-[100px] h-[30px] text-white bg-blue  text:align-center left-[300px] rounded hover:bg-indigo-600 hover:text-black cursor-pointer" onClick={onInsProject5Click}>Read more</button>
          </div>

        </div>
      </div>

      <div className="absolute top-[2740px] left-[calc(50%_-_720px)] bg-blue w-[1440px] h-[420px] text-sm font-roboto">  <b className="absolute top-[20px] left-[150px] text-17xl uppercase flex text-yellow-50 text-center items-center justify-center w-[202px] h-[68px]">
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
              SNIPE TECH PVT LTD #123, 70Th Cross 2Nd Floor,
              <br />
              SVA Arcade 5Th Block,
              <br />
              Rajaji Nagara,
              <br /> Bengaluru – 560010
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
            Collaborations
          </div>
          <div
            className="absolute top-[59.39%] left-[0%] font-poppins"
            onClick={onAboutUsTextClick}
          >
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

export default Insurance;
