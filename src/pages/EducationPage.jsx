
import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'utiliser React Router

const courses = [
  {
    id: 1,
    title: 'Introduction à la Reforestation',
    description: 'Apprenez les bases de la reforestation et pourquoi elle est cruciale pour notre planète.',
    duration: '2h',
    level: 'Débutant',
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 2,
    title: 'Techniques de Plantation',
    description: 'Découvrez les techniques de plantation les plus efficaces pour assurer la survie des jeunes arbres.',
    duration: '3h',
    level: 'Intermédiaire',
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 3,
    title: 'Impact Environnemental',
    description: 'Analysez les impacts environnementaux des projets de reforestation et comment les maximiser.',
    duration: '2.5h',
    level: 'Avancé',
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 4,
    title: 'Gestion de Projets de Reforestation',
    description: 'Apprenez à gérer des projets de reforestation de A à Z, de la planification à l\'évaluation des résultats.',
    duration: '4h',
    level: 'Expert',
    image: 'https://via.placeholder.com/300'
  }
];

// Données fictives pour les suggestions de cours
const suggestedCourses = [
  {
    id: 5,
    title: 'Avancement en Techniques de Plantation',
    description: 'Approfondissez vos connaissances en techniques de plantation pour des projets plus complexes.',
    duration: '3h',
    level: 'Avancé',
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 6,
    title: 'Stratégies de Conservation des Forêts',
    description: 'Découvrez des stratégies pour la conservation des forêts à long terme.',
    duration: '2.5h',
    level: 'Intermédiaire',
    image: 'https://via.placeholder.com/300'
  }
];

const EducationCreative = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Éducation Créative</h1>
      
      {/* Grille de Cours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {courses.map(course => (
          <div key={course.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-2">{course.description}</p>
              <p className="text-gray-800 font-bold">Durée: {course.duration}</p>
              <p className="text-gray-500">Niveau: {course.level}</p>
              <Link to={`/cours/${course.id}`} className="mt-4 block text-blue-500 hover:underline">
                Voir Détails
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Suggestions de Cours */}
      <div>
        <h2 className="text-xl font-bold mb-4">Suggestions de Cours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {suggestedCourses.map(course => (
            <div key={course.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-2">{course.description}</p>
                <p className="text-gray-800 font-bold">Durée: {course.duration}</p>
                <p className="text-gray-500">Niveau: {course.level}</p>
                <Link to={`/cours/${course.id}`} className="mt-4 block text-blue-500 hover:underline">
                  Voir Détails
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCreative;

