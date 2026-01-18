function NavbarMobileView({ listNavbar, open, setOpen }) {
  return (
    <div
      className={`absolute top-full ${
        open ? "right-0 bg-[#000000aa]" : "right-[-100%]"
      } w-full h-screen lg:hidden transition-all duration-200 ease
        flex justify-end`}
      onClick={() => setOpen(!open)}
    >
      <ul className="flex flex-col w-60 h-screen items-left p-6 space-y-6 bg-[#0a0a1a]">
        {listNavbar.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="relative text-white text-lg font-medium 
                after:absolute after:left-0 after:bottom-0
                after:h-[2px] after:w-0
                after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500
                after:transition-all after:duration-300
                hover:after:w-full"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarMobileView;
