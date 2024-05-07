import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";


const Footer = ({
  social6,
  propTop,
  propHeight,
  onAboutUsText1Click,
  onCareersTextClick,
}) => {
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

  const onFAQTextClick = useCallback(() => {
    navigate("/faq_page1");
  }, [navigate]); 

  const wisconsinAveSuiteStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const contactInfoStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <footer className="xl:w-full bg-blue flex flex-col items-center justify-start pt-5 px-0 pb-[15px] box-border relative gap-[16px] max-w-full text-center text-17xl text-yellow-50 font-roboto">
      <div className="w-[1181px] flex flex-row items-start justify-between py-0 px-5 box-border gap-[20px] max-w-full shrink-0 mq1050:flex-wrap">
        <h1 className="m-0 h-[68px] w-[202px] relative text-inherit uppercase font-bold font-inherit flex items-center justify-center shrink-0 mq450:text-3xl mq1050:text-10xl">
          Subscribe
        </h1>
        <div className="w-[672px] flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-cold-grey-30">
          <div className="self-stretch flex flex-row items-center justify-center py-1 pr-[5px] pl-[15px] box-border relative [row-gap:20px] max-w-full mq750:flex-wrap">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[-0.1px] right-[-0.4px] bottom-[0.1px] left-[0.4px] bg-cold-grey-10 shadow-[0px_6px_12px_-6px_rgba(255,255,_255,_0.12),_0px_8px_24px-4px_rgba(255,_255,_255,_0.08)]"/>
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] pb-0 px-0 box-border min-w-[309px] max-w-full">
              <div className="self-stretch relative z-[1]">
                Enter your email Address
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[7px] px-1.5 pb-1.5 bg-midnightblue w-44 flex flex-row items-center justify-center box-border z-[1] hover:bg-darkslateblue">
              <div className="relative text-base font-roboto text-cold-grey-white text-center">
                Subscribe
              </div>
            </button>
          </div>
          <div className="self-stretch relative text-cold-grey-white">{`Subscribe to stay tuned for new web design and latest updates. Let's do it! `}</div>
        </div>
      </div>
      <div className="self-stretch h-2 flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="h-0.5 flex-1 relative box-border max-w-full border-t-[2px] border-solid border-cold-grey-white" />
      </div>
      <div className="w-[1246px] flex flex-row items-start justify-start py-0 pr-8 pl-5 box-border max-w-full text-sm text-cold-grey-white">
        <div className="flex-1 flex flex-col items-center justify-start gap-[43px] max-w-full mq750:gap-[43px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq1050:flex-wrap">
            <div className="w-[228px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-center justify-start gap-[55px]">
                <img
                  className="self-stretch h-[54px] relative max-w-full overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/poplogo.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[37px]">
                  <div className="flex-1 flex flex-col items-center justify-start gap-[8px]">
                    <div className="relative">Follow us</div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-1 pl-0 gap-[10px]">
                      <img
                        className="h-[14.7px] w-2 relative"
                        alt=""
                        src="/social.svg"
                      />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                        alt=""
                        src="/social.svg"
                      />
                      <img
                        className="h-[14.7px] w-5 relative"
                        alt=""
                        src="/social.svg"
                      />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                        alt=""
                        src="/social.svg"
                      />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                        alt=""
                        src="/social.svg"
                      />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                        alt=""
                        src="/social.svg"
                      />
                      <img
                        className="h-[14.7px] w-[14.7px] relative object-cover"
                        alt=""
                        src="/social@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[470px] flex flex-row items-start justify-center gap-[32px] max-w-full text-left text-lg mq750:gap-[32px] mq450:flex-wrap">
              <div className="w-[203px] flex flex-col items-start justify-start gap-[32px] min-w-[203px] mq450:flex-1">
                <b className="relative">Company</b>
                <div className="flex flex-col items-start justify-start gap-[11px] text-sm font-poppins">
                  <div
                    className="h-[21px] relative capitalize font-medium inline-block cursor-pointer"
                    onClick={onResearchAreaTextClick}
                  >
                    Research area
                  </div>
                  <div
                    className="relative font-medium cursor-pointer"
                    onClick={onProjectsTextClick}
                  >
                    Projects
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[11px] font-roboto">
                    <div className="h-[21px] relative font-poppins inline-block"onClick={onAboutUsTextClick} >
                      About us
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                      <div className="relative"onClick={ onProjectsTextClick}>Collaboration</div>
                    </div>
                    <div className="relative" onClick={onFAQTextClick}>FAQs</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[42px] min-w-[153px]">
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[26px]">
                  <div className="h-[26px] flex flex-col items-start justify-start gap-[5px]">
                    <b className="relative">Contact Us</b>
                    </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[13px] text-sm font-poppins">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="eager"
                      alt=""
                      src="/icon.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
                      <div className="self-stretch h-[38px] relative">
                        <div
                          className="absolute w-full top-[calc(50%_-_42.1px)] left-[0.4px] capitalize font-medium flex items-center"
                          style={wisconsinAveSuiteStyle}
                        >
                          SNIPE TECH PVT LTD #123, 70Th Cross 2Nd Floor, SVA
                          Arcade 5Th Block, Rajaji Nagara Bengaluru – 560010
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px] text-sm font-poppins">
                  <div className="flex flex-row items-center justify-start gap-[13px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon1.png"
                    />
                    <div className="flex flex-row items-center justify-start py-0 pr-[39px] pl-px">
                      <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                        <div className="relative capitalize font-medium whitespace-nowrap">
                          hr@snipe.co.in
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-44 flex flex-row items-center justify-start gap-[13px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="h-5 flex-1 relative">
                      <div className="absolute top-[-12px] left-[0px] capitalize font-medium flex items-center">
                        <span>
                          <p className="m-0">+91 080-23100098</p>
                          <p className="m-0">+91 63635 07858</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-8 pl-5 box-border max-w-full text-left text-xs">
            <div
              className="flex-1 flex flex-col items-center justify-start gap-[8px] max-w-full"
              style={contactInfoStyle}
            >
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-cold-grey-white" />
              <div className="flex flex-row items-center justify-start py-px pr-6 pl-0">
                <div className="relative font-light">
                  © 2021 All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;