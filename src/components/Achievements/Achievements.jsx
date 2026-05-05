import React from "react";
import uthanCover from "../../assets/uthanproject.jpg";
import namasteCover from "../../assets/namaste-project.png";
import childCover from "../../assets/chaild-project.jpg";
import centerImage1 from "../../assets/center-image.jpeg";
import centerImage2 from "../../assets/center-image2.jpeg";
import centerImage5 from "../../assets/center-image5.jpeg";
import sceemImage1 from "../../assets/sceem-image.jpeg";
import sceemImage2 from "../../assets/sceem-image2.jpeg";
import centerImage4 from "../../assets/center-image-4.jpeg";
import ProjectGalleryModal from "../Projects/ProjectGalleryModal";
import { useState } from "react";

/**
 * Achievements Section — Field Work Accomplishments
 * Left: Achievement images + titles
 * Right: Detailed accomplishments
 */

const achievementsData = [
  {
    id: 1,
    title: "Uttan Project",
    tag: "Community Development",
    tagColor: "green",
    image: uthanCover,
    gallery: [uthanCover, centerImage1, sceemImage1],
    points: [
      "Worked on community development and social awareness activities",
      "Conducted field visits to identify local issues and connect with beneficiaries",
      "Supported awareness programs related to education, health, and livelihood improvement",
      "Coordinated with community members to ensure smooth project execution",
      
    ],
  },
  {
    id: 2,
    title: "Namaste Bharat Project",
    tag: "Social Outreach",
    tagColor: "orange",
    image: namasteCover,
    gallery: [namasteCover, centerImage2, sceemImage2],
    points: [
      "Participated in social outreach and community engagement initiatives",
      "Assisted in organizing awareness camps and beneficiary registration activities",
      "Helped people access government schemes and social welfare benefits",
      "Maintained communication with local communities and stakeholders",
      
    ],
  },
  {
    id: 3,
    title: "Child Marriage Awareness & Prevention",
    tag: "Child Rights",
    tagColor: "purple",
    image: childCover,
    gallery: [childCover, centerImage5, centerImage4],
    points: [
      "Spread awareness about prevention of child marriage in rural and local communities",
      "Conducted awareness sessions with families, youth, and community groups",
      "Supported campaigns focused on child rights, education, and women empowerment",
      "Coordinated with local authorities and community leaders for awareness drives",
     
    ],
  },
];

const Achievements = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openGallery = (achievement) => {
    setSelectedAchievement(achievement);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setTimeout(() => setSelectedAchievement(null), 300);
  };

  return (
    <section
      id="achievements"
      className="px-6 py-16 md:px-12 md:py-24 lg:px-24 bg-[#F7F7F7]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e1946] mb-4">
            Achievements
          </h2>
          <span className="inline-block text-sm md:text-base font-medium text-[#455697] tracking-wider uppercase mb-2">
            Field Work Accomplishments | Dec 2024 – Apr 2026
          </span>
          <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-[#455697]" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Images + Titles */}
          <div className="space-y-6">
            {achievementsData.map((ach) => (
              <div 
                key={ach.id} 
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-[#455697]" 
                onClick={() => openGallery(ach)}
              >
                <img 
                  src={ach.image} 
                  alt={ach.title}
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0e1946] mb-2 group-hover:text-[#455697]">{ach.title}</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-200">
                    {ach.tag}
                  </span>
                </div>
                {/* Gallery Hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center">
                    <svg className="mx-auto h-12 w-12 mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium tracking-wide">View Gallery</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Content / Points */}
          <div className="lg:pl-8 space-y-8">
            {achievementsData.map((ach) => (
              <div key={ach.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0e1946] mb-4 border-b border-[#455697]/20 pb-2">{ach.title}</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
                  {ach.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#455697] rounded-full mt-2 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Modal */}
        <ProjectGalleryModal
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          project={selectedAchievement}
        />
      </div>
    </section>
  );
};

export default Achievements;

