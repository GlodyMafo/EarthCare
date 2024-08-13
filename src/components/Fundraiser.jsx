import React from 'react';

const Fundraiser = ({ project, onDonate }) => {
  const handleDonate = () => {
    // Logic to handle donation
    onDonate(project.id);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold">{project.name}</h2>
      <p className="text-gray-700">{project.description}</p>
      <button
        onClick={handleDonate}
        className="bg-secondary text-white p-2 rounded mt-4"
      >
        Donate
      </button>
    </div>
  );
};

export default Fundraiser;
