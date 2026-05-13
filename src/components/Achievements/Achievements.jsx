import React, { useState } from "react";
import uthanCover from "../../assets/uthanproject.jpg";
import namasteCover from "../../assets/namaste-project.png";
import childCover from "../../assets/chaild-project.jpg";
import achivement from "../../assets/achivement.jpeg";
import achivements1 from "../../assets/achivements1.jpeg";
import achivements2 from "../../assets/achivements2.jpeg";
import achivements4 from "../../assets/achivements4.jpeg";
import achivements5 from "../../assets/achivements5.jpeg";
import achivements6 from "../../assets/achivements6.jpeg";
import ProjectGalleryModal from "../Projects/ProjectGalleryModal";


const achievementsData = [
  {
    id: 1,
    title: "Ayushman Card Registration Project",
    tag: "Social Protection",
    tagColor: "green",
    image: achivements2,
    // achivements3 was referenced but not defined/imported -> fix runtime crash
    gallery: [achivements2, achivements1, achivements2],
    points: [
      "Worked in health camps under the Ayushman Bharat card registration project.",
      "Guided beneficiaries through eligibility verification and documentation processes.",
      "Managed digital registration and Ayushman Card generation activities.",
      "Conducted awareness campaigns regarding government health insurance benefits.",
      "Successfully facilitated approximately 45,000 Ayushman Card registrations during the project period.",
    ],
  },
  {
    id: 2,
    title: "Namaste Bharat Project",
    tag: "Social Outreach",
    tagColor: "orange",
    image: namasteCover,
    gallery: [namasteCover, achivements4, achivements5],
    points: [
      "Participated in social outreach and community engagement initiatives",
      "Assisted in organizing awareness camps and beneficiary registration activities",
      "Helped people access government schemes and social welfare benefits",
      "Maintained communication with local communities and stakeholders",
    ],
  },
  {
    id: 3,
    title: "E-Shram Card Registration Project",
    tag: "Child Rights",
    tagColor: "purple",
    image: childCover,
    gallery: [childCover, achivements6, achivement],
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

  const getTagClasses = (tagColor) => {
    const colors = {
      green: 'bg-green-100 text-green-800 border border-green-200',
      orange: 'bg-orange-100 text-orange-800 border border-orange-200',
      purple: 'bg-purple-100 text-purple-800 border border-purple-200',
    };
    return colors[tagColor] || 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  return (
    <section id="achievements" className="py-16 md:py-24 lg:py-32 bg-[#F7F7F7] px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e1946] mb-4">
            Achievements
          </h2>
          <span className="inline-block text-sm md:text-base font-medium text-[#455697] tracking-wider uppercase mb-4">
            Field Work Accomplishments | Dec 2024 – Apr 2026
          </span>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#455697] to-[#0e1946]" />
        </div>

        {/* Content - Stacked layout all screens */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16 max-w-4xl mx-auto">
          {achievementsData.map((ach) => (
            <div key={ach.id} className="group">
              {/* Image - TOP */}
              <div 
                className="relative h-64 md:h-72 lg:h-80 w-full mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-700 hover:scale-[1.02] mb-6 md:mb-8 lg:mb-10"
                onClick={() => openGallery(ach)}
              >
                <img 
                  src={ach.image} 
                  alt={ach.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gallery Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl text-center shadow-2xl max-w-sm mx-4">
                    <svg className="w-12 h-12 mx-auto mb-3 text-[#455697]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{ach.title}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getTagClasses(ach.tagColor)}`}>
                      {ach.tag}
                    </span>
                    <p className="text-gray-600 mt-2 text-sm">Tap to view gallery</p>
                  </div>
                </div>
              </div>

              {/* Content - BOTTOM with gap */}
              <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 mx-auto max-w-3xl">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6 mb-6 pb-4 border-b border-gray-200">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0e1946] mb-3 lg:mb-0 lg:flex-1">{ach.title}</h3>
                  <span className={`px-4 py-2 rounded-xl text-sm md:text-base font-semibold self-start lg:self-center ${getTagClasses(ach.tagColor)}`}>
                    {ach.tag}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                  {ach.points.join(" ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Modal */}
        {selectedAchievement && (
          <ProjectGalleryModal
            isOpen={isGalleryOpen}
            onClose={closeGallery}
            project={selectedAchievement}
          />
        )}
      </div>
    </section>
  );
};

export default Achievements;

