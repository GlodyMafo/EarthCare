import React from 'react';

const Fundraiser = ({ project, onDonate }) => {
  const handleDonate = () => {
    // Logic to handle donation
    onDonate(project.id);
  };

  return (


<>


<div
  class="group flex flex-col shadow-lg justify-start mt-12 mb-20 items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300"
>
  <div
    class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200"
    alt="image here"
  > <img src={project.imageUrl} alt="" /></div>

  <div class="">
    <h2 class="text-2xl font-bold mb-2 text-gray-800">{project.name}</h2>
    <p class="text-gray-700 line-clamp-3">
    {project.description}
    </p>
  </div>
  <button
   onClick={handleDonate}
        className="bg-secondary text-white p-2 rounded mt-4"
  >
    Donate
  </button>
</div>
    </>
  );
};

export default Fundraiser;
