import React from "react";
import { Link } from "react-router-dom"; // Assurez-vous d'utiliser React Router

const courses = [
  {
    id: 1,
    title: "Introduction à la Reforestation",
    description:
      "Apprenez les bases de la reforestation et pourquoi elle est cruciale pour notre planète.",
    duration: "2h",
    level: "Débutant",
    image: "https://img.freepik.com/photos-gratuite/vue-enfants-pratiquant-activite-sante-bien-etre_23-2151402069.jpg?t=st=1724248394~exp=1724251994~hmac=64ae29d0cdfa11e3922780bbc6ea6fb698b27d3b6f7904f2553562976f24254e&w=1060",
  },
  {
    id: 2,
    title: "Techniques de Plantation",
    description:
      "Découvrez les techniques de plantation les plus efficaces pour assurer la survie des jeunes arbres.",
    duration: "3h",
    level: "Intermédiaire",
    image: "https://img.freepik.com/photos-gratuite/vue-laterale-mains-tenant-plante_23-2149894676.jpg?size=626&ext=jpg&ga=GA1.2.474125436.1717409147&semt=ais_hybrid",
  },
  {
    id: 3,
    title: "Impact Environnemental",
    description:
      "Analysez les impacts environnementaux des projets de reforestation et comment les maximiser.",
    duration: "2.5h",
    level: "Avancé",
    image: "https://img.freepik.com/photos-gratuite/collage-concept-changement-climatique_23-2149129761.jpg?ga=GA1.1.474125436.1717409147&semt=ais_hybrid",
  },
  {
    id: 4,
    title: "Gestion de Projets de Reforestation",
    description:
      "Apprenez à gérer des projets de reforestation de A à Z, de la planification à l'évaluation des résultats.",
    duration: "4h",
    level: "Expert",
    image: "https://img.freepik.com/photos-gratuite/gros-plan-homme-ecriture-cahier_23-2148894050.jpg?ga=GA1.1.474125436.1717409147&semt=ais_hybrid",
  },
];

// Données fictives pour les suggestions de cours
const suggestedCourses = [
  {
    id: 5,
    title: "Avancement en Techniques de Plantation",
    description:
      "Approfondissez vos connaissances en techniques de plantation pour des projets plus complexes.",
    duration: "3h",
    level: "Avancé",
    image: "https://img.freepik.com/photos-gratuite/reboisement-fait-par-groupe-benevoles_23-2149500873.jpg?ga=GA1.1.474125436.1717409147&semt=ais_hybrid",
  },
  {
    id: 6,
    title: "Stratégies de Conservation des Forêts",
    description:
      "Découvrez des stratégies pour la conservation des forêts à long terme.",
    duration: "2.5h",
    level: "Intermédiaire",
    image: "https://img.freepik.com/photos-gratuite/reboisement-fait-par-groupe-benevoles_23-2149500823.jpg?ga=GA1.1.474125436.1717409147&semt=ais_hybrid",
  },
];

const EducationCreative = () => {
  return (
    <div>
      
    <div className="p-6 px-40">
      <h1 className="text-2xl font-bold mb-6">Éducation Créative</h1>

      {/* Grille de Cours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {courses.map((course) => (
          <div key={course.id} className="">
            <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div class="relative mx-4 mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div class="p-6">
                <h4 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-primary antialiased">
                  {course.title}
                </h4>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {course.description}
                </p>
                <p className="text-gray-800 font-bold">
                  Durée: {course.duration}
                </p>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Niveau: {course.level}
                </p>
              </div>
              <div class="p-6 pt-0">
                <Link
                  to={`/cours/${course.id}`}
                  className="mt-1 block text-blue-500 hover:underline"
                >
                  <button
                    data-ripple-light="true"
                    type="button"
                    class="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all  hover:bg-secondary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Ouvrir
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-10 mb-10" />

      {/* Suggestions de Cours */}
      <div>
        <h2 className="text-xl font-bold">Suggestions de Cours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {suggestedCourses.map((course) => (
            <div key={course.id} className="">
              <div class="relative flex w-80 mt-16 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div class="p-6">
                  <h4 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-primary antialiased">
                    {course.title}
                  </h4>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {course.description}
                  </p>
                  <p className="text-gray-800 font-bold">
                    Durée: {course.duration}
                  </p>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Niveau: {course.level}
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <Link
                    to={`/cours/${course.id}`}
                    className="mt-1 block text-blue-500 hover:underline"
                  >
                    <button
                      data-ripple-light="true"
                      type="button"
                      class="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all  hover:bg-secondary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Ouvrir
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default EducationCreative;
