import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaPython,
  FaJava,
  FaDocker,
  FaGithub,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiVite,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";

function SkillView() {
  const skills = [
    // Frontend
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },

    // Backend
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Java", icon: <FaJava />, color: "#007396" },

    // Databases
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },

    // Tools & DevOps
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "NPM", icon: <FaNpm />, color: "#CB3837" },

    // Testing & Build Tools
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },

    // Design
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    { name: "Adobe AI", icon: <SiAdobeillustrator />, color: "#FF9A00" },
    { name: "Adobe PS", icon: <SiAdobephotoshop />, color: "#31A8FF" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen pt-20 px-6 md:px-[10%] bg-[#0a0a1a] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Skills & <span className="text-cyan-400">Abilities</span>
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Keahlian dan kemampuan yang saya miliki
        </p>
      </div>

      {/* Skills Container */}
      <div className="max-w-6xl relative z-10">
        <div className="mb-12">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 gap-1">
            {skills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Skill Item Component
function SkillItem({ skill }) {
  return (
    <div className="group relative flex flex-col items-center">
      <div
        className="
        w-full h-19 flex items-center justify-center rounded-xl
        bg-white/5 backdrop-blur-sm border border-white/10
        group-hover:border-cyan-400/50 group-hover:bg-white/10
        transition-all duration-300 cursor-pointer
        group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/20
      "
      >
        <div
          className="text-3xl transition-all duration-300 group-hover:scale-125"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
      </div>

      {/* Skill Name - Hidden by default, shown on hover */}
      <span
        className="
        absolute bottom-8 opacity-0 group-hover:opacity-100
        transition-all duration-300 transform group-hover:-translate-y-1
        text-white font-medium text-sm whitespace-nowrap
        bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md
        border border-white/10
      "
      >
        {skill.name}
      </span>
    </div>
  );
}

export default SkillView;
