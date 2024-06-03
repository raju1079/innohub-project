import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onFAQsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='theInnoHubResearch']");
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
    <div className="relative bg-gray md:w-full w-[739px] p-0 mx-full">
      <Header />
      <div className="bg-gray py-16 mx-10 font-poppins">
        <div className="container mx-auto">
          <div className="px-4 md:px-0">
            <div className="absolute w-full top-[95px] right-[0px] left-[0px] bg-gradient-to-b from-black [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)]  h-[466px] overflow-hidden text-4xl md:text-5xl lg:text-6xl">
              <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
              <div className="absolute top-[181px] left-[50%] transform scale-120 rounded-full bg-gray-400 w-[686px] h-[686px] overflow-hidden" />
              <img
                className="absolute top-[0px] left-[50%] transform -translate-x-1/2 w-full md:max-w-[1160px] md:h-[375.6px] md:w-auto h-auto"
                alt=""
                src="/artboard-44x-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-[300px] font-poppins ">
        <b className="text-29xl md:text-29xl m-5 font-bold text-blue flex content-center items-center"> About Us </b>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base transform scale-120">The InnoHub Research Centre, established in 2017 as SNIPE TECH PVT LTD
          has a rich history of pioneering research and innovation in
          Education. From its inception, our center has been at the forefront
          of advancing knowledge, breaking new ground in Healthcare,
          Agriculture, Logistics, Animal husbandry, Education, Data science
          and Cyber security through various AI Technologies.

        </p>
        <p className="mb-10 m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl md:mb-5 lg:mb-5 xl:mb-5 lg:text-base transform scale-120"> Over the years, our commitment to excellence has attracted top-tier
          researchers, fostering a collaborative environment that thrives on
          intellectual curiosity and a passion for pushing the boundaries of
          what is possible in AI Research in various Fields.
        </p>
      </div>
      <div className="mb-10 pt-10 mt-10 ml-10 w-[650px] h-auto md:w-[750px] md:ml-[220px] lg:w-[1050px] lg:ml-[130px] xl:w-[1200px] xl:ml-[80px] bg-blueviolet [backdrop-filter:blur(25px)] rounded-xl">
        <b className="text-white text-29xl p-8">Vision:</b>
        <p className=" p-8 pb-[70px] m-2 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl lg:text-base transform scale-120">
          Empowering Innovation, Shaping the Future


          < br />
          < br />
          Our vision at Unlimited Powerful Limited Research Center is to
          be a global leader in AI Research in various Fields, driving
          transformative innovation and addressing the most pressing
          challenges facing society. We envision a future where our
          research not only expands the frontiers of knowledge but also
          translates into tangible solutions that positively impact the
          world.
        </p>

      </div>
      <div className="mb-[200px] pt-10 mt-10 ml-10 w-[650px] h-auto md:w-[750px] md:ml-[220px] lg:w-[1050px] lg:ml-[130px] xl:w-[1200px] xl:ml-[80px] bg-blueviolet [backdrop-filter:blur(25px)] rounded-xl">
        <b className="text-white text-29xl p-8 ">Mission:</b>
        <p className=" p-8 m-2 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl lg:text-base transform scale-120">
          Pushing Boundaries, Creating Impact At AI Research in various
          Fields, our mission is to conduct ground breaking research that
          contributes significantly to AI Research in various Fields.</p>
        <ul className="mb-[150px] m-5 leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 ">

          <li className="p-1"> Advance Knowledge: Pursue cutting-edge research to deepen our
            understanding of in Healthcare, Logistics, Agriculture,
            Animal-husbandry and Education.

          </li>
          <li className="p-1"> Foster Collaboration: Create a collaborative ecosystem that
            encourages interdisciplinary research, bringing together
            experts from diverse backgrounds.
          </li>
          <li className="p-1">Educate and Inspire: Contribute to the education and training
            of the next generation of researchers and professionals,
            inspiring them to excel in AI based Research and outcome-based
            products.
          </li>
          <li className="p-1 pb-[70px]"> Address Societal Challenges: Apply our research outcomes to
            address real-world challenges and make a positive impact on
            society.
          </li>
        </ul>

      </div>


      <Footer />

    </div>
  );
};

export default AboutUs;
