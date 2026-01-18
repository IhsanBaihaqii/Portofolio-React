import NavbarView from "./NavbarView";
import HomeView from "./HomeView";
import AboutMeView from "./AboutMeView";
import SkillView from "./SkillView";
import ProjectView from "./ProjectView";
import EducationView from "./EducationView";

function MainLayout() {
  return (
    <div className="bg-[#0a0a1a] h-full ">
      <NavbarView />
      <HomeView />
      <AboutMeView />
      <SkillView />
      <ProjectView />
      <EducationView />
    </div>
  );
}

export default MainLayout;
