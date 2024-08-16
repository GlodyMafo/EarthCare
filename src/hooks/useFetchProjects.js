// import { useState, useEffect } from 'react';
// import api from '../services/api';

// const useFetchProjects = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await api.get('/projects');
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return { data, error };
// };

// export default useFetchProjects;

import { useState, useEffect } from 'react';

const useFetchProjects = (filters = {}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Simuler la récupération des données
        const projects = [
          // Données fictives
          {
            id: 1,
            name: 'Green Forest Initiative',
            latitude: -3.4653,
            longitude: -62.2159,
            imageUrl: 'https://via.placeholder.com/400x200',
            progress: 75,
            description: 'Projet visant à restaurer la forêt amazonienne en plantant des arbres indigènes.',
            fundingGoal: 10000,
            fundingRaised: 7500,
            daysLeft: 10
          },
          {
            id: 2,
            name: 'Green Forest Initiative',
            description: 'Reforestation project in the Amazon.',
            latitude: -10.4653,
            longitude: -50.2159,
            imageUrl: 'https://via.placeholder.com/400x200',
            fundingGoal: 10000,
            fundingRaised: 7500,
            daysLeft: 10,
            progress: 75,
          },
          {
            id: 3,
            name: 'Green Forest Initiative',
            description: 'Reforestation project in the Amazon.',
            latitude: -5.4653,
            longitude: -100.2159,
            imageUrl: 'https://media.istockphoto.com/id/1044284546/fr/photo/for%C3%AAt-atlantique-au-br%C3%A9sil-mata-atlantica.jpg?b=1&s=612x612&w=0&k=20&c=B2Gdsu5diaJ3ovhQjiGClAC4W1SITQpQn73NsgYX4z8=',
            fundingGoal: 10000,
            fundingRaised: 7500,
            daysLeft: 10,
            progress: 75,
          },
          // Ajoute plus de projets si nécessaire
        ];

        // Appliquer les filtres si nécessaires
        const filteredProjects = projects.filter(project => {
          return Object.keys(filters).every(key => filters[key] === '' || project[key] === filters[key]);
        });

        setData(filteredProjects);
      } catch (error) {
        setError(error);
      }
    };

    fetchProjects();
  }, [filters]); // S'assure que les filtres sont les seules dépendances

  return { data, error };
};

export default useFetchProjects;
