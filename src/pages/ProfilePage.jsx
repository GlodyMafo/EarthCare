// // pages/ProfilePage.js
// import React, { useEffect, useState } from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
//   PieChart, Pie, Cell, BarChart, Bar, Label
// } from 'recharts';
// import users from '../hooks/users.json'; 

// import { jsPDF } from 'jspdf';

// const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);
//   const [selectedProject, setSelectedProject] = useState('');
//   const [newContribution, setNewContribution] = useState(0);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     setUser(loggedInUser);
//   }, []);

//   const handleContribution = () => {
//     if (selectedProject && newContribution > 0) {
//       console.log(`Contribution de $${newContribution} au projet ${selectedProject}`);
//     }
//   };

//   const generateProfilePDF = () => {
//     if (!user) return;
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text(`Rapport de Profil - ${user.name}`, 20, 20);

//     doc.setFontSize(12);
//     doc.text('Détails du Profil:', 20, 40);
//     doc.text(`Nom: ${user.name}`, 20, 50);
//     doc.text(`Description: ${user.description}`, 20, 60);

//     doc.text('Contributions Totales:', 20, 80);
//     user.contributions.forEach((contribution, index) => {
//       doc.text(
//         `${contribution.date} - ${contribution.projectName} : $${contribution.amount} - Impact: ${contribution.impact}`,
//         20,
//         90 + index * 10
//       );
//     });

//     doc.text('Récompenses et Achievements:', 20, 130);
//     user.achievements.forEach((achievement, index) => {
//       doc.text(
//         `${achievement.title} : ${achievement.description} - Date: ${achievement.date}`,
//         20,
//         140 + index * 10
//       );
//     });

//     doc.save(`${user.name}_rapport_profil.pdf`);
//   };

//   if (!user) {
//     return <p>Chargement...</p>;
//   }

//   return (
//     <div className="p-6">
//       {/* Header de Profil */}
//       <div className="flex items-center mb-6">
//         <img src={user.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
//         <div>
//           <h1 className="text-2xl font-bold">{user.name}</h1>
//           <p>{user.description}</p>
//           <button className="mt-2 bg-blue-500 text-white p-2 rounded">Modifier Profil</button>
//         </div>
//       </div>

//       {/* Tableau de Bord */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-4">Tableau de Bord</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Vue d'Ensemble des Contributions */}
//           <div className="border p-4 rounded-lg">
//             <h3 className="text-lg font-semibold">Contributions Totales</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={user.contributions}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="projectName">
//                   <Label value="Projet" offset={0} position="insideBottomRight" />
//                 </XAxis>
//                 <YAxis>
//                   <Label value="Montant" angle={-90} position="insideLeft" />
//                 </YAxis>
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="amount" fill="#8884d8" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Impact Personnel */}
//           <div className="border p-4 rounded-lg">
//             <h3 className="text-lg font-semibold">Impact Personnel</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={user.contributions}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="year">
//                   <Label value="Année" offset={0} position="insideBottomRight" />
//                 </XAxis>
//                 <YAxis>
//                   <Label value="Impact" angle={-90} position="insideLeft" />
//                 </YAxis>
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="impact" stroke="#82ca9d" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Récompenses et Achievements */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-4">Récompenses et Achievements</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {user.achievements.map((achievement, index) => (
//             <div key={index} className="border p-4 rounded-lg">
//               <h3 className="text-lg font-semibold">{achievement.title}</h3>
//               <p>{achievement.description}</p>
//               <p className="font-bold">Date: {achievement.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Historique des Contributions */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-4">Historique des Contributions</h2>
//         <ul>
//           {user.contributions.map((contribution, index) => (
//             <li key={index} className="border p-4 mb-2 rounded-lg">
//               <p><strong>Projet:</strong> {contribution.projectName}</p>
//               <p><strong>Montant:</strong> ${contribution.amount}</p>
//               <p><strong>Date:</strong> {contribution.date}</p>
//               <p><strong>Impact:</strong> {contribution.impact}</p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Section Contribution */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-4">Faire une Contribution</h2>
//         <input
//           type="text"
//           placeholder="Nom du Projet"
//           className="border p-2 mb-4 w-full"
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Montant de la Contribution"
//           className="border p-2 mb-4 w-full"
//           value={newContribution}
//           onChange={(e) => setNewContribution(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 text-white p-2 rounded w-full"
//           onClick={handleContribution}
//         >
//           Contribuer
//         </button>
//       </div>

