
import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Label
} from 'recharts';
import { jsPDF } from 'jspdf';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState('');
  const [newContribution, setNewContribution] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard'); // État pour l'onglet actif
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour la pop-up de modification

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
    doc.text(`Email: ${user.email}`, 20, 60);
    doc.text(`Description: ${user.description}`, 20, 70);

    doc.text('Contributions Totales:', 20, 90);
    user.contributions.forEach((contribution, index) => {
      doc.text(
        `${contribution.date} - ${contribution.projectName} : $${contribution.amount} - Impact: ${contribution.impact}`,
        20,
        100 + index * 10
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

  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
    setIsModalOpen(false);
  };

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="p-6 px-20">
      {/* Header de Profil */}
      <div className="flex items-center mb-10">
        <img  src={user.profilePicture} alt="Profile" className="w-24 h-24 border border-primary border-4 rounded-full mr-6" />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.description}</p>
          <p>{user.country}</p>

          <div className="flex items-center">
            <button
              className="mt-2 bg-primary transition hover:bg-secondary text-white p-2 rounded mr-4"
              onClick={() => setIsModalOpen(true)}
            >
              Modifier Profil
            </button>
            <div>
              <button
                className="mt-2 transition border-2 text-primary border-primary hover:bg-secondary hover:text-white hover:border-secondary transition p-2 rounded"
                onClick={generateProfilePDF}
              >
                Télécharger le Rapport de Profil
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de navigation des sections */}
      <div className="mb-6">
        <nav className="flex space-x-4 border-b mb-4">
          <button
            className={`pb-2 ${activeTab === 'dashboard' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Tableau de Bord
          </button>
          <button
            className={`pb-2 ${activeTab === 'achievements' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('achievements')}
          >
            Récompenses et Achievements
          </button>
          <button
            className={`pb-2 ${activeTab === 'contributions' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('contributions')}
          >
            Historique des Contributions
          </button>
          <button
            className={`pb-2 ${activeTab === 'makeContribution' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('makeContribution')}
          >
            Faire une Contribution
          </button>
        </nav>
      </div>

      {/* Affichage de la section active */}
      {activeTab === 'dashboard' && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Tableau de Bord</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      )}

      {activeTab === 'achievements' && (
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
      )}

      {activeTab === 'contributions' && (
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
      )}

      {activeTab === 'makeContribution' && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Faire une Contribution</h2>
          <select
            className="border p-2 mb-4 w-full"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            <option value="">Sélectionner un projet</option>
            {user.contributions.map((contribution, index) => (
              <option key={index} value={contribution.projectName}>
                {contribution.projectName}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Montant"
            className="border p-2 mb-4 w-full"
            value={newContribution}
            onChange={(e) => setNewContribution(Number(e.target.value))}
          />
          <button
            className="bg-primary transition hover:bg-secondary text-white p-2 rounded"
            onClick={handleContribution}
          >
            Contribuer
          </button>
        </div>
      )}

      {/* Formulaire de modification du profil en pop-up */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Modifier le Profil</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedUser = {
                  ...user,
                  name: e.target.name.value,
                  email: e.target.email.value,
                  description: e.target.description.value,
                  country: e.target.country.value,
                };
                handleSaveProfile(updatedUser);
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700">Nom</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                  type="text"
                  name="description"
                  defaultValue={user.description}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Pays</label>
                <input
                  type="text"
                  name="country"
                  defaultValue={user.country}
                  className="border p-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-primary transition hover:bg-secondary text-white px-4 py-2 rounded"
                >
                  Sauvegarder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
