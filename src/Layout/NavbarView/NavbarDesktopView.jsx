function NavbarDesktopView({ listNavbar }) {
  return (
    <ul className="hidden lg:flex items-center space-x-8">
      {listNavbar.map((item) => (
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
  );
}

export default NavbarDesktopView;
