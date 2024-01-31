import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onFAQsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='theUPLResearch']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onResearchAreaTextClick = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray h-[1892px] overflow-hidden text-left text-base text-cold-grey-white font-poppins">
      <div className="absolute w-full top-[90px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[466px] overflow-hidden text-29xl">
        <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,_#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
        <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />
        <img
          className="absolute top-[0px] left-[calc(50%_-_721.4px)] w-[1442.8px] h-[375.6px] object-cover"
          alt=""
          src="/artboard-44x-1@2x.png"
        />
        <b className="absolute top-[293.6px] left-[calc(52%_-_624.1px)] capitalize">
          About Us
        </b>
      </div>
      <div className="absolute w-full top-[496px] right-[0px] left-[0px] h-[263px] overflow-hidden">
        <div
          className="absolute top-[8.6px] left-[calc(50%_-_601.4px)] inline-block w-[1193.9px] h-[158.6px]"
          data-scroll-to="theUPLResearch"
        >
          <p className="m-0">
            The UPL Research Centre, established in 2017 as SNIPE TECH PVT LTD
            has a rich history of pioneering research and innovation in
            Education. From its inception, our center has been at the forefront
            of advancing knowledge, breaking new ground in Healthcare,
            Agriculture, Logistics, Animal husbandry, Education, Data science
            and Cyber security through various AI Technologies.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Over the years, our commitment to excellence has attracted top-tier
            researchers, fostering a collaborative environment that thrives on
            intellectual curiosity and a passion for pushing the boundaries of
            what is possible in AI Research in various Fields.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
        </div>
      </div>
      <div className="absolute w-full top-[719px] right-[0px] left-[0px] h-[653px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_259.8px)] left-[calc(50%_-_601px)] w-[1202px] h-[516px]">
          <div className="absolute top-[calc(50%_-_252.7px)] left-[calc(50%_-_601px)] rounded-corner w-[591px] h-[496px] overflow-hidden">
            <div className="absolute top-[calc(50%_-_267.3px)] left-[calc(50%_-_306.8px)] shadow-[0px_4px_70px_rgba(0,_0,_0,_0.1)] w-[615.7px] h-[539.5px]">
              <div className="absolute top-[calc(50%_-_269.75px)] left-[calc(50%_-_307.85px)] rounded-corner bg-blueviolet [backdrop-filter:blur(30px)] w-[615.7px] h-[539.5px]" />
            </div>
            <div className="absolute top-[15.7px] left-[19.3px] inline-block w-[546.2px] h-[352px]">
              <p className="m-0 text-13xl">
                <b>Vision:</b>
              </p>
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0">{`Empowering Innovation, Shaping the Future `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Our vision at Unlimited Powerful Limited Research Center is to
                be a global leader in AI Research in various Fields, driving
                transformative innovation and addressing the most pressing
                challenges facing society. We envision a future where our
                research not only expands the frontiers of knowledge but also
                translates into tangible solutions that positively impact the
                world.
              </p>
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_258px)] left-[calc(50%_+_29px)] rounded-corner w-[572px] h-[516px] overflow-hidden">
            <div className="absolute top-[-66.6px] left-[-748px] w-[1442.8px] h-[641.6px]">
              <div className="absolute top-[641.6px] left-[1442.8px] w-[1442.8px] h-[641.6px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
              <div className="absolute top-[calc(50%_-_254.3px)] left-[calc(50%_+_26.2px)] shadow-[0px_4px_70px_rgba(0,_0,_0,_0.1)] w-[572.4px] h-[509.5px]">
                <div className="absolute top-[calc(50%_-_254.75px)] left-[calc(50%_-_286.2px)] rounded-corner bg-blueviolet [backdrop-filter:blur(30px)] w-[572.4px] h-[509.5px]" />
              </div>
              <div className="absolute top-[81.9px] left-[767.3px] inline-block w-[529.3px] h-[485.7px]">
                <p className="m-0 text-13xl">
                  <b>Mission:</b>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Pushing Boundaries, Creating Impact At AI Research in various
                  Fields, our mission is to conduct ground breaking research
                  that contributes significantly to AI Research in various
                  Fields.
                </p>
                <p className="m-0">&nbsp;</p>
                <ul className="m-0 pl-[21px]">
                  <li className="mb-0">
                    <span>
                      Advance Knowledge: Pursue cutting-edge research to deepen
                      our understanding of in Healthcare, Logistics,
                      Agriculture, Animal-husbandry and Education.
                    </span>
                  </li>
                  <li className="mb-0">
                    <span>
                      Foster Collaboration: Create a collaborative ecosystem
                      that encourages interdisciplinary research, bringing
                      together experts from diverse backgrounds.
                    </span>
                  </li>
                  <li className="mb-0">
                    <span>
                      Educate and Inspire: Contribute to the education and
                      training of the next generation of researchers and
                      professionals, inspiring them to excel in AI based
                      Research and outcome-based products.
                    </span>
                  </li>
                  <li>
                    <span>
                      Address Societal Challenges: Apply our research outcomes
                      to address real-world challenges and make a positive
                      impact on society.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1472px] left-[calc(50%_-_720px)] bg-blue w-[1440px] h-[420px] text-sm font-roboto">
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
              70Th Cross 2Nd Floor,<br/> 
              SVA Arcade 5Th Block,<br/> 
              Rajaji Nagara,<br/>  Bengaluru – 560010
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
    
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[90px] overflow-hidden text-xl">
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
    </div>
  );
};

export default AboutUs;
