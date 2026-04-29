import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectGalleryModal from "./ProjectGalleryModal";
import projectsData from "../../data/projectsData";

/**
 * Projects Section — Featured Projects
 * -----------------------------------
 * Showcases 3 real field projects in a responsive card grid.
 * Each card opens a photo gallery modal with grid + fullscreen lightbox.
 *
 * Layout:
 *   - Mobile : 1 column
 *   - Tablet : 2 columns
 *   - Desktop: 3 columns
 *
 * The section is fully self-contained and uses only Tailwind CSS
 * for styling — no external libraries required.
 * Fully responsive heading added.
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Delay clearing selectedProject to allow exit animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="projects"
      className="px-6 py-16 md:px-12 md:py-24 lg:px-24 bg-[#F7F7F7]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Main Section Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e1946] mb-4">
            Projects
          </h2>

          {/* Subtitle / Date Range */}
          <span className="inline-block text-sm md:text-base font-medium text-[#455697] tracking-wider uppercase mb-2">
            Dec 2024 – Apr 2026 | Field Work – BVD
          </span>

          {/* Decorative underline */}
          <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-[#455697]" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tag={project.tag}
              tagColor={project.tagColor}
              image={project.image}
              points={project.points}
              onViewPhotos={() => openModal(project)}
            />
          ))}
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <ProjectGalleryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;

