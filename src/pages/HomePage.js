import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ScrollingText from "../components/ScrollingText";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"

const HomePage = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='artboard44x1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);


  const onLoginClick = useCallback(() => {
    navigate("/Login");
  }, [navigate]);

  return (
    <>
      <div className=" w-[1256px] xl:w-full relative bg-gray h-[4276px] lg:h-[3420px] overflow-hidden text-left text-xl text-cold-grey-white font-poppins
    flex flex-col  items-start justify-start  py-0 ">
        <div className="absolute w-[calc(100%_-_3px)] top-[0px] right-[0px] left-[0.4px] h-[90px] overflow-hidden">
          <Header />
          <ScrollingText />
          <div className="w-[90px] top-[10px] relative rounded-xl bg-cold-grey-white h-6 overflow-hidden shrink-0 text-2xl text-blue ml-[1100px] md:ml-[1190px] lg:ml-[1150px] xl:md:ml-[1320px]">
            <div className="absolute top-[calc(63%_-_18px)] left-[calc(62%_-_44px)] capitalize font-semibold  "
              onClick={onLoginClick}>
              Log In
            </div>
          </div>

        </div>

        <div className="absolute w-[calc(100%_-_3px)] top-[90px] right-[1.6px] left-[1.4px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[711px] overflow-hidden text-29xl px-5">
          <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,_#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
          <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />

          <img
            className="absolute top-[20px] left-[calc(50%_-_721.4px)] w-[1442.8px] h-[493.5px] object-cover object-fit: none;"
            alt=""
            src="/artboard-44x-1@2x.png"
            data-scroll-to="artboard44x1"
          />
          <img
            className="absolute top-[453.6px] left-[calc(50%_-_722.8px)] w-[1442.8px] h-[257.4px] object-contain"
            alt=""
            src="/Artboard 4@4x 3.png"
          />
          <div className="absolute top-[363.6px] left-[calc(52%_-_624.1px)] capitalize  w-[924.2px] h-[191.8px]">
            <p className="m-0 text:29xl lg:text-13xl ">
              <b>Explore the World of Innovation</b>
            </p>
            {/*  <p className="m-0 text-13xl font-medium">{` `}</p> */}
          </div>
          <div className="absolute top-[453.6px] left-[calc(52%_-_624.1px)] capitalize font-medium text-thistle inline-block w-[857.4px] h-[191.8px] text-17xl lg:text-8xl">
            <p className="m-0">Content Creation at InnoHub Research Center</p>
            <p className="m-0 text-5xl">&nbsp;</p>
          </div>
        </div>

        <div className="absolute top-[801px] left-[calc(50%_-_720.5px)] w-[1442.8px] h-[578.8px] text-17xl">
          <div className="absolute top-[39.4px] left-[calc(50%_-_602.8px)] w-[1193.9px] h-[495.1px]">
            <b className="absolute top-[0px] left-[calc(50%_-_594.55px)] capitalize inline-block w-[963.2px] h-[80.2px] text-29xl lg:text-17xl ">
              Welcome to InnoHub research center
            </b>
            <div className="absolute top-[80.2px] left-[calc(50%_-_596.95px)] text-17xl lg:text-base w-[1193.9px] h-[414.8px] text-justify">
              <p className="m-0">
                At the InnoHub Research Center, we are at the forefront of pioneering
                research and innovation in key domains that shape the future of
                computing. Our multidisciplinary approach brings together
                brilliant minds to explore the realms of Artificial Intelligence
                (AI), Cybersecurity, Web Applications, Databases, Internet of
                Things (IoT), and Cloud Computing.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Exploring the Frontiers of Technology.</p>

              <p className="m-0">
                In the ever-evolving computing landscape, our research center
                stands as a hub for cutting-edge advancements. We are dedicated to
                pushing the boundaries of knowledge and fostering a collaborative
                environment where experts from diverse fields converge to address
                complex challenges.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[1630px] lg:top-[1129.8px] left-[calc(50%_-_719.1px)] w-[1440px] h-[282px] overflow-hidden text-17xl">
          <b className="absolute top-[26.2px] left-[calc(50%_-_598px)] capitalize inline-block w-[567.2px] h-[54px] text-29xl lg:text-17xl">
            Our Key Focus Areas:
          </b>
          <div className="absolute top-[106.4px] left-[calc(50%_-_599.7px)] w-[1197.7px] h-[67.1px] text-17xl lg:text-base">
            <p className="m-0">
              InnoHub RC works in the areas of Research in Education, health care,
              Logistics, Agriculture, Animal husbandry,Insurance, and basic
              science. The technology-driven through the following :
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-5xl">
              <b>&nbsp;</b>
            </p>
          </div>
        </div>
        <div className="absolute top-[1980px] lg:top-[1291.8px] left-[calc(50%_-_719.1px)] w-[1440px] h-[1391px] overflow-hidden text-13xl text-blue">
          <img
            className="absolute top-[53.9px] left-[465.9px] w-[1066.1px] h-[1386.7px] object-contain"
            alt=""
            src="/artboard-44x-4@2x.png"
          />
          <img
            className="absolute top-[3.9px] left-[-175px] w-[1066.1px] h-[1386.7px] object-contain"
            alt=""
            src="/artboard-44x-3@2x.png"
          />
          <div className="absolute top-[73px] left-[767px] lg:w-[546px] h-[1042px] flex lg:flex flex-col items-start justify-between">
            <div className="w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-17@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
                <b className="absolute top-[6px] left-[22.5px]">{`Cybersecurity `}</b>
              </div>
              <div className="absolute top-[94.8px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px] ">
                Fortifying digital landscapes against evolving threats through
                innovative cybersecurity solutions and robust defense mechanisms.
              </div>
              <img
                className="absolute h-[29.02%] w-[18.1%] top-[45.98%] right-[74.84%] bottom-[25%] left-[7.07%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-5.svg"
              />
            </div>
            <div className="w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-17@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
                <b className="absolute top-[6px] left-[22.5px]">
                  Web Applications
                </b>
              </div>
              <div className="absolute top-[94.8px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px]">
                Crafting seamless and -centric web experiences through innovative
                applications that harness the latest technologies.
              </div>
              <img
                className="absolute h-[31.72%] w-[18.97%] top-[46.09%] right-[76.98%] bottom-[22.19%] left-[4.05%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-8.svg"
              />
            </div>
            <div className="w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-17@3x.png')] bg-cover bg-no-repeat bg-[top] text-color">
              <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
                <b className="absolute top-[6px] left-[22.5px]">Databases</b>
              </div>
              <div className="absolute top-[94.8px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px]">
                Designing scalable and efficient database systems that underpin
                data-driven decision-making and analytics.
              </div>
              <img
                className="absolute h-[38.87%] w-[15.92%] top-[37.93%] right-[76.58%] bottom-[23.2%] left-[7.51%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-6.svg"
              />
            </div>
          </div>
          <div className="absolute top-[262px] left-[122px] h-[1035px] flex lg:flex flex-col items-start justify-between">
            <div className="w-full lg:w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-17@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
                <b className="absolute top-[6px] left-[22.5px]">
                  {" "}
                  Artificial Intelligence (AI)
                </b>
              </div>
              <img
                className="absolute h-[43.59%] w-[20.66%] top-[37.23%] right-[75.22%] bottom-[19.18%] left-[4.12%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-2.svg"
              />
              <div className="absolute top-[94.8px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px]">
                Unleashing the power of machine learning and AI to create
                intelligent systems that adapt, learn, and transform industries.
              </div>
            </div>
            <div className="w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-16@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
                <b className="absolute top-[6px] left-[22.5px]">
                  Internet of Things (IoT)
                </b>
              </div>
              <div className="absolute top-[94.8px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px]">
                Connecting the physical and digital worlds, driving innovation in
                smart technologies for a connected future.
              </div>
              <img
                className="absolute h-[35.59%] w-[18.1%] top-[42.7%] right-[75.77%] bottom-[21.72%] left-[6.14%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-4.svg"
              />
            </div>
            <div className="w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-17@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
                <b className="absolute top-[6px] left-[22.5px]">
                  Cloud Computing
                </b>
              </div>
              <div className="absolute top-[84.7px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px]">
                Shaping the future of computing infrastructure, enabling scalable,
                flexible, and reliable solutions in the cloud.
              </div>
              <img
                className="absolute h-[32.7%] w-[18.86%] top-[44.14%] right-[77.01%] bottom-[23.16%] left-[4.12%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-3.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[3292.8px] lg:top-[2700px] left-[calc(50%_-_719.1px)] w-[1440px] h-[575px] overflow-hidden">
          <div className="absolute top-[33.1px] left-[120.3px]  w-[1197.7px] h-[216px]">
            <b className="capitalize inline-block w-[947.2px] h-[54px] text-29xl lg:text-17xl">
              Collaborate, Innovate, Transform:
            </b>

            {/* <div className="overflow-hidden text-17xl ">Collaborate, Innovate, Transform:</div> */}
            <p className="m-0 text-17xl lg:text-base text-justify">
              Whether you are a researcher, industry partner, or enthusiast, InnoHub
              RC welcomes you to join us on this journey of discovery. Explore our
              projects, engage with our expert teams, and be part of the
              transformational impact we strive to create.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-13xl lg:text-base">

              Together, Let’s Redefine the Future of Computing!
            </p>

            <p className="m-0 text-13xl lg:text-base font-semibold">Mallikarjuna G D</p>
            <p className="m-0  text-13xl lg:text-base">Director, InnoHub Research Center</p>
          </div>
        </div>
        <div className="absolute top-[3857.8px] lg:top-[3000px] ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
