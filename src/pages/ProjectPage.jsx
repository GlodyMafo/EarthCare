
// src/pages/Projets.js
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, PieChart, Pie, Cell } from 'recharts';

// Données fictives des projets
const allProjects = [
  { id: 1, name: "Projet A", region: "Europe", treeType: "Chêne", status: "En cours", impactPrediction: "30% de CO2 réduit d'ici 5 ans", fundingGoal: 10000, currentFunding: 3000 },
  { id: 2, name: "Projet B", region: "Europe", treeType: "Érable", status: "Complété", impactPrediction: "20% de biodiversité restaurée", fundingGoal: 15000, currentFunding: 15000 },
  { id: 3, name: "Projet C", region: "Amérique", treeType: "Séquoia", status: "En cours", impactPrediction: "50% d'amélioration de la qualité de l'air", fundingGoal: 20000, currentFunding: 5000 },
];

// Données fictives des statistiques générales
const generalData = {
  1: [
    { year: 2020, treesPlanted: 500, funding: 3000, contributions: 3000, goalsAchieved: 10 },
    { year: 2021, treesPlanted: 800, funding: 6000, contributions: 3000, goalsAchieved: 20 },
    { year: 2022, treesPlanted: 1200, funding: 9000, contributions: 3000, goalsAchieved: 30 },
    { year: 2023, treesPlanted: 1500, funding: 9500, contributions: 3000, goalsAchieved: 40 },
  ],
  2: [
    { year: 2019, treesPlanted: 300, funding: 15000, contributions: 15000, goalsAchieved: 50 },
    { year: 2020, treesPlanted: 600, funding: 15000, contributions: 15000, goalsAchieved: 60 },
    { year: 2021, treesPlanted: 900, funding: 15000, contributions: 15000, goalsAchieved: 70 },
    { year: 2022, treesPlanted: 1200, funding: 15000, contributions: 15000, goalsAchieved: 80 },
  ],
  3: [
    { year: 2021, treesPlanted: 200, funding: 5000, contributions: 5000, goalsAchieved: 5 },
    { year: 2022, treesPlanted: 600, funding: 10000, contributions: 5000, goalsAchieved: 10 },
    { year: 2023, treesPlanted: 1000, funding: 15000, contributions: 5000, goalsAchieved: 15 },
  ],
};

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

const Projets = () => {
  const [projects, setProjects] = useState(allProjects);
  const [regionFilter, setRegionFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [contributions, setContributions] = useState({});

  useEffect(() => {
    setProjects(
      allProjects.filter(project => 
        (regionFilter === "All" || project.region === regionFilter) &&
        (statusFilter === "All" || project.status === statusFilter)
      )
    );
  }, [regionFilter, statusFilter]);

  const handleContribution = (projectId, amount) => {
    const updatedContributions = {
      ...contributions,
      [projectId]: (contributions[projectId] || 0) + amount,
    };
    setContributions(updatedContributions);
    setProjects(projects.map(project =>
      project.id === projectId
        ? { ...project, currentFunding: project.currentFunding + amount }
        : project
    ));
  };

  const handleDetailClick = (project) => {
    setSelectedProject(selectedProject === project.id ? null : project.id);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projets</h1>

      <div className="mb-6">
        <label className="mr-2">Région:</label>
        <select
          className="border p-2"
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          <option value="All">Toutes</option>
          <option value="Europe">Europe</option>
          <option value="Amérique">Amérique</option>
        </select>

        <label className="ml-4 mr-2">Statut:</label>
        <select
          className="border p-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">Tous</option>
          <option value="En cours">En cours</option>
          <option value="Complété">Complété</option>
        </select>
      </div>

      {/* Section des projets en cours */}
      <div>
        <h2 className="text-xl font-bold mb-4">Projets en cours</h2>
        <div className="grid grid-cols-1 gap-4">
          {projects.filter(project => project.status === "En cours").map(project => (
            <div key={project.id} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p><strong>Région:</strong> {project.region}</p>
              <p><strong>Type d'arbre:</strong> {project.treeType}</p>
              <p><strong>Statut:</strong> {project.status}</p>
              <p><strong>Prédiction d'Impact:</strong> {project.impactPrediction}</p>
              <p><strong>Financement Actuel:</strong> ${project.currentFunding} / ${project.fundingGoal}</p>
              <div>
                <input
                  type="number"
                  className="border p-2 mt-2 w-full"
                  placeholder="Montant à contribuer"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleContribution(project.id, parseFloat(e.target.value));
                      e.target.value = '';
                    }
                  }}
                />
                <button 
                  className="mt-2 bg-green-500 text-white p-2 rounded w-full"
                  onClick={() => handleContribution(project.id, 100)}
                >
                  Contribuer $100
                </button>
              </div>
              <button 
                className="mt-2 bg-gray-500 text-white p-2 rounded"
                onClick={() => handleDetailClick(project)}
              >
                {selectedProject === project.id ? "Masquer Détails" : "Voir Détails"}
              </button>
              {selectedProject === project.id && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Statistiques Générales</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={generalData[project.id]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year">
                        <Label value="Année" offset={0} position="insideBottomRight" />
                      </XAxis>
                      <YAxis>
                        <Label value="Valeur" angle={-90} position="insideLeft" />
                      </YAxis>
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="treesPlanted" stroke="#8884d8" name="Arbres Plantés" />
                      <Line type="monotone" dataKey="funding" stroke="#82ca9d" name="Financement" />
                      <Line type="monotone" dataKey="contributions" stroke="#ffc658" name="Contributions" />
                      <Line type="monotone" dataKey="goalsAchieved" stroke="#ff7300" name="Objectifs Atteints" />
                    </LineChart>
                  </ResponsiveContainer>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={generalData[project.id]} dataKey="funding" nameKey="year" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                        {generalData[project.id].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section des projets terminés */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Projets Terminés</h2>
        <div className="grid grid-cols-1 gap-4">
          {projects.filter(project => project.status === "Complété").map(project => (
            <div key={project.id} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p><strong>Région:</strong> {project.region}</p>
              <p><strong>Type d'arbre:</strong> {project.treeType}</p>
              <p><strong>Statut:</strong> {project.status}</p>
              <p><strong>Prédiction d'Impact:</strong> {project.impactPrediction}</p>
              <p><strong>Financement Actuel:</strong> ${project.currentFunding} / ${project.fundingGoal}</p>
              <button 
                className="mt-2 bg-gray-500 text-white p-2 rounded"
                onClick={() => handleDetailClick(project)}
              >
                {selectedProject === project.id ? "Masquer Détails" : "Voir Détails"}
              </button>
              {selectedProject === project.id && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Statistiques Générales</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={generalData[project.id]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year">
                        <Label value="Année" offset={0} position="insideBottomRight" />
                      </XAxis>
                      <YAxis>
                        <Label value="Valeur" angle={-90} position="insideLeft" />
                      </YAxis>
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="treesPlanted" stroke="#8884d8" name="Arbres Plantés" />
                      <Line type="monotone" dataKey="funding" stroke="#82ca9d" name="Financement" />
                      <Line type="monotone" dataKey="contributions" stroke="#ffc658" name="Contributions" />
                      <Line type="monotone" dataKey="goalsAchieved" stroke="#ff7300" name="Objectifs Atteints" />
                    </LineChart>
                  </ResponsiveContainer>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={generalData[project.id]} dataKey="funding" nameKey="year" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                        {generalData[project.id].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                 
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projets;
