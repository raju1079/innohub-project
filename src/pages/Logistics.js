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



const Logistics = () => {
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
    navigate("/logproject1");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onLogProject2Click = useCallback(() => {
    navigate("/logproject2");
  }, [navigate]);

  const onLogProject3Click = useCallback(() => {
    console.log('Button clicked!')
    navigate("/logproject3");
  }, [navigate]);

  const onLogProject4Click = useCallback(() => {
    navigate("/logproject4");
  }, [navigate]);

  const onLogProject5Click = useCallback(() => {
    navigate("/logproject5");
  }, [navigate]);


  return (
    <div className="xl:w-full relative bg-gray h-[3120px] overflow-hidden text-left text-xl text-cold-grey-white font-poppins
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
          </div> */}
        </div>
      </div>
      <div className="absolute w-full top-[110px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[466px] overflow-hidden text-29xl">
        <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,_#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
        <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />
        <img
          className="absolute top-[0px] left-[calc(50%_-_721.4px)] w-[1442.8px] h-[375.6px] object-cover"
          alt=""
          src="/artboard-44x-1@2x.png"
        />
        <b className="absolute top-[313.6px] left-[calc(52%_-_624.1px)] capitalize">
          Logistics
        </b>
      </div>
      <div className="absolute w-full top-[556px] right-[0px] left-[0px] h-[394px] overflow-hidden text-13xl">
        {/* <div className="absolute top-[31.6px] left-[calc(50%_-_599.9px)] w-[1199.7px] h-[330.8px]">
          <b className="absolute top-[0px] left-[calc(50%_-_599.55px)] capitalize">
            
          </b> */}
        <div className="absolute top-[0px] left-[calc(50%_-_599.85px)] text-base text-justify inline-block w-[1199.7px] h-[261px]">
          Logistic Research is the systemic inquiry and analysis focused on improving the planning, execution, and management
          of the transportation, storage and distribution of goods and services. It aims to optimize supply chain processes, reduce costs,
          and enhance the overall efficiency of logistic operations. It enhances overall supply chain performance through the application of
          innovative strategies, technologies and methodologies.
        </div>
        {/* </div> */}
      </div>
      <div className="absolute w-full top-[850px] right-[0px] left-[0px] h-[1340px] overflow-hidden text-17xl text-blue">
        <div className="absolute top-[120px] left-[calc(50%_-_597.4px)] w-[1194.8px] h-[1111px]">
          <div
            className="absolute top-[-100px] left-[calc(50%_-_597.4px)] w-[1194.8px] h-[516.4px] cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[0px] left-[calc(50%_-_597.4px)] w-[551.3px] h-[516.4px]">
              <div className="absolute top-[0px] left-[calc(50%_-_275.65px)] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />
              <div className="absolute top-[33.5px] left-[calc(50%_-_242.15px)] rounded-lg bg-white w-[517.8px] h-[482.9px]" />
            </div>

            <img
              className="absolute top-[62px] left-[calc(50%_-_535.4px)]  w-[470.8px] h-[425.6px] object-fill rounded-md cursor-pointer"
              alt=""
              src="/Logisticsimg1.jpg"
            />
            <div className="absolute top-[71.1px] left-[calc(50%_-_4.2px)] w-[601.6px] h-[334.6px]">
              <div className="absolute top-[0px] left-[calc(50%_-_300.8px)] leading-[140%] capitalize font-semibold inline-block w-[545.8px] h-[53px]">

                Blockchain Technology in Supply Chain
              </div>
              <div className="absolute top-[133.8px] left-[calc(50%_-_300.8px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[601.6px] h-[150.7px] text-justify">

                This research project investigates the application of blockchain technology in supply chain management, specifically within logistics. The focus is on enhancing transparency and traceability to improve efficiency, reduce fraud, and build trust among stakeholders. The approach involves designing a robust blockchain architecture, integrating with IoT devices for real-time data capture, ensuring traceability through provenance tracking, implementing smart contracts for automated processes,
                enabling secure data sharing, ensuring interoperability with existing systems, conducting real-world pilot implementations, addressing regulatory compliance, and promoting educational outreach for adoption.
              </div>
            </div>
          </div>
          <div className="absolute top-[494.6px] left-[calc(50%_-_597.4px)] w-[1194.8px] h-[516.4px] text-8xl">
            <div className="absolute top-[0px] left-[calc(50%_+_46.1px)] w-[551.3px] h-[516.4px]" onClick={onLogProject2Click}>
              <div className="absolute top-[0px] left-[calc(50%_-_275.65px)] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />
              <div className="absolute top-[33.5px] left-[calc(50%_-_242.15px)] rounded-lg bg-white w-[517.8px] h-[482.9px]" />
              <img
                className="absolute top-[62px] right-[calc(50%_-_257.4px)]  w-[480.8px] h-[425.6px] object-fill rounded-md cursor-pointer"
                alt=""
                src="/Logisticsimg2.jpg"

              />
            </div>
            <div className="absolute top-[88.9px] left-[calc(50%_-_597.4px)] w-[601.6px] h-[294.5px]">
              <div className="absolute top-[0px] left-[calc(50%_-_300.8px)] leading-[140%] capitalize font-semibold inline-block w-[545.8px] h-[106.1px]">
                Optimizing Last-Mile Delivery Routes Using Machine Learning Algorithms
              </div>
              <div className="absolute top-[106.1px] left-[calc(50%_-_300.8px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[601.6px] h-[128.4px] text-justify">
                The research project aims to revolutionize last-mile delivery operations using machine learning. By optimizing route planning, reducing delivery times, and minimizing operational costs, the study addresses critical challenges in the final leg of the supply chain. The approach includes data collection, route optimization algorithm development, dynamic real-time route adjustment, customer preference consideration, GIS integration, cost-benefit analysis, scalability testing, and an ongoing evaluation feedback loop.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:w-100  flex-wrap grid-col-3 justify-center w-full font-poppins ">
        <div className="absolute top-[2100px] left-[calc(60%_-_720px)] text-sm font-roboto shadow-md ">
          <div className=" absolute h-[400px] w-[250px] bg-blue rounded-xl g ">
            <div className="mt-6 m-5 w-[350px] h-[350px] bg-white rounded-xl overflow-hidden">
              <div className="  px-5 py-4 text-3xl font-semibold text-left text-blue">
                Green Logistics: Sustainable Practices and Environmental Impact Assessment
              </div>
              <div className="text-black  px-5 py-1 text-sm text-left font-poppins">
                The "Green Logistics" research project aims to integrate sustainable practices into logistics, exploring eco-friendly strategies and conducting a comprehensive environmental impact assessment.
              </div>
              <div className="pt-0 mt-7 text-center">
                <button className="absolute  w-[100px] h-[30px] text-white bg-blue  text:align-center left-[250px] rounded-xl hover:bg-indigo-600 hover:text-black cursor-pointer" onClick={onLogProject3Click}>Read more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2100px] left-[calc(54%_-_222px)] text-sm font-roboto">
          <div className=" absolute h-[400px] w-[350px] bg-blue rounded-xl g ">

            <div className="mt-6 w-[350px] h-[350px] bg-white rounded-xl overflow-hidden">

              <div className="text-3xl font-semibold text-left px-5 py-4 text-blue">
                Predictive Analytics for Demand Forecasting in Logistics and Supply Chain Management     </div>
              <div className="text-black text-sm text-left px-5 py-1 font-poppins">
                The "Predictive Analytics for Demand Forecasting in Logistics and Supply Chain Management" research project aims to enhance supply chain efficiency through advanced data analytics.
              </div>
              <button className="absolute  w-[100px] h-[30px] text-white bg-blue mt-4  text:align-center left-[220px] rounded-xl hover:bg-indigo-600 hover:text-black cursor-pointer" onClick={onLogProject4Click}>Read more</button>
            </div>

          </div>
        </div>
        <div className="absolute top-[2100px] left-[calc(55%--270px)]  text-sm font-roboto">
          <div className=" absolute h-[400px] w-[270px] bg-blue rounded-xl g ">
            <div className="mt-6 ml-[-100px] w-[350px] h-[350px] bg-white rounded-xl overflow-hidden">
              <div className="text-3xl font-semibold text-left px-5 py-4 text-blue">
                Drones in Logistics: Exploring the Potential for Last-Mile Deliveries
              </div>
              <div className="text-black text-sm text-left px-5 py-4 font-poppins">
                The "Drones in Logistics: Exploring the Potential for Last-Mile Deliveries" research project aims to assess the feasibility and impact of integrating drone technology into the last-mile delivery process.
              </div>
              <button className="absolute  w-[100px] h-[30px] mt-5 text-white bg-blue  text:align-center left-[120px] rounded-xl hover:bg-indigo-600 hover:text-black cursor-pointer" onClick={onLogProject5Click}>Read more</button>
            </div>
          </div>
        </div>
      </div>




      <div className="absolute top-[2700px] left-[calc(50%_-_720px)] bg-blue w-[1440px] h-[420px] text-sm font-roboto">
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
            Collaborations
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

export default Logistics;
