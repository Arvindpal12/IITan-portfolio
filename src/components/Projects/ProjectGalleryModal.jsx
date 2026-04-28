import React, { useState, useEffect, useCallback } from "react";

/**
 * ProjectGalleryModal Component
 * -----------------------------
 * Field-work photo gallery modal with:
 * - Grid view of project photos
 * - Fullscreen lightbox with prev/next navigation
 * - Back button to return from lightbox to grid
 * - Click outside or Escape to close
 *
 * Props:
 *   isOpen       {boolean}  Whether the modal is visible
 *   onClose      {function} Callback to close the modal entirely
 *   project      {object}   Project data: { title, gallery[] }
 */
const ProjectGalleryModal = ({ isOpen, onClose, project }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Handle modal open/close animation
  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setShowModal(false);
        setLightboxOpen(false);
        setCurrentImageIndex(0);
      }, 300);
    }
  }, [isOpen]);

  // Handle keyboard events
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }
      if (e.key === "ArrowLeft" && lightboxOpen) {
        goToPrevious();
      }
      if (e.key === "ArrowRight" && lightboxOpen) {
        goToNext();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, lightboxOpen, onClose]);

  const goToPrevious = useCallback(() => {
    if (!project?.gallery) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  }, [project]);

  const goToNext = useCallback(() => {
    if (!project?.gallery) return;
    setCurrentImageIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  }, [project]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      if (lightboxOpen) {
        setLightboxOpen(false);
      } else {
        onClose();
      }
    }
  };

  if (!showModal || !project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
    >
      {/* Main Modal Content — Grid View */}
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          isAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        } ${lightboxOpen ? "hidden" : "block"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:scale-110"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-4 md:p-8 md:pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0e1946] pr-12">
            {project.title}
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500 leading-relaxed">
            Field work photos from the {project.tag} project.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="px-6 pb-6 md:px-8 md:pb-8">
          <h3 className="text-lg font-semibold text-[#0e1946] mb-3">
            Project Photos
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {project.gallery.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-gray-100"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo}
                  alt={`${project.title} photo ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-10 w-10 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Back to Grid Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 hover:scale-105"
            aria-label="Back to gallery"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back to Photos
          </button>

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 hover:scale-110"
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
            {currentImageIndex + 1} / {project.gallery.length}
          </div>

          {/* Previous Arrow */}
          {project.gallery.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 md:left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 hover:scale-110"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}

          {/* Main Image */}
          <div
            className="flex h-full w-full items-center justify-center p-16 md:p-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.gallery[currentImageIndex]}
              alt={`${project.title} photo ${currentImageIndex + 1}`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
            />
          </div>

          {/* Next Arrow */}
          {project.gallery.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 md:right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 hover:scale-110"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}

          {/* Thumbnail Strip */}
          {project.gallery.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-2">
              {project.gallery.map((photo, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-200 ${
                    index === currentImageIndex
                      ? "ring-2 ring-white scale-110"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                  src={photo}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectGalleryModal;

