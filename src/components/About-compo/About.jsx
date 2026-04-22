import React from "react";
import { IoArrowForward } from "react-icons/io5";
import avtar3 from "../../assets/avtar3.webp";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden item-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
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
                  📊 Data Analyst
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  A Data Analyst collects, cleans, and analyzes data to identify
                  patterns and insights. They use tools like Excel, SQL, and
                  Power BI to create reports and dashboards that help businesses
                  make data-driven decisions.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  📈 Business Analyst
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  A Business Analyst analyzes business processes and data to
                  identify problems and opportunities for improvement. They work
                  with data insights to support better strategies and improve
                  business performance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  📑 MIS Executive
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  An MIS Executive manages and maintains business data and
                  reports using tools like Microsoft Excel. They create daily,
                  weekly, and monthly reports to help management monitor
                  business performance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  📊 Data Visualization Analyst
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  A Data Visualization Analyst focuses on presenting data
                  through charts, dashboards, and visual reports. They use tools
                  like Power BI or other visualization tools to transform
                  complex data into easy-to-understand visuals.
                </p>
                <div className="text-sm pt-4 flex justify-start">
                  <a
                    href="/mohitcv-2.pdf"
                    download="Mohit-Resume.pdf"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base rounded-lg shadow-lg shadow-blue-900/50 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    Download Resume
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
