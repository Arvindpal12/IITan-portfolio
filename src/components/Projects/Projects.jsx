import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const handleDemo1 = () => {
    window.open("https://drive.google.com/file/d/1_Dk3F4FKIIuOBy_QsvjrhFnzdMD-jJ9U/view?usp=sharing"); // Placeholder for demo
  };
  const handleSource1 = () => {
    window.open("https://github.com/Mohit0416/Retail-Sales-Analysis-SQL-.git ");
  };

  const handleDemo2 = () => {
    window.open("https://drive.google.com/file/d/13U3iXC8npWbjSM0qvuQxvT0ysfxkRjIy/view?usp=drive_link/");
  };
  const handleSource2 = () => {
    window.open(
      "https://github.com/Mohit0416/coffee-shop-sales.git ",
    );
  };

  const handleDemo3 = () => {
    window.open("https://drive.google.com/file/d/1jwTk0TcDEQeayLvGKnMrF4KpfRpp-uu5/view?usp=drive_link ");
  };
  const handleSource3 = () => {
    window.open("https://github.com/Mohit0416/-Sales-Performance-Dashboard-Blinkit.git ");
  };

  return (
    <div id="projects" className="p-10 md:p-24 text-white bg-[#F7F7F7]">
      <h1 className="text-2xl md:text-4xl text-black font-bold"> Projects</h1>
      <div className="py-12 px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
        <ProjectCard
          title="
Blinkit Sales Analysis Dashboard
"
          main="In this project, I analyzed Blinkit sales data to understand product performance, sales trends, and customer purchasing behavior. "
          onDemoClick={handleDemo3}
          onSourceClick={handleSource3}
        />
        <ProjectCard
          title="Coffee Shop Sales Dashboard"
          main="In this project, I analyzed coffee shop sales data to understand sales performance and customer purchasing patterns. The dataset was cleaned and organized using Microsoft Excel."
          onDemoClick={handleDemo2}
          onSourceClick={handleSource2}
        />

        <ProjectCard
          title="Retail Sales Analysis Using SQL"
          main="In this project, I analyzed a retail sales dataset using SQL to understand sales performance, customer behavior, and product category trends.."
          onDemoClick={handleDemo1}
          onSourceClick={handleSource1}
        />
      </div>
    </div>
  );
};

export default Projects;
