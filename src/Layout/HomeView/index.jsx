import myProfile from "../../assets/san1.jpg";

// Font Awesome Icons
// https://react-icons.github.io/react-icons/icons/fa/
import { FaInstagram, FaWhatsapp, FaTiktok, FaGithub } from "react-icons/fa";

import Typewriter from "./TypeWriter";

function HomeView() {
  return (
    <section
      id="hero"
      className="
        min-h-screen flex items-center relative overflow-hidden
        px-6 md:px-[10%]
      "
    >
      {/* Content */}
      <div className="max-w-xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-16 mb-6 text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Ihsan Baihaqi
          </span>
        </h1>

        <div className="text-xl md:text-2xl mb-6 min-h-[60px] text-white">
          I'm passionate about{" "}
          <span className="text-cyan-400 font-bold">
            <Typewriter
              words={[
                "Web Development",
                "Digital Marketing",
                "UI/UX Design",
                "Data Science",
              ]}
            />
          </span>
        </div>

        <p className="text-lg text-white/80 mb-8">
          Electronics | Web Developer | IT Business Developer | Artificial
          Intelegence
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="#about"
            className="
              px-8 py-3 rounded-full font-semibold
              bg-gradient-to-r from-cyan-400 to-purple-500
              text-slate-900
              shadow-lg shadow-cyan-400/30
              hover:-translate-y-1 transition
            "
          >
            About Me
          </a>

          <a
            href="#projects"
            className="
              px-8 py-3 rounded-full font-semibold
              border-2 border-cyan-400 text-cyan-400
              hover:bg-cyan-400 hover:text-slate-900
              transition
            "
          >
            View Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            { href: "https://wa.me/6285765178178", label: <FaWhatsapp /> },
            {
              href: "https://instagram.com/ihsanbaihaqii",
              label: <FaInstagram />,
            },
            { href: "https://tiktok.com/@saanmodz", label: <FaTiktok /> },
            { href: "https://github.com/ihsanbaihaqii", label: <FaGithub /> },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="
                w-10 h-10 flex items-center justify-center rounded-full
                bg-white/10 text-white
                hover:bg-cyan-400 hover:text-slate-900
                transition
              "
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Image */}
      <div
        className="
          hidden lg:flex absolute right-[10%]
          w-[400px] h-[400px] rounded-full
          bg-gradient-to-br from-cyan-400 to-purple-500
          items-center justify-center
          shadow-[0_0_50px_rgba(0,240,255,0.3)]
        "
      >
        <img
          src={myProfile}
          alt="Ihsan Baihaqi"
          className="
            w-[380px] h-[380px] rounded-full
            object-cover border-[10px] border-slate-900
          "
        />
      </div>
    </section>
  );
}

export default HomeView;
