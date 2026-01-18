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

export default [
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
