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
      <div className="text-center h-screen">
        <h2 className="text-4xl  font-bold mt-20 mb-10">
          POURQUOI UTILISER LA PLATEFORME <br />
          EARTHCARE
        </h2>
        <p className="px-[250px] text-xl mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem
          corporis totam provident aspernatur fugiat dolorum id reiciendis quis
          dolore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Delectus laborum, minima eius nam quo expedita pariatur quae aliquam
          blanditiis eveniet.
        </p>

        <div className="pb-10">
          <div className="flex justify-around">
            <div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
              <div class="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
              <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                <span class="text-2xl font-semibold">George Johnson</span>
                <p>Support Specialist</p>
              </div>
              <a
                class="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
                href="#"
              >
                Voir les projets
              </a>
            </div>

            <div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
              <div class="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
              <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                <span class="text-2xl font-semibold">George Johnson</span>
                <p>Support Specialist</p>
              </div>
              <a
                class="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
                href="#"
              >
                Voir les projets
              </a>
            </div>

            <div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
              <div class="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
              <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                <span class="text-2xl font-semibold">George Johnson</span>
                <p>Support Specialist</p>
              </div>
              <a
                class="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
                href="#"
              >
                Voir les projets
              </a>
            </div>
          </div>
        </div>
      </div>


<div className="bg-[url('src/images/bgh.jpg')] bg-cover bg-center h-[350px] ">
<div className="bg-black bg-opacity-50 p-8 text-white h-[350px] text-center flex justify-around wrap pt-32 mx-20">
  <div className="text-center">
    <p className="text-3xl font-bold mb-2">500+</p>
    <p className="text-2xl ">LOREM</p>
  </div>

  <div className="text-center">
    <p className="text-3xl font-bold mb-2">500+</p>
    <p className="text-2xl ">LOREM</p>
  </div>

  <div className="text-center">
    <p className="text-3xl font-bold mb-2">500+</p>
    <p className="text-2xl ">LOREM</p>
  </div>

  <div className="text-center">
    <p className="text-3xl font-bold mb-2">500+</p>
    <p className="text-2xl ">LOREM</p>
  </div>
  
</div>
</div>


      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl mt-10 font-bold mb-8 text-center">
          SUIVEZ ET CONTRIBUEZ A UN PROJET
        </h1>

        <p className="mx-[300px] text-center mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic unde ea culpa voluptatibus eos ratione quod neque ex, obcaecati a, reiciendis explicabo!
        </p>
        <Map />

        <div className="mt-8 ml-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Fundraiser
              key={project.id}
              project={project}
              onDonate={handleDonate}
            />
          ))}
        </div>

        <div>
          <h2 className="text-3xl mt-32 font-bold text-center">
            NOS PARTENAIRES
          </h2>
          <div className="flex justify-around">
            <div className="w-[250px]">
            <img src="public/Artboard 1xhdpi.png" alt="" />
            </div>

            <div className="w-[250px]">
            <img src="public/Artboard 1xhdpi.png" alt="" />
            </div>

            <div className="w-[250px]">
            <img src="public/Artboard 1xhdpi.png" alt="" />
            </div>

            <div className="w-[250px]">
            <img src="public/Artboard 1xhdpi.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
