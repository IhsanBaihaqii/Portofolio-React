import NavbarView from "./NavbarView";
import HomeView from "./HomeView";
import AboutMeView from "./AboutMeView";

function MainLayout() {
  return (
    <div className="bg-[#0a0a1a] h-full ">
      <NavbarView />
      <HomeView />
      <AboutMeView />
    </div>
  );
}

export default MainLayout;
