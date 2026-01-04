import NavbarView from "./NavbarView";
import HomeView from "./HomeView";

function MainLayout() {
  return (
    <div className="bg-[#0a0a1a] h-screen ">
      <NavbarView />
      <HomeView />
    </div>
  );
}

export default MainLayout;
