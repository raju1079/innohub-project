import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Desktop from "./pages/Desktop";
import ResearchArea from "./pages/ResearchArea";
import AboutUs from "./pages/AboutUs";
import HealthCare from "./pages/HealthCare";
import Logistics from './pages/Logistics';
import Agriculture from "./pages/Agriculture";
import AnimalHusbandry from "./pages/AnimalHusbandry";
import InformationTechnology from "./pages/InformationTechnology";
import Insurance from "./pages/Insurance";
import Education from "./pages/Education";
import Notification from './pages/Notification'
import Project1 from "./pages/ProjectsHealthCare/Project1";
import LogProject1 from "./pages/ProjectsLogistics/LogProject1";
import ProjectIT1 from "./pages/ProjectsIT/ProjectIT1";
import AgrProject1 from "./pages/ProjectsAgriculture/AgrProject1";
import AhProject1 from "./pages/AHProjects/AhProject1";
import InsProject1 from "./pages/InsProjects/InsProject1";

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
      case "/desktop-4":
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
      <Route path="/desktop-4" element={<Desktop />} />
      <Route path="/researcharea" element={<ResearchArea />} />
      <Route path="/education" element={<Education />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/healthcare" element={<HealthCare/>}/>
      <Route path="/logistics" element={<Logistics/>}/>
      <Route path="/agriculture" element={<Agriculture/>}/>
      <Route path="/animalhusbandry" element={<AnimalHusbandry/>}/>
      <Route path="/informationtechnology" element={<InformationTechnology/>}/>
      <Route path="/insurance" element={<Insurance/>}/>
      <Route path='/notification' element={<Notification/>}/>
      <Route path='/project1' element={<Project1/>}/>
      <Route path='/logproject1' element={<LogProject1/>}/>
      <Route path='/projectit1' element={<ProjectIT1/>}/>
      <Route path="agrproject1"  element={<AgrProject1/>}/>
      <Route path="ahproject1" element={<AhProject1/>}/>
      <Route path="insproject1" element={<InsProject1/>}/>
    </Routes>
  );
}
export default App;
