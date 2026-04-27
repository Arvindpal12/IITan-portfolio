import React from "react";
import avtar from "../../assets/avtar.png";
import {
  FaUsers,
  FaProjectDiagram,
  FaDesktop,
  FaComment,
  FaLightbulb,
  FaClock,
  FaChartBar,
} from "react-icons/fa";
import { SiGithub, SiMysql, SiTailwindcss } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { UserIcon } from "@heroicons/react/24/solid";
import { FaWordpress, FaPhp } from "react-icons/fa";
// bg-slate-900/50
const Skills = () => {
  return (
    <div
      id="Skills"
      className="w-full p-4 sm:p-8 md:p-16 lg:p-20 xl:p-24 mx-auto max-w-7xl"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold text-left pl-4 sm:pl-0 mb-8">
        Skills
      </h1>
      <div className="space-y-12">
        {/* Upper Container: Icons + Descriptions */}
        <div className="w-full max-w-6xl mx-auto p-8 sm:p-12 md:p-16 lg:px-20 lg:py-16 rounded-2xl bg-[#0e1946] backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 p-6 sm:p-8 md:p-12 lg:p-16 w-full justify-items-center">
            <span className="p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm flex items-center justify-center rounded-3xl shadow-2xl border border-zinc-800/50 transition-all duration-500 hover:scale-110 hover:-translate-y-3 active:scale-105 w-full h-20 sm:h-24 md:h-28 lg:h-32 aspect-square">
              <FaUsers color="#4CAF50" size={36} />
            </span>
            <span className="p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm flex items-center justify-center rounded-3xl shadow-2xl border border-zinc-800/50 transition-all duration-500 hover:scale-110 hover:-translate-y-3 active:scale-105 w-full h-20 sm:h-24 md:h-28 lg:h-32 aspect-square">
              <FaProjectDiagram color="#00758F" size={36} />
            </span>
            <span className="p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm flex items-center justify-center rounded-3xl shadow-2xl border border-zinc-800/50 transition-all duration-500 hover:scale-110 hover:-translate-y-3 active:scale-105 w-full h-20 sm:h-24 md:h-28 lg:h-32 aspect-square">
              <FaClock color="#F2C811" size={36} />
            </span>
            <span className="p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm flex items-center justify-center rounded-3xl shadow-2xl border border-zinc-800/50 transition-all duration-500 hover:scale-110 hover:-translate-y-3 active:scale-105 w-full h-20 sm:h-24 md:h-28 lg:h-32 aspect-square">
              <FaComment color="#3776AB" size={36} />
            </span>
          </div>
        </div>
        {/* Descriptions below icons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12 pt-12 border-t border-zinc-700/50 w-full">
          <div className="group p-4 sm:p-8 md:p-10 bg-[#0e1946] backdrop-blur-md rounded-3xl hover:bg-zinc-900/70 transition-all duration-300 flex flex-col h-[250px] sm:h-[280px] justify-between hover:shadow-2xl">
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-4 group-hover:text-emerald-400">
              Team Leadership & Project Handling
            </p>
            <ul className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl space-y-1 sm:space-y-1 font-medium">
              <p>
                Overseeing the day-to-day operations of a Common Service Centre,
                including managing staff, ensuring service delivery, maintaining
                records, handling citizen queries, and ensuring smooth
                functioning of government and digital services.
              </p>
            </ul>
          </div>
          <div className="group p-4 sm:p-8 md:p-10 bg-[#0e1946] backdrop-blur-md rounded-3xl hover:bg-zinc-900/70 transition-all duration-300 flex flex-col h-[250px] sm:h-[280px] justify-between hover:shadow-2xl">
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-4 group-hover:text-emerald-400">
              CSC Center Management
            </p>
            <ul className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl space-y-1 sm:space-y-1 font-medium">
              <p>
                Overseeing the day-to-day operations of a Common Service Centre,
                including managing staff, ensuring service delivery, maintaining
                records, handling citizen queries, and ensuring smooth
                functioning of government and digital services.
              </p>
            </ul>
          </div>
          <div className="group p-4 sm:p-8 md:p-10 bg-[#0e1946] backdrop-blur-md rounded-3xl hover:bg-zinc-900/70 transition-all duration-300 flex flex-col h-[250px] sm:h-[280px] justify-between hover:shadow-2xl">
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-4 group-hover:text-emerald-400">
              Effective Communication & Coordination
            </p>
            <ul className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl space-y-1 sm:space-y-1 font-medium">
              <p>
                Skilled in conveying information clearly and professionally
                across all levels — team members, stakeholders, and clients.
                Ensures seamless coordination between departments to avoid gaps,
                reduce delays, and maintain alignment on shared objectives.
              </p>
            </ul>
          </div>
          <div className="group p-4 sm:p-8 md:p-10 bg-[#0e1946] backdrop-blur-md rounded-3xl hover:bg-zinc-900/70 transition-all duration-300 flex flex-col h-[250px] sm:h-[280px] justify-between hover:shadow-2xl">
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-4 group-hover:text-emerald-400">
              Advanced Computer Skills
            </p>
            <ul className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl space-y-1 sm:space-y-1 font-medium">
              <p>
                Proficient in utilizing a wide range of computer applications,
                software tools, and digital platforms to enhance productivity
                and efficiency. Includes expertise in MS Office Suite (Word,
                Excel, PowerPoint), data entry and management, internet
                research, email communication.
              </p>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 bg-[#0e1946] backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 items-center lg:items-start w-full max-w-6xl mx-auto shadow-2xl">
            <div className="flex flex-wrap group [perspective:1000px] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              <img
                className="max-w-48 sm:max-w-56 md:max-w-64 h-auto mx-auto transition-transform duration-700 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d] rounded-lg shadow-lg bg-white"
                src={avtar}
                alt=""
              />
            </div>
            <div className="text-white w-full md:w-80 lg:w-96 p-4 sm:p-6 flex flex-col items-center lg:items-start">
              <h2 className="leading-tight text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">
                Qualification
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight font-bold mb-2">
                Graduation :- B.TECH (CSE),LALIT NARAYN MITHILA UNIVERSITY, BIHAR
              </p>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1">
                <li>
                  12th-(BOARD OF SECONDARY AND HIGHER EDUCATION)
                </li>
                <li>10th-(HARYANA BOARD OF SCHOOL EDUCATION)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
