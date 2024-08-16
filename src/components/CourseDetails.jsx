import React from 'react';
import { useParams } from 'react-router-dom'; // Pour récupérer les paramètres d'URL

const courses = [
  {
    id: 1,
    title: 'Introduction à la Reforestation',
    description: 'Apprenez les bases de la reforestation et pourquoi elle est cruciale pour notre planète.',
    duration: '2h',
    level: 'Débutant',
    videoUrl: 'https://www.example.com/video1.mp4'
  },
  {
    id: 2,
    title: 'Techniques de Plantation',
    description: 'Découvrez les techniques de plantation les plus efficaces pour assurer la survie des jeunes arbres.',
    duration: '3h',
    level: 'Intermédiaire',
    videoUrl: 'https://www.example.com/video2.mp4'
  },
  // Ajoutez d'autres cours comme nécessaire
];

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{course.title}</h1>
      <div className="border rounded-lg overflow-hidden shadow-lg mb-6">
        <video className="w-full" controls>
          <source src={course.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-600 mb-2">{course.description}</p>
          <p className="text-gray-800 font-bold">Durée: {course.duration}</p>
          <p className="text-gray-500">Niveau: {course.level}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
