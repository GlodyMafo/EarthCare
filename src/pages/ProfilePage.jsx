import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Label
} from 'recharts';

import { jsPDF } from 'jspdf';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

const fakeUser = {
  profilePicture: 'https://via.placeholder.com/150',
  name: 'Alice Dupont',
  description: 'Passionnée par la nature et les projets de reforestation.'
};

const fakeContributions = [
  { projectName: 'Projet A', amount: 150, date: '2024-01-15', projectId: 1, year: 2024, impact: 300 },
  { projectName: 'Projet B', amount: 200, date: '2024-03-22', projectId: 2, year: 2024, impact: 400 },
  { projectName: 'Projet C', amount: 100, date: '2024-06-30', projectId: 3, year: 2024, impact: 200 },
];

const fakeAchievements = [
  { title: 'Récompense Verte', description: 'Débloqué pour avoir contribué à 3 projets différents.', date: '2024-07-01' },
  { title: 'Champion de la Reforestation', description: 'Débloqué pour avoir contribué plus de 500 $ au total.', date: '2024-07-15' },
];

const Profil = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [newContribution, setNewContribution] = useState(0);

  const handleContribution = () => {
    if (selectedProject && newContribution > 0) {
      console.log(`Contribution de $${newContribution} au projet ${selectedProject}`);
    }
  };

  const generateProfilePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(`Rapport de Profil - ${fakeUser.name}`, 20, 20);

    doc.setFontSize(12);
    doc.text('Détails du Profil:', 20, 40);
    doc.text(`Nom: ${fakeUser.name}`, 20, 50);
    doc.text(`Description: ${fakeUser.description}`, 20, 60);

    doc.text('Contributions Totales:', 20, 80);
    fakeContributions.forEach((contribution, index) => {
      doc.text(
        `${contribution.date} - ${contribution.projectName} : $${contribution.amount} - Impact: ${contribution.impact}`,
        20,
        90 + index * 10
      );
    });

    doc.text('Récompenses et Achievements:', 20, 130);
    fakeAchievements.forEach((achievement, index) => {
      doc.text(
        `${achievement.title} : ${achievement.description} - Date: ${achievement.date}`,
        20,
        140 + index * 10
      );
    });

    doc.save(`${fakeUser.name}_rapport_profil.pdf`);
  };

  return (
    <div className="p-6">
      {/* Header de Profil */}
      <div className="flex items-center mb-6">
        <img src={fakeUser.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
        <div>
          <h1 className="text-2xl font-bold">{fakeUser.name}</h1>
          <p>{fakeUser.description}</p>
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
              <BarChart data={fakeContributions}>
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
              <LineChart data={fakeContributions}>
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
          {fakeAchievements.map((achievement, index) => (
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
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th>Date</th>
              <th>Projet</th>
              <th>Montant</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            {fakeContributions.map((contribution, index) => (
              <tr key={index}>
                <td>{contribution.date}</td>
                <td>{contribution.projectName}</td>
                <td>${contribution.amount}</td>
                <td><a href={`/projets/${contribution.projectId}`} className="text-blue-500">Voir Détails</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visualisation des Contributions */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Visualisation des Contributions</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={fakeContributions} dataKey="amount" nameKey="projectName" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
              {fakeContributions.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Contribuer à un Projet */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Contribuer à un Projet</h2>
        <select
          className="border p-2 mb-2 w-full"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">Sélectionner un Projet</option>
          <option value="1">Projet A</option>
          <option value="2">Projet B</option>
          <option value="3">Projet C</option>
        </select>
        <input
          type="number"
          className="border p-2 mb-2 w-full"
          placeholder="Montant à contribuer"
          value={newContribution}
          onChange={(e) => setNewContribution(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={handleContribution}
        >
          Contribuer
        </button>
      </div>

      {/* Télécharger le rapport en PDF */}
      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={generateProfilePDF}
      >
        Télécharger le rapport en PDF
      </button>
    </div>
  );
};

export default Profil;
