import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Notification = () => {
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
    navigate("/eduproject1");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/agriculture");
  }, [navigate]);

  return (
    <div className="relative bg-gray xl:w-full lg:w-[1300px] md:w-[1180px] w-[749px] px-[0px] mx-full">

       <div className="absolute flex mx-auto top-0 right-0 left-0 h-[95px] overflow-hidden">
        <Header />
      </div>

      body

      {/* Title */}

      <section className="text-white flex flex-wrap  body-font md:mx-[95px] lg:mx-0">
        <div className="container px-24 py-24 lg:w-[1100px] xl:mx-auto">
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
            <b className="text-17xl mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px] md:text-17xl font-bold text-white ">INNOHUB INTERNSHIP</b>
            <p className="mt-4 mx-[-60px] md:mx-[-130px] lg:mx-[-100px] xl:mx-[-80px] pl-10 text-13xl md:text-xl lg:text-base text-white text-justify overflow-wrap-break-word ">
              The InnoHub Internship stands out as an exceptional integrated program that offers a holistic learning experience, encompassing comprehensive training, mentorship in technology, campus interviews preparation, and a platform for project development. Participants in this program will engage in a dynamic six-month stint, actively working on live projects with diverse clients associated with SNIPE TECH PVT LTD. This work will be conducted online, allowing interns to contribute directly from their college premises.
            The enhanced skills acquired during this period can be effectively leveraged by candidates in various job placement avenues, enhancing their ability to succeed in campus interviews.This program is designed to instill confidence in technology and processes, enabling participants to emerge as highly successful software engineers.
            By providing hands-on experience and exposure to real-world projects, the InnoHub Internship prepares candidates for a seamless transition into the professional realm, empowering them to excel in both job placements and campus interviews.
            </p>
            <p className="mt-4 mx-[-60px] md:mx-[-130px] lg:mx-[-100px] xl:mx-[-80px] pl-10 text-13xl md:text-xl lg:text-base text-white text-justify  overflow-wrap-break-word">
            We are pleased to offer scholarships to support students who wish to participate in academic research activities at our esteemed center. The scholarship aims to provide financial assistance to promising students interested in gaining practical experience in the research area through our internship program. By offering this scholarship, we hope to foster a spirit of inquiry and provide valuable learning experiences to motivated individuals like you. The criteria for being eligible to avail the scholarship is define as in the below table:
            </p>

            <div style={{ textAlign: 'center' }}>
            <table className="w-full mt-8" style={{ borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px' }}>Sl No.</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>Marks obtain in Internship test in %age.</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>Scholarship granted in % on total fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', textAlign:"center" }}>1.</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>95% to 99.99%</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>50%</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px' }}>2.</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>90% to 94%</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>40%</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px' }}>3.</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>81% to 89%</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>25%</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px' }}>4.</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>71% to 80%</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>10%</td>
              </tr>
            </tbody>
          </table>
            </div>
      <h3 className="text-17xl font-semibold mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px] mt-[50px] my-[60px] text-blue ">Eligibility:</h3>
         <b className="flex flex-wrap text-13xl font-semibold mb-2 text-white mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px]  "> BE, B.Tech, BCA, BSc, MCA, M.Tech, MSc.
         
        <Link  to="/enrollment_form" 
         className="block md:ml-4 underline cursor-pointer text-13xl text-white hover:text-blue ">
            Apply to Internship
        </Link>
            
        </b>
        </div>
        </div>
        
        <div className="mx-[-10px] my-[100px]">
        <b className=" text-17xl text-blue mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px]">Internship process:</b>
        </div>
        <div className="lg:mx-[100px] xl:mx-[150px]">      
        <img 
         className=" w-[550px] md:w-[750px] lg:mx-10 xl:w-[950px] object-fill"
         src="/Group 3763.png"/>
         </div>
  
       
        <h3 className="text-17xl text-blue mt-[100px]mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px]" >  Benefits:</h3>
        <ul className="mb-[150px] leading-relaxed text-cold-grey-white text-justify font-poppins text-13xl md:text-xl  lg:text-base transform scale-120 mx-[-30px] md:mx-[-100px] lg:mx-[-60px] xl:mx-[-45px]">
            <li className="p-1">Technology</li>
            <li className="p-1">Hands on Project Work</li>
            <li className="p-1">Domain Exposure</li>
            <li className="p-1">Campus Interview Preparation</li>
            <li className="p-1">Exploring Innovative Ideas</li>
            <li className="p-1">How to Draft Research Papers</li>
            <li className="p-1">Register In Patents</li>
          </ul>
      
          </div>
        </section>
        <Footer />
</div>
 );
};

export default Notification;