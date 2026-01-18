import { useEffect, useState } from "react";
import NavbarDesktopView from "./NavbarDesktopView";
import NavbarMobileView from "./NavbarMobileView";

function NavbarView() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const listNavbar = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certifications",
    "Contact",
  ];

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        flex items-center justify-between
        transition-all duration-300
        backdrop-blur-md
        border-b border-white/10
        ${scrolled ? "bg-[#0a0a1af2] py-4 shadow-lg" : "bg-[#0a0a1acc] py-6"}
        px-6 md:px-12
      `}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        Ihsan<span className="text-cyan-400">Baihaqi</span>
      </div>

      {/* Desktop Menu */}
      <NavbarDesktopView listNavbar={listNavbar} />

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex flex-col space-y-1"
      >
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
      </button>

      {/* Mobile Menu */}
      <NavbarMobileView listNavbar={listNavbar} open={open} setOpen={setOpen} />
    </nav>
  );
}

export default NavbarView;
