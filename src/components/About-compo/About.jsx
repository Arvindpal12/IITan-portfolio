import React from "react";
import { IoArrowForward } from "react-icons/io5";
import avtar3 from "../../assets/avtar3.webp";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#0e1946] shadow-xl mx-0 md:mx-20 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-left">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row">
          <div className="flex justify-center pt-8">
            <img
              className="md:h-80 transition-transform duration-700 ease-in-out hover:scale-125 pt-4 md:pt-6 max-w-sm w-full"
              src={avtar3}
              alt="About img"
            />
          </div>
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                 Team Leadership & Management
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 I am committed to contributing my expertise to an organization where leadership, accountability, and continuous improvement are valued.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Project Coordination & Execution
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am experienced in coordinating with government bodies, vendors, and internal teams, making me effective in both structured and dynamic work environments.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  CSC Operations & Technical Expertise
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 My experience managing CSC (Common Service Center) operations has given me a deep understanding of citizen-facing service delivery, digital workflows, and operational compliance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-6" />
              <span className="w-96">
                {/* <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  📊 Data Visualization Analyst
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  A Data Visualization Analyst focuses on presenting data
                  through charts, dashboards, and visual reports. They use tools
                  like Power BI or other visualization tools to transform
                  complex data into easy-to-understand visuals.
                </p> */}
                <div className="text-sm pt-4 flex justify-start">
                  <a
                    href="/Ritik Resume 5545.docx"
                    download="/Ritik Resume 5545.docx"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base rounded-lg shadow-lg shadow-blue-900/50 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    Download Cv
                    <IoArrowForward
                      className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      size={20}
                    />
                  </a>
                </div>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
