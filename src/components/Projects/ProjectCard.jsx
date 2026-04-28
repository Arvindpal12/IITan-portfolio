import React from "react";

// Color map for tag badges — easy to extend with more colors
const tagStyles = {
  green: {
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-200",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    border: "border-orange-200",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    border: "border-purple-200",
  },
};

/**
 * ProjectCard Component
 * ---------------------
 * Displays a single project card with:
 * - Top image placeholder
 * - Colored category tag
 * - Project title
 * - Bullet-point description list
 * - "View Photos" button to open gallery modal
 *
 * Props:
 *   title        {string}   Project name
 *   tag          {string}   Category label (e.g. "Community Development")
 *   tagColor     {string}   Key for tagStyles map ("green" | "orange" | "purple")
 *   image        {string}   Path to project cover image
 *   points       {string[]} Array of bullet-point descriptions
 *   onViewPhotos {function} Callback when "View Photos" button is clicked
 */
const ProjectCard = ({ title, tag, tagColor, image, points, onViewPhotos }) => {
  // Get the correct Tailwind classes for the tag color, fallback to gray
  const style = tagStyles[tagColor] || {
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-200",
  };

  return (
    <div
      className="
        group flex flex-col w-full bg-white
        rounded-2xl overflow-hidden
        border border-gray-200
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl hover:border-gray-300
      "
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          src={image}
          alt={`${title} project image`}
          // If image is missing, a gray background shows instead of a broken icon
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-5 md:p-6">
        {/* Colored Tag / Badge */}
        <span
          className={`
            inline-flex self-start items-center rounded-full
            px-3 py-1 text-xs font-semibold tracking-wide uppercase
            border ${style.bg} ${style.text} ${style.border}
            mb-3
          `}
        >
          {tag}
        </span>

        {/* Project Title */}
        <h3 className="text-lg md:text-xl font-bold leading-tight text-[#0e1946]">
          {title}
        </h3>

        {/* Bullet Points */}
        <ul className="mt-4 flex flex-col gap-2">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed"
            >
              {/* Custom bullet marker */}
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#455697]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* View Photos Button */}
        <div className="mt-auto pt-5">
          <button
            onClick={onViewPhotos}
            className="
              inline-flex items-center justify-center gap-2
              w-full rounded-xl
              bg-[#455697] px-5 py-2.5
              text-sm font-semibold text-white
              transition-all duration-300
              hover:bg-[#3a4a80] hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            View Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

