// import { useState, useEffect } from 'react';
// import api from '../services/api';

// const useFetchProjectDetails = (id) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjectDetails = async () => {
//       try {
//         const response = await api.get(`/projects/${id}`);
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       }
//     };

//     fetchProjectDetails();
//   }, [id]);

//   return { data, error };
// };

// export default useFetchProjectDetails;

import { useState, useEffect } from 'react';

const useFetchProjectDetails = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simuler la récupération des détails du projet
    const fetchProjectDetails = () => {
      try {
        // Données fictives
        const projectDetails = {
          id: 1,
          name: 'Green Forest Initiative',
          description: 'A comprehensive project aimed at restoring the Amazon rainforest.',
          imageUrl: 'https://via.placeholder.com/800x400',
          reports: [
            { id: 1, title: 'Impact Report 2023', summary: 'Annual impact report for 2023.', link: '#' },
          ],
        };

        setData(projectDetails);
      } catch (error) {
        setError(error);
      }
    };

    fetchProjectDetails();
  }, [id]);

  return { data, error };
};

export default useFetchProjectDetails;

