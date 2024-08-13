// import React from 'react';
// import Map from '../components/Map';
// import Fundraiser from '../components/Fundraiser';
// import useFetchProjects from '../hooks/useFetchProjects';

// const HomePage = () => {
//   const { data: projects } = useFetchProjects();

//   const handleDonate = (projectId) => {
//     // Logic to handle donation
//     alert(`Donate to project ${projectId}`);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Suivi des Projets de Reforestation</h1>
//       <Map />
//       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {projects.map(project => (
//           <Fundraiser key={project.id} project={project} onDonate={handleDonate} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import Map from '../components/Map';
import Fundraiser from '../components/Fundraiser';
import useFetchProjects from '../hooks/useFetchProjects';

const HomePage = () => {
  const { data: projects, error } = useFetchProjects();

  if (error) return <div>Error loading projects</div>;

  const handleDonate = (projectId) => {
    alert(`Donate to project ${projectId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Suivi des Projets de Reforestation</h1>
      <Map />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <Fundraiser key={project.id} project={project} onDonate={handleDonate} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;


