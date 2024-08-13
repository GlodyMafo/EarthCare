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
            description: 'Reforestation project in the Amazon.',
            latitude: -3.4653,
            longitude: -62.2159,
            imageUrl: 'https://via.placeholder.com/400x200',
          },
          {
            id: 1,
            name: 'Green Forest Initiative',
            description: 'Reforestation project in the Amazon.',
            latitude: -3.4653,
            longitude: -62.2159,
            imageUrl: 'https://via.placeholder.com/400x200',
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
