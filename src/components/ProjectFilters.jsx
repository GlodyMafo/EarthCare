import React, { useState } from 'react';

const ProjectFilters = ({ onFilterChange }) => {
  const [region, setRegion] = useState('');
  const [treeType, setTreeType] = useState('');
  const [status, setStatus] = useState('');

  const applyFilters = () => {
    onFilterChange({ region, treeType, status });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">Filters</h2>
      <div>
        <label className="block text-gray-700">Region:</label>
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <label className="block text-gray-700">Tree Type:</label>
        <input
          type="text"
          value={treeType}
          onChange={(e) => setTreeType(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <label className="block text-gray-700">Status:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={applyFilters}
          className="bg-primary text-white p-2 rounded"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default ProjectFilters;
