import { useEffect, useState } from "react";

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
      <ul className="hidden md:flex items-center space-x-8">
        {[
          "Home",
          "About",
          "Skills",
          "Projects",
          "Education",
          "Certifications",
          "Contact",
        ].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="
                relative text-white font-medium text-lg
                after:absolute after:left-0 after:bottom-0
                after:h-[2px] after:w-0
                after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col space-y-1"
      >
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a1a] md:hidden">
          <ul className="flex flex-col items-center py-6 space-y-6">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Education",
              "Certifications",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-white text-lg font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavbarView;
