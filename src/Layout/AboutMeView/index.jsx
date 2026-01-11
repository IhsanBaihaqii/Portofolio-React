import myProfile from "../../assets/san1.jpg";
import { FaWhatsapp, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

function AboutMeView() {
  return (
    <section
      id="about"
      className="
        min-h-screen flex items-center
        px-6 md:px-[10%] bg-[#ffffff15]
      "
    >
      <div className="w-full">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 pt-20">
          About <span className="text-cyan-400">Me</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div
            className="
              w-[300px] h-[300px] md:w-[380px] md:h-[380px]
              rounded-2xl
              flex items-center justify-center
              shadow-[0_0_40px_rgba(0,240,255,0.3)]
            "
          >
            <img
              src={myProfile}
              alt="Ihsan Baihaqi"
              className="
                w-[92%] h-[92%]
                rounded-xl
                object-cover
                border-4 border-slate-900
              "
            />
          </div>

          {/* Text */}
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl font-semibold text-cyan-400 mb-4">
              Saya Ihsan Baihaqi
            </h3>

            <p className="text-white/80 mb-10">
              Digital Marketing | Web Developer | IT Business Development | Data
              Science
            </p>

            <p className="text-white leading-relaxed mb-6 text-justify lg:text-left">
              Saya Ihsan Baihaqi, lahir di Saentis pada 04 Maret 2006. Saat ini
              saya berkuliah di{" "}
              <span className="text-cyan-400 font-medium">
                Politeknik Ganesha Medan
              </span>{" "}
              jurusan Manajemen Informatika.
              <br />
              Saya memiliki ketertarikan dan keahlian di bidang teknologi,
              digital marketing, pengembangan website, serta data science.
            </p>

            {/* Social Icons */}
            <div className="flex flex-col gap-4 mb-4">
              {[
                {
                  href: "https://wa.me/6285765178178",
                  icon: <FaWhatsapp className="text-xl" />,
                  text: "0857-6519-8178",
                },
                {
                  href: "mailto:ihsan104209@gmail.com",
                  icon: <FaEnvelope className="text-xl" />,
                  text: "ihsan104209@gmail.com",
                },
                {
                  href: "https://maps.app.goo.gl/UUxPXfY5PErfKBCB7",
                  icon: <FaMapMarkedAlt className="text-xl" />,
                  text: "Dusun I, Musyawarah A - Saentis, Kec. Percut Sei Tuan",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
        flex items-center gap-4
        px-4 py-3
        rounded-xl
        bg-white/10 text-white
        hover:bg-cyan-400 hover:text-slate-900
        transition-all duration-300
      "
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base break-all">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeView;
