import NavbarView from "./NavbarView";
import HomeView from "./HomeView";
import AboutMeView from "./AboutMeView";
import SkillView from "./SkillView";

function MainLayout() {
  return (
    <div className="bg-[#0a0a1a] h-full ">
      <NavbarView />
      <HomeView />
      <AboutMeView />
      <SkillView />
    </div>
  );
}

export default MainLayout;
