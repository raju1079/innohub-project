import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ResearchArea = () => {
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

  const onFrameContainerClick = useCallback(() => {
    navigate("/education");
  }, [navigate]);

  const onHealthCareClick = useCallback(() => {
    navigate("/healthcare");
  }, [navigate]);

  const onLogisticsClick = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onAgricultureClick = useCallback(() => {
    navigate("/agriculture");
  }, [navigate]);

  const onAnimalHusbandryClick = useCallback(() => {
    navigate("/animalhusbandry");
  }, [navigate]);

  const onInformationTechnologyClick = useCallback(() => {
    navigate("/informationtechnology");
  }, [navigate]);

  const onInsuranceClick = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <div className="relative bg-gray xl:w-full lg:w-[1300px] md:w-[1180px] w-[749px] px-[0px] mx-full">

      <div className="absolute flex mx-auto top-0 right-0 left-0 h-[90px] overflow-hidden">
        <Header />
      </div>

      body

      {/* Title */}

      <section className="text-white flex flex-wrap  body-font md:mx-[95px] lg:mx-0">
        <div className="container px-24 py-24">
          <div className="absolute w-full top-[95px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[466px] overflow-hidden text-29xl">
            <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
            <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />
            <img
              className="absolute flex flex-col top-[0px] lg:w-auto left-[calc(50%_-_721.4px)] w-[1160.8px] h-[375.6px] object-cover md:w-auto"
              alt=""
              src="/artboard-44x-1@2x.png"
            />
          </div>
          <div className="container mx-auto pt-[350px] font-poppins">
            <div className="w-full">
              <b className="text-29xl mx-[80px]  md:mx-[190px] lg:mx-[-30px] md:text-29xl font-bold text-white ">Research Area</b>
            </div>

          </div>
          <div className="m-[100px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:gap-x-10 xl:gap-x-[30px] lg:gap-x-10 md:gap-x-[50px] lg:mx-[-30px] font-popins ">


            <div className="m-10 w-[255px] h-[242px] lg:w-[230px] lg:h-[230px] bg-blue  rounded-xl cursor-pointer hover:scale-110"
              onClick={onFrameContainerClick}>
              <img
                className="flex item-center px-[80px] pb-8 pt-[55px] md:px-[65px] md:pt-[38px] scale-150 overflow-hidden "

                alt=""
                src="/graduationcapgraduationcapeducation.svg"
              />
              <b className="flex content-center text-white px-[50px] md:px-[30px] md:pt-[2px] text-17xl ">Education</b>

            </div>



            <div className="m-10 w-[255px] h-[242px] lg:w-[230px] lg:h-[230px] bg-blue  rounded-xl cursor-pointer hover:scale-110"
              onClick={onHealthCareClick}>
              <img
                className="flex item-center px-[80px] pb-8 pt-[55px]  md:px-[65px] md:pt-[38px]  scale-150 overflow-hidden "

                alt=""
                src="/signcrosssquarehealthsignmedicalsymbolhospitalcrosssquare.svg"
              />
              <b className="flex content-center text-white px-[40px] md:px-[10px] text-17xl ">HealthCare</b>

            </div>

            <div className="m-10 w-[255px] h-[242px] lg:w-[230px] lg:h-[230px] bg-blue  rounded-xl cursor-pointer hover:scale-110"
              onClick={onLogisticsClick}>
              <img
                className="flex item-center px-[80px] pb-8 pt-10 md:px-[65px] md:pt-[38px] scale-150 overflow-hidden hover:px-[150px] "

                alt=""
                src="/ambulancecaremergencyhealthmedicalambulance.svg"
              />
              <b className="flex content-center text-white px-[55px] md:px-[45px] text-17xl ">Logistics</b>

            </div>


            <div className="m-10 w-[255px] h-[242px] lg:w-[230px] lg:h-[230px] bg-blue  rounded-xl cursor-pointer hover:scale-110"
              onClick={onAgricultureClick}
            >
              <img
                className="flex item-center px-[80px] pb-8 pt-[55px]  md:px-[65px] md:pt-[38px] scale-150 overflow-hidden "

                alt=""
                src="/beachislandwavesoutdoorrecreationtreebeachpalmwavewatertravelplaces.svg"
              />
              <b className="flex content-center text-white px-[40px] md:px-[10px] text-17xl ">Agriculture</b>

            </div>

            <div className="m-10 w-[255px] h-[242px] lg:w-[230px] lg:h-[230px] lg:mx-[180px] xl:mx-[180px] bg-blue  rounded-xl cursor-pointer hover:scale-110"
              onClick={onAnimalHusbandryClick}
            >
              <img
                className="flex item-center px-[100px] pb-8 pt-10  md:px-[65px] md:pt-[20px] scale-150 overflow-hidden "

                alt=""
                src="/petsallowedtravelwayfinderpetsallowed.svg"
              />
              <b className="flex content-center text-center text-white px-[35px] md:px-[20px] text-17xl ">Animal<br />
                Husbandry</b>

            </div>

            <div className="m-10 w-[255px] h-[242px] lg:w-[230px] lg:h-[230px] lg:mx-[180px] xl:mx-[180px] bg-blue  rounded-xl cursor-pointer hover:scale-110 "
            onClick={onInformationTechnologyClick}
            >
              <img
                className="flex item-center px-[80px] pb-8 pt-[25px] md:px-[70px] scale-150 overflow-hidden "

                alt=""
                src="/desktopchecksuccessapprovedevicedisplaydesktopcomputer.svg"
              />
              <b className="flex content-center text-white px-[35px] md:px-[5px] pt-[-15px] text-17xl text-center">Information <br /> Technology</b>

            </div>

            <div className="m-10 w-[255px] h-[252px] lg:w-[230px] lg:h-[230px] md:mx-[200px] lg:mx-[180px] xl:mx-[180px] bg-blue  rounded-xl cursor-pointer hover:scale-110"
             onClick={onInsuranceClick}
             >
              <img
                className="flex item-center px-[80px] pb-8 pt-[40px] md:px-[80px] scale-150 overflow-hidden "

                alt=""
                src="/insurancehandhealthmedicalinsurancehandcross.svg"
              />
              <b className="flex content-center text-white px-[45px] md:px-[25px] text-17xl ">Insurance</b>

            </div>


            {/*  <div>
            <div>
            <img
              alt=""
              src="/petsallowedtravelwayfinderpetsallowed.svg"
              />
            </div>
            <div>
            <img
              alt=""
              src="/desktopchecksuccessapprovedevicedisplaydesktopcomputer.svg"
              />
            </div>
            <div>
            <img
              alt=""
              src="/insurancehandhealthmedicalinsurancehandcross.svg"
              />
            </div>
          */}
          </div>

        </div>

      </section>


      <Footer />
    </div>

  );
};

export default ResearchArea;