//       {/* Télécharger le Rapport de Profil */}
//       <div>
//         <button
//           className="bg-blue-500 text-white p-2 rounded"
//           onClick={generateProfilePDF}
//         >
//           Télécharger le Rapport de Profil
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Label
} from 'recharts';
import { jsPDF } from 'jspdf';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState('');
  const [newContribution, setNewContribution] = useState(0);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUser(loggedInUser);
  }, []);

  const handleContribution = () => {
    if (selectedProject && newContribution > 0) {
      console.log(`Contribution de $${newContribution} au projet ${selectedProject}`);
    }
  };

  const generateProfilePDF = () => {
    if (!user) return;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(`Rapport de Profil - ${user.name}`, 20, 20);

    doc.setFontSize(12);
    doc.text('Détails du Profil:', 20, 40);
    doc.text(`Nom: ${user.name}`, 20, 50);
    doc.text(`Description: ${user.description}`, 20, 60);

    doc.text('Contributions Totales:', 20, 80);
    user.contributions.forEach((contribution, index) => {
      doc.text(
        `${contribution.date} - ${contribution.projectName} : $${contribution.amount} - Impact: ${contribution.impact}`,
        20,
        90 + index * 10
      );
    });

    doc.text('Récompenses et Achievements:', 20, 130);
    user.achievements.forEach((achievement, index) => {
      doc.text(
        `${achievement.title} : ${achievement.description} - Date: ${achievement.date}`,
        20,
        140 + index * 10
      );
    });

    doc.save(`${user.name}_rapport_profil.pdf`);
  };

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="p-6">
      {/* Header de Profil */}
      <div className="flex items-center mb-6">
        <img src={user.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p>{user.description}</p>
          <button className="mt-2 bg-blue-500 text-white p-2 rounded">Modifier Profil</button>
        </div>
      </div>

      {/* Tableau de Bord */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Tableau de Bord</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Vue d'Ensemble des Contributions */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Contributions Totales</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={user.contributions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="projectName">
                  <Label value="Projet" offset={0} position="insideBottomRight" />
                </XAxis>
                <YAxis>
                  <Label value="Montant" angle={-90} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Impact Personnel */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Impact Personnel</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={user.contributions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year">
                  <Label value="Année" offset={0} position="insideBottomRight" />
                </XAxis>
                <YAxis>
                  <Label value="Impact" angle={-90} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="impact" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Récompenses et Achievements */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Récompenses et Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {user.achievements.map((achievement, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{achievement.title}</h3>
              <p>{achievement.description}</p>
              <p className="font-bold">Date: {achievement.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Historique des Contributions */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Historique des Contributions</h2>
        <ul>
          {user.contributions.map((contribution, index) => (
            <li key={index} className="border p-4 mb-2 rounded-lg">
              <p><strong>Projet:</strong> {contribution.projectName}</p>
              <p><strong>Montant:</strong> ${contribution.amount}</p>
              <p><strong>Date:</strong> {contribution.date}</p>
              <p><strong>Impact:</strong> {contribution.impact}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Section Contribution */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Faire une Contribution</h2>
        <input
          type="text"
          placeholder="Nom du Projet"
          className="border p-2 mb-4 w-full"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        />
        <input
          type="number"
          placeholder="Montant de la Contribution"
          className="border p-2 mb-4 w-full"
          value={newContribution}
          onChange={(e) => setNewContribution(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded w-full"
          onClick={handleContribution}
        >
          Contribuer
        </button>
      </div>

      {/* Télécharger le Rapport de Profil */}
      <div>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={generateProfilePDF}
        >
          Télécharger le Rapport de Profil
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
