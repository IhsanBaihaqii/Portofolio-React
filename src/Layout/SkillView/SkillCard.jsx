export default function SkillCard({ skill }) {
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
