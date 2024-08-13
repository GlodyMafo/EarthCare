import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={project.imageUrl} alt={project.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{project.name}</h2>
        <p className="text-gray-700 mt-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
