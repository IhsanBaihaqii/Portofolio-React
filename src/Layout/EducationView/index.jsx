import { FaGraduationCap, FaQuoteLeft } from "react-icons/fa";

const educationData = [
  {
    title: "SD NEGERI 104209 Saentis",
    degree: "Sekolah Dasar",
    year: "2012-2018",
    status: "Completed",
    image: "/education/sd.png",
    link: "#",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "SMP NEGERI 3 Percut Seituan",
    degree: "Sekolah Menengah Pertama",
    year: "2018-2021",
    status: "Completed",
    image: "/education/smp.png",
    link: "https://smpnegeri3percut.wordpress.com/",
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "SMK NEGERI 1 Percut Seituan",
    degree: "Elektronika Industri",
    year: "2021-2024",
    status: "Completed",
    image: "/education/smkn1.png",
    link: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/ff4eb1b7-a656-4cb6-8e81-ee627bac2216",
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Politeknik Ganesha Medan",
    degree: "Manajemen Informatika",
    year: "2024",
    status: "Mahasiswa",
    image: "/education/polgan.png",
    link: "https://polgan.ac.id/",
    color: "from-orange-500 to-yellow-400",
  },
];

function EducationView() {
  return (
    <section
      id="education"
      className="min-h-screen py-20 px-4 sm:px-6 md:px-[10%] bg-[#0a0a1a] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      {/* Title */}
      <div className="text-center mb-6 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 flex items-center justify-center gap-3">
          <FaGraduationCap className="text-cyan-400" />
          My <span className="text-cyan-400">Education</span>
        </h2>

        {/* Quote */}
        <div className="flex items-center justify-center mb-10">
          <p className="text-base md:text-lg text-white/60 font-medium italic max-w-xl mx-auto px-4">
            Pendidikan saya saat ini.
          </p>
        </div>
      </div>

      {/* Education Box Container */}
      <div className="relative z-10">
        <div
          className="
  grid
  grid-cols-1
  lg:grid-cols-2
  gap-6
  items-stretch
"
        >
          {educationData.map((edu, index) => (
            <EducationBox key={index} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Education Box Component
function EducationBox({ education }) {
  const statusColor =
    education.status === "Completed" ? "text-green-400" : "text-yellow-400";

  return (
    <a
      href={education.link}
      target={education.link !== "#" ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="
        block 
        w-full 
        group
        no-underline
      "
    >
      <div
        className="
    flex
    flex-col
    md:flex-row
    h-full
    rounded-xl
    bg-white/5
    backdrop-blur-sm
    border
    border-white/10
    overflow-hidden
    transition-all
    duration-300
    hover:border-cyan-400/40
    hover:shadow-xl
    hover:shadow-cyan-400/10
  "
      >
        {/* Image Section - Fixed height on mobile, flexible on desktop */}
        <div
          className="
    w-full
    md:w-44
    lg:w-48
    h-44
    md:h-auto
    flex
    items-center
    justify-center
    bg-gradient-to-br
    from-white/10
    to-white/5
  "
        >
          <img
            src={education.image}
            alt={education.title}
            className="
    h-full
    md:w-32
    lg:w-36
    object-contain
    transition-transform
    duration-500
    group-hover:scale-110
  "
          />
        </div>

        {/* Content Section */}
        <div
          className="
    flex-1
    p-5
    flex
    flex-col
    justify-center
    text-left
  "
        >
          <h3
            className="
  text-xl
  lg:text-2xl
  font-bold
  text-white
  group-hover:text-cyan-300
"
          >
            {education.title}
          </h3>

          <p className="text-white/70 text-sm lg:text-base">
            {education.degree}
          </p>

          <div className="mt-3 flex items-center gap-3 text-sm lg:text-base">
            <span className="text-white/60">{education.year}</span>
            <span className={`font-semibold ${statusColor}`}>
              {education.status}
            </span>
          </div>

          {/* Status Badge */}
          <div className="mt-3">
            <span
              className={`
                inline-block 
                px-2 
                py-1
                rounded-full 
                text-xs 
                font-semibold
                ${
                  education.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }
              `}
            >
              {education.status}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default EducationView;
