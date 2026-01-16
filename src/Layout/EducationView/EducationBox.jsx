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

export default EducationBox;
