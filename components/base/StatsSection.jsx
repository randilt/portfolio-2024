import React from "react";

const StatsSection = () => {
  return (
    <div>
      <div className="stats-container" style={{ zIndex: 10 }}>
        <div className="shadow-md text-white bg-gradient-to-l from-black via-gray-900 to-black max-w-2xl flex flex-col items-start sm:flex-row justify-between rounded-md mx-auto p-8">
          <div className="flex flex-col my-2">
            <p className="text-6xl font-extrabold md:text-center">3+</p>
            <span className="ml-2 mt-2 md:text-center ">
              Companies Worked With
            </span>
          </div>

          <div className="flex flex-col my-2">
            <p className="text-6xl font-extrabold">8+</p>
            <span className="ml-2 mt-2">Projects</span>
          </div>
          <div className="flex flex-col my-2">
            <p className="text-6xl font-extrabold">100%</p>
            <span className="ml-2 mt-2">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
