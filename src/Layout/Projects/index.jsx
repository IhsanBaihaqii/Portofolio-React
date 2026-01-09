import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const projectsData = [
  {
    title: "itshanApp",
    description: "Asistant AI yang mampu membantu anda (Demo)",
    image:
      "https://raw.githubusercontent.com/IhsanBaihaqii/itshanApp/refs/heads/main/image.png",
    link: "https://itshanapp.com", // link project
    github: "https://github.com/IhsanBaihaqii/itshanApp", // link github
    tags: ["HTML", "CSS", "JavaScript", "AI", "React", "Node.js"],
  },
  {
    title: "Jam Analog",
    description: "Jam Analog Dengan Foto Beliau Yang Sedang Menunjuk",
    image:
      "https://via.placeholder.com/600x400/0a0a1a/00ffff?text=Jam+Analog+Project",
    link: "https://jam-analog-demo.com",
    github: "https://github.com/IhsanBaihaqii/Jam-Analog",
    tags: ["HTML", "CSS", "JavaScript", "Canvas", "UI Design"],
  },
  {
    title: "Kopi Kenangan Senja",
    description: "Website Kopi Kenangan Senja",
    image:
      "https://raw.githubusercontent.com/IhsanBaihaqii/Kenangan-Senja/refs/heads/main/screenshoot/hasil/Screenshot%202025-06-24%20104133.png",
    link: "https://kopi-kenangan-senja.com",
    github: "https://github.com/IhsanBaihaqii/Kenangan-Senja",
    tags: ["HTML", "CSS", "JavaScript", "Alpine JS", "Bootstrap", "Responsive"],
  },
  {
    title: "E-Commerce Store",
    description: "Full-stack e-commerce platform with payment integration",
    image:
      "https://via.placeholder.com/600x400/0a0a1a/00ffff?text=E-Commerce+Project",
    link: "https://ecommerce-demo.com",
    github: "https://github.com/IhsanBaihaqii/ecommerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
  },
  {
    title: "Weather App",
    description: "Real-time weather application with forecasts",
    image: "https://via.placeholder.com/600x400/0a0a1a/00ffff?text=Weather+App",
    link: "https://weather-app-demo.com",
    github: "https://github.com/IhsanBaihaqii/weather-app",
    tags: ["React", "API", "Chart.js", "Tailwind CSS"],
  },
  {
    title: "Task Manager",
    description: "Productivity app with drag & drop functionality",
    image:
      "https://via.placeholder.com/600x400/0a0a1a/00ffff?text=Task+Manager",
    link: "https://taskmanager-demo.com",
    github: "https://github.com/IhsanBaihaqii/task-manager",
    tags: ["Vue.js", "Express", "Socket.io", "Docker"],
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    image:
      "https://via.placeholder.com/600x400/0a0a1a/00ffff?text=Social+Media+Dashboard",
    link: "https://dashboard-demo.com",
    github: "https://github.com/IhsanBaihaqii/social-dashboard",
    tags: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
  },
  {
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition",
    image:
      "https://via.placeholder.com/600x400/0a0a1a/00ffff?text=Fitness+Tracker",
    link: "https://fitness-tracker-demo.com",
    github: "https://github.com/IhsanBaihaqii/fitness-tracker",
    tags: ["React Native", "Firebase", "GraphQL", "Redux Toolkit"],
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with dark theme",
    image:
      "https://via.placeholder.com/600x400/0a0a1a/00ffff?text=Portfolio+Website",
    link: "https://portfolio-demo.com",
    github: "https://github.com/IhsanBaihaqii/portfolio",
    tags: ["React", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
];

function ProjectView() {
  const [currentPage, setCurrentPage] = useState(1);

  // Projects per page based on screen size
  const getProjectsPerPage = () => {
    if (window.innerWidth < 768) return 3; // Mobile
    if (window.innerWidth < 1024) return 6; // Tablet
    return 9; // Desktop
  };

  const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage());

  // Update projects per page on resize
  useState(() => {
    const handleResize = () => {
      setProjectsPerPage(getProjectsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projectsData.slice(startIndex, endIndex);

  // Handle page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle next/previous
  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 3;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <section
      id="projects"
      className="min-h-screen pt-20 px-6 md:px-[10%] bg-[#0a0a1a] relative overflow-hidden pb-5"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Semua project yang saya buat
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-10">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="text-white/60 text-sm">
            Showing {startIndex + 1}-{Math.min(endIndex, projectsData.length)}{" "}
            of {projectsData.length} projects
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
            >
              <FaChevronLeft className="text-sm" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={`dots-${index}`} className="text-white/40 px-2">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                      currentPage === page
                        ? "bg-cyan-500 text-white"
                        : "text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
            >
              <span className="hidden sm:inline">Next</span>
              <FaChevronRight className="text-sm" />
            </button>
          </div>

          {/* Projects per page info */}
          <div className="text-white/40 text-sm hidden md:block">
            {projectsPerPage} projects per page
          </div>
        </div>
      )}
    </section>
  );
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/70 mb-4 text-sm">{project.description}</p>

        {/* Tags */}
        <div className="relative flex flex-wrap gap-2 pb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-black/70 backdrop-blur-sm text-white"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/70 backdrop-blur-sm text-white">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 transition-all"
            >
              <FaExternalLinkAlt className="text-sm" />
              View Project
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <FaGithub />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectView;
