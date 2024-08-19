import React from "react";
import Map from "../components/MapComponent";
import Fundraiser from "../components/Fundraiser";
import useFetchProjects from "../hooks/useFetchProjects";
import MapComponent from "../components/MapComponent";
import Homecard from "../components/Homecard";

const HomePage = () => {
  const { data: projects, error } = useFetchProjects();

  if (error) return <div>Error loading projects</div>;

  const handleDonate = (projectId) => {
    alert(`Donate to project ${projectId}`);
  };

  return (
    <>
      <div className="bg-[url('https://images.unsplash.com/photo-1593069567131-53a0614dde1d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-screen">
        <div className="bg-black bg-opacity-50 p-8 text-white h-screen text-center">
          <h1 className="text-5xl font-bold mt-28 mb-20">
            Agissez pour un avenir plus vert dès aujourd'hui
          </h1>
          <p className="mb-20 mx-[250px] text-xl">
            EarthCare est une plateforme dédiée à la protection de notre planète
            à travers des projets de reforestation et d'initiatives écologiques.
            Rejoignez nous pour contribuer à des projets impactants, suivre vos
            contributions, et voir l'impact réel de vos actions.
          </p>
          <button className="bg-white text-primary px-8 py-4 tracking-wide font-bold rounded transition-transform transform hover:bg-green-100 hover:shadow-lg hover:scale-10">
            TROUVER UN PROJET
          </button>
        </div>
      </div>
      <div className="text-center h-screen">
        <h2 className="text-4xl  font-bold mt-8 mb-8">
          Pourquoi EarthCare ?
        </h2>
        <p className="px-[250px] text-xl mb-16">
          Chez EarthCare, nous croyons que chaque geste compte. Notre plateforme
          permet à chacun de contribuer à la protection de notre planète de
          manière tangible et transparente. En soutenant des projets de
          reforestation et d'initiatives écologiques, vous participez activement
          à la restauration de la biodiversité et à la lutte contre le
          changement climatique.
        </p>
        <div className="bg-[url('public/abres.jpg')] bg-cover bg-center h-[350px] h-100 ">
        <div className="flex justify-around flex-wrap">
          <Homecard
            domaine="Projets durables"
            description="Découvrez une variété de projets visant à restaurer des forêts."
            icon="public/sauver-la-planete.png"
          />
          <Homecard
            domaine="Suivez votre impact"
            description="Consultez en temps réel l'impact de vos contributions sur l'environnement."
            icon="public/impact-environnemental.png"
          />
          <Homecard
            domaine="Communauté engagée"
            description="Connectez-vous avec d'autres passionnés de l'environnement."
            icon="public/partners.png"
          />
        </div>
      </div>

   
         
      </div>

      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Suivez et Contribuez à un Projet
        </h1>

        <p className="mx-[300px] text-center mb-10 text-xl">
          Rejoignez l'effort pour un avenir durable ! Choisissez parmi une
          variété de projets de reforestation et d'initiatives écologiques, et
          contribuez à la restauration de notre planète.
        </p>

        <div className="">
          <MapComponent />
        </div>
      </div>

      <div className="mt-[200px] bg-[url('https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[350px] ">
        <div className="bg-black bg-opacity-50 p-8 text-white h-[350px] text-center flex justify-around wrap pt-32">
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">150,000+</p>
            <p className="text-2xl ">Arbres Plantés</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold mb-2">250+</p>
            <p className="text-2xl ">Projets Réalisés</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold mb-2">15+</p>
            <p className="text-2xl ">Pays Impactés</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold mb-2">500+</p>
            <p className="text-2xl ">Hectares Restaurés</p>
          </div>
        </div>
      </div>



      <div className="bg-white">
        <h2 className="text-3xl pt-8 font-bold text-center">
          Nos partenaires
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
    </>
  );
};

export default HomePage;
