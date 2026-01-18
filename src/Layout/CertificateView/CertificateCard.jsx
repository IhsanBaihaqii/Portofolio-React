import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
function CertificateCard({ certificate }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
      {/* certificate Image */}
      <div className="relative h-68 overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* certificate Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {certificate.title}
        </h3>
        <p className="text-white/70 mb-4 text-sm">{certificate.description}</p>

        {/* Tags */}
        <div className="relative flex flex-wrap gap-2 pb-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/70 backdrop-blur-sm text-white">
            {certificate.tahun}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {certificate.link && (
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 transition-all"
            >
              <FaExternalLinkAlt className="text-sm" />
              View Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
