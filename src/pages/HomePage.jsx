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

import React from "react";
import Map from "../components/Map";
import Fundraiser from "../components/Fundraiser";
import useFetchProjects from "../hooks/useFetchProjects";

const HomePage = () => {
  const { data: projects, error } = useFetchProjects();

  if (error) return <div>Error loading projects</div>;

  const handleDonate = (projectId) => {
    alert(`Donate to project ${projectId}`);
  };

  return (
    <>
      <div className="bg-[url('src/images/bgh.jpg')] bg-cover bg-center h-screen">
        <div className="bg-black bg-opacity-50 p-8 text-white h-screen text-center">
          <h1 className="text-5xl font-bold mt-40 mb-20">
            RENDS LA TERRE MEILLEURE
          </h1>
          <p className="mb-20 mx-[250px] text-xl">
            Participe aux projets de reforestation à travers le monde tout en
            ayant des mises à jour en temps réel et une transparence totale sur
            vos contributions et l'impact environnemental.
          </p>
          <button className="bg-white text-primary px-8 py-4 tracking-wide font-bold rounded transition-transform transform hover:bg-green-100 hover:shadow-lg hover:scale-10">
            TROUVER UN PROJET
          </button>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-4xl  font-bold mt-10 mb-5">
          POURQUOI UTILISER LA PLATEFORME <br />
          EARTHCARE
        </h2>
        <p className="px-[250px] text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem
          corporis totam provident aspernatur fugiat dolorum id reiciendis quis
          dolore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Delectus laborum, minima eius nam quo expedita pariatur quae aliquam
          blanditiis eveniet.
        </p>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">
          Suivi des Projets de Reforestation
        </h1>
        <Map />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Fundraiser
              key={project.id}
              project={project}
              onDonate={handleDonate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
