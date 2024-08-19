// src/pages/Projets.js
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Gallery } from "../components/GAllery";

// Données fictives des projets
const allProjects = [
  {
    id: 1,
    name: "Projet A",
    region: "Europe",
    treeType: "Chêne",
    status: "En cours",
    impactPrediction: "30% de CO2 réduit d'ici 5 ans",
    fundingGoal: 10000,
    currentFunding: 3000,
    imageUrl: "https://via.placeholder.com/150", // Image principale
    photos: [
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
    ],
  },
  {
    id: 2,
    name: "Projet B",
    region: "Europe",
    treeType: "Érable",
    status: "Complété",
    impactPrediction: "20% de biodiversité restaurée",
    fundingGoal: 15000,
    currentFunding: 15000,
    imageUrl: "https://via.placeholder.com/150", // Image principale
    photos: [
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
    ],
  },
  {
    id: 3,
    name: "Projet C",
    region: "Amérique",
    treeType: "Séquoia",
    status: "En cours",
    impactPrediction: "50% d'amélioration de la qualité de l'air",
    fundingGoal: 20000,
    currentFunding: 5000,
    imageUrl: "https://via.placeholder.com/150", // Image principale
    photos: [
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
      "https://via.placeholder.com/200x150",
    ],
  },

];

// Données fictives des statistiques générales
const generalData = {
  1: [
    {
      year: 2020,
      treesPlanted: 500,
      funding: 3000,
      contributions: 3000,
      goalsAchieved: 10,
    },
    {
      year: 2021,
      treesPlanted: 800,
      funding: 6000,
      contributions: 3000,
      goalsAchieved: 20,
    },
    {
      year: 2022,
      treesPlanted: 1200,
      funding: 9000,
      contributions: 3000,
      goalsAchieved: 30,
    },
    {
      year: 2023,
      treesPlanted: 1500,
      funding: 9500,
      contributions: 3000,
      goalsAchieved: 40,
    },
  ],
  2: [
    {
      year: 2019,
      treesPlanted: 300,
      funding: 15000,
      contributions: 15000,
      goalsAchieved: 50,
    },
    {
      year: 2020,
      treesPlanted: 600,
      funding: 15000,
      contributions: 15000,
      goalsAchieved: 60,
    },
    {
      year: 2021,
      treesPlanted: 900,
      funding: 15000,
      contributions: 15000,
      goalsAchieved: 70,
    },
    {
      year: 2022,
      treesPlanted: 1200,
      funding: 15000,
      contributions: 15000,
      goalsAchieved: 80,
    },
  ],
  3: [
    {
      year: 2021,
      treesPlanted: 200,
      funding: 5000,
      contributions: 5000,
      goalsAchieved: 5,
    },
    {
      year: 2022,
      treesPlanted: 600,
      funding: 10000,
      contributions: 5000,
      goalsAchieved: 10,
    },
    {
      year: 2023,
      treesPlanted: 1000,
      funding: 15000,
      contributions: 5000,
      goalsAchieved: 15,
    },
  ],
};

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

