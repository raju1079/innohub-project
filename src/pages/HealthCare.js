import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HealthCare = () => {
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
    navigate("/project1");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/healthcare");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray h-[2710px] overflow-hidden text-left text-xl text-cold-grey-white font-poppins">
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
      <div className="absolute w-full top-[90px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[466px] overflow-hidden text-29xl">
        <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,_#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
        <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />
        <img
          className="absolute top-[0px] left-[calc(50%_-_721.4px)] w-[1442.8px] h-[375.6px] object-cover"
          alt=""
          src="/artboard-44x-1@2x.png"
        />
        <b className="absolute top-[293.6px] left-[calc(52%_-_624.1px)] capitalize">
          HealthCare
        </b>
      </div>
      <div className="absolute w-full top-[556px] right-[0px] left-[0px] h-[394px] overflow-hidden text-13xl">
        <div className="absolute top-[1.6px] left-[calc(50%_-_599.9px)] w-[1199.7px] h-[330.8px]">
          {/* <b className="absolute top-[0px] left-[calc(50%_-_599.55px)] capitalize">
            
          </b> */}
          <div className="absolute top-[1.8px] left-[calc(50%_-_599.85px)] text-base capitalize text-justify inline-block w-[1199.7px] h-[261px]">
            Artificial Intelligence (AI) has transformed healthcare by revolutionizing medical research, diagnostics, and patient care. Its vast scope includes data analysis, predictive modeling, personalized treatment plans, and robotic-assisted surgeries.
            AI excels in analyzing extensive healthcare data, accelerating medical research, and aiding informed decision-making. In diagnostics, machine learning models, particularly in medical imaging, enable early disease detection and risk prediction.
            Personalized medicine tailors treatment based on individual patient characteristics, enhancing efficacy and minimizing side effects. AI contributes to drug development by identifying candidates and predicting success through virtual simulations.
            Remote patient monitoring and telehealth, powered by AI, address global healthcare challenges, offering continuous monitoring and efficient virtual consultations. AI-assisted robotics improve surgical precision, while AI-driven tools streamline administrative functions, enhancing overall patient care.
            Ethical considerations and responsible AI use are crucial, ensuring positive contributions to healthcare outcomes and building trust. In conclusion, AI's multifaceted scope in healthcare promises precision, accessibility, and patient-centricity, contributing to global health improvements.
          </div>
        </div>
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
                className="absolute top-[55px] left-[calc(50%_-_536.4px)]  w-[460.8px] h-[440.6px] object-fill rounded-md"
                alt=""
                src="/Healthimg1.png"
              />
            <div className="absolute top-[51.1px] left-[calc(50%_-_4.2px)] w-[601.6px] h-[334.6px]">
              <div className="absolute top-[0px] left-[calc(50%_-_300.8px)] leading-[140%] capitalize font-semibold inline-block w-[545.8px] h-[53px]">
                AI-Driven Precision Medicine: Transforming Healthcare through Personalized Treatment Strategies
              </div>
              <div className="absolute top-[233.8px] left-[calc(50%_-_300.8px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[601.6px] h-[150.7px]">
                This research project focuses on leveraging AI for precision medicine, tailoring healthcare to individual patients. It involves developing AI algorithms for genomic data analysis, predicting diagnostics for early disease detection, and optimizing treatment responses through machine learning models
              </div>
            </div>
          </div>
          <div className="absolute top-[594.6px] left-[calc(50%_-_597.4px)] w-[1194.8px] h-[516.4px] text-8xl">
            <div className="absolute top-[0px] left-[calc(50%_+_46.1px)] w-[551.3px] h-[516.4px]">
              <div className="absolute top-[0px] left-[calc(50%_-_275.65px)] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />
              <div className="absolute top-[33.5px] left-[calc(50%_-_242.15px)] rounded-lg bg-white w-[517.8px] h-[482.9px]" />
              <img
                className="absolute top-[60px] left-[calc(50%_-_217.4px)]  w-[470.8px] h-[430.6px] object-fill rounded-md"
                alt=""
                src="/Healthimg2.jpeg"
              />
            </div>
            <div className="absolute top-[108.9px] left-[calc(50%_-_597.4px)] w-[601.6px] h-[294.5px]">
              <div className="absolute top-[0px] left-[calc(50%_-_300.8px)] leading-[140%] capitalize font-semibold inline-block w-[545.8px] h-[106.1px]">
                AI-Enhanced Clinical Imaging for Accurate Disease Diagnosis
              </div>
              <div className="absolute top-[166.1px] left-[calc(50%_-_300.8px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[601.6px] h-[128.4px]">
                This research project focuses on transforming disease diagnosis by integrating artificial intelligence (AI) into clinical imaging.
                Leveraging advanced machine learning and computer vision, the project aims to enhance the accuracy and efficiency of disease detection across various medical imaging modalities.
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute top-[2290px] left-[calc(50%_-_720px)] bg-blue w-[1440px] h-[420px] text-sm font-roboto">
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

export default HealthCare;
