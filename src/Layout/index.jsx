import NavbarView from "./NavbarView";
import HomeView from "./HomeView";
import AboutMeView from "./AboutMeView";
import SkillView from "./SkillView";
import ProjectView from "./ProjectView";
import EducationView from "./EducationView";
import CertificateView from "./CertificateView";

function MainLayout() {
  return (
    <div className="bg-[#0a0a1a] h-full ">
      <NavbarView />
      <HomeView />
      <AboutMeView />
      <SkillView />
      <ProjectView />
      <EducationView />
      <CertificateView />
      <footer className="text-center text-white py-4 bg-[#05050d]">
        <p>
          &copy; {new Date().getFullYear()} Ihsan Baihaqi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default MainLayout;