const Projets = () => {
  const [projects, setProjects] = useState(allProjects);
  const [regionFilter, setRegionFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [contributions, setContributions] = useState({});
  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  useEffect(() => {
    setProjects(
      allProjects.filter(
        (project) =>
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
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? { ...project, currentFunding: project.currentFunding + amount }
          : project
      )
    );
  };

  const handleDetailClick = (project) => {
    setSelectedProject(selectedProject === project.id ? null : project.id);
  };

  return (
    <div className="">
      <div className="flex flex-wrap align-center bg-gray-200 ">
        <div className="m-6">
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

        <p className="pl-4 m-6">
          Parcourez les projets en cours et ceux terminés. Chaque projet a un
          impact mesurable sur la planète.
        </p>
      </div>

      {/* Section des projets en cours */}
      <div className="flex h-auto">
        <div className="w-[25%] ">
        <img className="h-[800px]" src="https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      <div className="75%">
        <h2 className="text-xl font-bold mb-4 pl-10 pt-4 ">Projets en cours</h2>
        <div className="mx-4 ">
          {projects
            .filter((project) => project.status === "En cours")
            .map((project) => (
              <div key={project.id} className="p-4  rounded-lg">
                <div>
                  <div class="group flex flex-col shadow-lg justify-start mt-4 mb-20 items-start gap-2 w-80 h-56 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                    <div
                      class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200"
                      alt="image here"
                    >
                      <img
                        className=" rounded-lg w-40 h-32"
                        src={project.imageUrl}
                        alt=""
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p>
                      <strong>Région:</strong> {project.region}
                    </p>
                    <p>
                      <strong>Type d'arbre:</strong> {project.treeType}
                    </p>
                    <p>
                      <strong>Statut:</strong> {project.status}
                    </p>

                    <div className="flex justify-around">
                      <button className="bg-primary text-white p-2 rounded mt-4 mr-2">
                        Donate
                      </button>

                      <button
                        className="bg-primary text-white p-2 rounded mt-4"
                        onClick={() => handleDetailClick(project)}
                      >
                        {selectedProject === project.id ? "Masquer" : "Détails"}
                      </button>
                    </div>
                  </div>
                </div>


                {selectedProject === project.id && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold pb-8">
                      Statistiques Générales
                    </h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={generalData[project.id]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year">
                          <Label
                            value="Année"
                            offset={0}
                            position="insideBottomRight"
                          />
                        </XAxis>
                        <YAxis>
                          <Label
                            value="Valeur"
                            angle={-90}
                            position="insideLeft"
                          />
                        </YAxis>
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="treesPlanted"
                          stroke="#8884d8"
                          name="Arbres Plantés"
                        />
                        <Line
                          type="monotone"
                          dataKey="funding"
                          stroke="#82ca9d"
                          name="Financement"
                        />
                        <Line
                          type="monotone"
                          dataKey="contributions"
                          stroke="#ffc658"
                          name="Contributions"
                        />
                        <Line
                          type="monotone"
                          dataKey="goalsAchieved"
                          stroke="#ff7300"
                          name="Objectifs Atteints"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={generalData[project.id]}
                          dataKey="funding"
                          nameKey="year"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                        >
                          {generalData[project.id].map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                    <h4 className="text-lg font-semibold pb-8">Photos du projet :</h4>

                    <div className="grid gap-4">
                      <div>
                        <img
                          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                          src={active}
                          alt=""
                        />
                      </div>
                      <div className="grid grid-cols-5 gap-4">
                        {project.photos.map((photo, index) => (
                          <div key={index}>
                            <img
                              onClick={() => setActive(photo)}
                              src={photo}
                              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                              alt={`Project ${project.id} photo ${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      </div>

      <hr className=" mt-" />

      {/* Section des projets terminés */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 pl-6">Projets Terminés</h2>

        

        <div className="grid grid-cols-2">
          {projects
            .filter((project) => project.status === "Complété")
            .map((project) => (
              <div key={project.id} className="p-4 pl-6 rounded-lg">
                <div class="group flex flex-col shadow-lg justify-start mt-4 mb-20 items-start gap-2 w-80 h-56 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                  <div
                    class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200"
                    alt="image here"
                  >
                    <img
                      className=" rounded-lg w-40 h-32"
                      src={project.imageUrl}
                      alt=""
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p>
                    <strong>Région:</strong> {project.region}
                  </p>
                  <p>
                    <strong>Type d'arbre:</strong> {project.treeType}
                  </p>
                  <p>
                    <strong>Statut:</strong> {project.status}
                  </p>

                  <div className="flex justify-around">
                    <button className="bg-primary text-white p-2 rounded mt-4 mr-2">
                      Donate
                    </button>

                    <button
                      className="bg-primary text-white p-2 rounded mt-4"
                      onClick={() => handleDetailClick(project)}
                    >
                      {selectedProject === project.id ? "Masquer" : "Détails"}
                    </button>
                  </div>
                </div>

                {selectedProject === project.id && (
                  <div className="mt-4">
                    <h4 className="text-lg mb-6 font-semibold">
                      Statistiques Générales
                    </h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={generalData[project.id]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year">
                          <Label
                            value="Année"
                            offset={0}
                            position="insideBottomRight"
                          />
                        </XAxis>
                        <YAxis>
                          <Label
                            value="Valeur"
                            angle={-90}
                            position="insideLeft"
                          />
                        </YAxis>
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="treesPlanted"
                          stroke="#8884d8"
                          name="Arbres Plantés"
                        />
                        <Line
                          type="monotone"
                          dataKey="funding"
                          stroke="#82ca9d"
                          name="Financement"
                        />
                        <Line
                          type="monotone"
                          dataKey="contributions"
                          stroke="#ffc658"
                          name="Contributions"
                        />
                        <Line
                          type="monotone"
                          dataKey="goalsAchieved"
                          stroke="#ff7300"
                          name="Objectifs Atteints"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={generalData[project.id]}
                          dataKey="funding"
                          nameKey="year"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                        >
                          {generalData[project.id].map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                    <h4 className="text-lg font-semibold pb-8">Photos du projet :</h4>

                    <div className="grid gap-4">
                      <div>
                        <img
                          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                          src={active}
                          alt=""
                        />
                      </div>
                      <div className="grid grid-cols-5 gap-4">
                        {project.photos.map((photo, index) => (
                          <div key={index}>
                            <img
                              onClick={() => setActive(photo)}
                              src={photo}
                              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                              alt={`Project ${project.id} photo ${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
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
