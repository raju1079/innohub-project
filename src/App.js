import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResearchArea from "./pages/ResearchArea";
import AboutUs from "./pages/AboutUs";
import HealthCare from "./pages/HealthCare";
import Logistics from "./pages/Logistics";
import Agriculture from "./pages/Agriculture";
import AnimalHusbandry from "./pages/AnimalHusbandry";
import InformationTechnology from "./pages/InformationTechnology";
import Insurance from "./pages/Insurance";
import Education from "./pages/Education";
import Notification from "./pages/Notification";
import Project1 from "./pages/ProjectsHealthCare/Project1";
import LogProject1 from "./pages/ProjectsLogistics/LogProject1";
import ProjectIT1 from "./pages/ProjectsIT/ProjectIT1";
import AgrProject1 from "./pages/ProjectsAgriculture/AgrProject1";
import AhProject1 from "./pages/AHProjects/AhProject1";
import InsProject1 from "./pages/InsProjects/InsProject1";
import Login from "./pages/Login";


import AgrProject2 from "./pages/ProjectsAgriculture/AgrProject2";
import AgrProject3 from "./pages/ProjectsAgriculture/AgrProject3";
import AgrProject4 from "./pages/ProjectsAgriculture/AgrProject4";
import AgrProject5 from "./pages/ProjectsAgriculture/AgrProject5";

import AhProject2 from "./pages/AHProjects/AhProject2";
import AhProject3 from "./pages/AHProjects/AhProject3";
import AhProject4 from "./pages/AHProjects/AhProject4";
import AhProject5 from "./pages/AHProjects/AhProject5";


import InsProject2 from "./pages/InsProjects/InsProject2";
import InsProject3 from "./pages/InsProjects/InsProject3";
import InsProject4 from "./pages/InsProjects/InsProject4";
import InsProject5 from "./pages/InsProjects/InsProject5";

import ProjectIT2 from "./pages/ProjectsIT/ProjectIT2";
import ProjectIT3 from "./pages/ProjectsIT/ProjectIT3";
import ProjectIT4 from "./pages/ProjectsIT/ProjectIT4";
import ProjectIT5 from "./pages/ProjectsIT/ProjectIT5";
import ProjectIT6 from "./pages/ProjectsIT/ProjectIT6";
import ProjectIT7 from "./pages/ProjectsIT/ProjectIT7";

import Project2 from "./pages/ProjectsHealthCare/Project2";
import Project3 from "./pages/ProjectsHealthCare/Project3";
import Project4 from "./pages/ProjectsHealthCare/Project4";
import Project5 from "./pages/ProjectsHealthCare/Project5";

import LogProject2 from "./pages/ProjectsLogistics/LogProject2";
import LogProject3 from "./pages/ProjectsLogistics/LogProject3";
import LogProject4 from "./pages/ProjectsLogistics/LogProject4";
import LogProject5 from "./pages/ProjectsLogistics/LogProject5";

import EduProject1 from "./pages/EduProjects.js/EduProject1";
import EduProject2 from "./pages/EduProjects.js/EduProject2";
import EduProject3 from "./pages/EduProjects.js/EduProject3";
import EduProject4 from "./pages/EduProjects.js/EduProject4";
import EduProject5 from "./pages/EduProjects.js/EduProject5";
import EduProject6 from "./pages/EduProjects.js/EduProject6";
import PersonalDetailsForm from "./pages/Enrollment/PersonalDetailsForm";
import AdminHome from "./pages/AdminPanel/AdminPanel/AdminHomepage/AdminHome";




function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/eduproject1":
        title = "";
        metaDescription = "";
        break;
      case "/researcharea":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-3":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/eduproject1" element={<EduProject1 />} />
      <Route path="/researcharea" element={<ResearchArea />} />
      <Route path="/education" element={<Education />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/healthcare" element={<HealthCare />} />
      <Route path="/logistics" element={<Logistics />} />
      <Route path="/agriculture" element={<Agriculture />} />
      <Route path="/animalhusbandry" element={<AnimalHusbandry />} />
      <Route
        path="/informationtechnology"
        element={<InformationTechnology />}
      />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/logproject1" element={<LogProject1 />} />
      <Route path="/projectit1" element={<ProjectIT1 />} />
      <Route path="agrproject1" element={<AgrProject1 />} />
      <Route path="ahproject1" element={<AhProject1 />} />
      <Route path="insproject1" element={<InsProject1 />} />
      <Route path="/Login" element={<Login />} />
      
      <Route path="Agrproject3" element={<AgrProject3 />} />
      <Route path="Agrproject2" element={<AgrProject2 />} />
      <Route path="Agrproject4" element={<AgrProject4 />} />
      <Route path="Agrproject5" element={<AgrProject5 />} />
      
      <Route path="ahproject2" element={<AhProject2 />} />
      <Route path="ahproject3" element={<AhProject3 />} />
      <Route path="ahproject4" element={<AhProject4 />} />
      <Route path="ahproject5" element={<AhProject5 />} />

      <Route path="insproject2" element={<InsProject2 />} />
      <Route path="insproject3" element={<InsProject3 />} />
      <Route path="insproject4" element={<InsProject4 />} />
      <Route path="insproject5" element={<InsProject5 />} />

      <Route path="/projectit2" element={<ProjectIT2 />} />
      <Route path="/projectit3" element={<ProjectIT3 />} />
      <Route path="/projectit4" element={<ProjectIT4 />} />
      <Route path="/projectit5" element={<ProjectIT5 />} />
      <Route path="/projectit6" element={<ProjectIT6 />} />
      <Route path="/projectit7" element={<ProjectIT7 />} />

      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
      <Route path="/project4" element={<Project4 />} />
      <Route path="/project5" element={<Project5 />} />

      <Route path="/logproject2" element={<LogProject2 />} />
      <Route path="/logproject3" element={<LogProject3 />} />
      <Route path="/logproject4" element={<LogProject4 />} />
      <Route path="/logproject5" element={<LogProject5 />} />

      <Route path="/eduproject2" element={<EduProject2 />} />
      <Route path="/eduproject3" element={<EduProject3 />} />
      <Route path="/eduproject4" element={<EduProject4 />} />
      <Route path="/eduproject5" element={<EduProject5 />} />
      <Route path="/eduproject6" element={<EduProject6 />} />
      <Route path="/enrollment_form" element={<PersonalDetailsForm />} />
      <Route path="/Adminhome" element ={<AdminHome/>}/>
      
      

      
      
     
      
     
     

    </Routes>
  );
}
export default App;
