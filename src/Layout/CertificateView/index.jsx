import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import certificatesData from "./ListCertificate";

import CertificateCard from "./CertificateCard";

function CertificateView() {
  const [currentPage, setCurrentPage] = useState(1);

  // Certificates per page based on screen size
  const getCertificatesPerPage = () => {
    if (window.innerWidth < 768) return 3; // Mobile
    if (window.innerWidth < 1024) return 6; // Tablet
    return 9; // Desktop
  };

  const [certificatesPerPage, setCertificatesPerPage] = useState(
    getCertificatesPerPage(),
  );

  // Update certificates per page on resize
  useState(() => {
    const handleResize = () => {
      setCertificatesPerPage(getCertificatesPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(certificatesData.length / certificatesPerPage);
  const startIndex = (currentPage - 1) * certificatesPerPage;
  const endIndex = startIndex + certificatesPerPage;
  const currentCertificates = certificatesData.slice(startIndex, endIndex);

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
          totalPages,
        );
      }
    }

    return pages;
  };

  return (
    <section
      id="certificates"
      className="min-h-screen pt-20 px-6 md:px-[10%] bg-[#0a0a1a] relative overflow-hidden pb-5"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-cyan-400">Certificates</span>
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Semua sertifikat yang telah saya peroleh sepanjang perjalanan belajar
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-10">
        {currentCertificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="text-white/60 text-sm">
            Showing {startIndex + 1}-
            {Math.min(endIndex, certificatesData.length)} of{" "}
            {certificatesData.length} certificates
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
                ),
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

          {/* Certificates per page info */}
          <div className="text-white/40 text-sm hidden md:block">
            {certificatesPerPage} certificates per page
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificateView;
