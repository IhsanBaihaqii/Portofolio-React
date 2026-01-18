import ListSkill from "./ListSkill";
import SkillCard from "./SkillCard";

function SkillView() {
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
            {ListSkill.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillView;
