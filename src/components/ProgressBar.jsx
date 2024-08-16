import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-[350px] bg-gray-200 rounded-full h-4 mb-10">
      <div
        className="bg-green-600 h-4 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="text-center text-sm font-medium text-gray-700 mt-2">
        {progress}% complété
      </div>
    </div>
  );
};

export default ProgressBar;
