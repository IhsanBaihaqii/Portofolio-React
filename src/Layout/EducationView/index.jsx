import { FaGraduationCap } from "react-icons/fa";

import educationList from "./educationList";
import EducationBox from "./EducationBox";

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
          {educationList.map((edu, index) => (
            <EducationBox key={index} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationView;
