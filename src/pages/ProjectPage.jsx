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
import PaymentForm from "../components/PaymentForm";

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
  const [isModalOpen, setIsModalOpen] = useState(false); 

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
      <div className="flex flex-wrap align-center bg-gray-200 fixed w-full z-40">
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
      <div className="flex h-auto pt-[90px]">
        <div className="w-[25%] fixed z-40">
        <img className="" src="https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      <div className="pl-[380px] ">
        <h2 className="text-xl font-bold mb-4 pl-10 pt-4 ">Projets en cours</h2>
        <div className="mx-4 grid grid-cols-2 gap-20">
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
                      <button className="bg-primary text-white p-2 rounded mt-4 mr-2"  onClick={() => setIsModalOpen(true)}>
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
      <div className="mt-8 pl-[380px]">
        <h2 className="text-xl font-bold mb-4 pl-10">Projets Terminés</h2>

        

        <div className="grid grid-cols-2">
          {projects
            .filter((project) => project.status === "Complété")
            .map((project) => (
              <div key={project.id} className="p-4 pl-10 rounded-lg">
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
      
      {/* Formulaire de payment du profil en pop-up */}
      {isModalOpen && (
        <div className="fixed mb-[480px] inset-0 flex items-center justify-center z-50">
          <div className="rounded-lg h-[150px]  w-[600px]">
          


          <div className="min-w-screen min-h-screen flex items-center justify-center px-5 pb-10 pt-4">
      <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px' }}>
     
        <div className="p-2 ">
          <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
        </div>
        <div className="mb-3 flex -mx-2">
          <div className="px-2">
            <label htmlFor="type1" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-500"
                name="type"
                id="type1"
                defaultChecked
              />
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="h-8 ml-3"
                alt="Type 1"
              />
            </label>
          </div>
          <div className="px-2">
            <label htmlFor="type2" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-500"
                name="type"
                id="type2"
              />
              <img
                src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                className="h-8 ml-3"
                alt="Type 2"
              />
            </label>
          </div>
        </div>

        <div className=" w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">Choisir un projet</label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors cursor-pointer">
                <option value="01">Projet A</option>
                <option value="02">Projet B</option>
                <option value="03">Projet C</option>
              </select>
            </div>
          </div>
        <div className="mb-1">
          <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors"
              placeholder="John Smith"
              type="text"
            />
          </div>
        </div>
        <div className="mb-1">
          <label className="font-bold text-sm mb-2 ml-1">Card number</label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors"
              placeholder="0000 0000 0000 0000"
              type="text"
            />
          </div>
        </div>
        <div className="mb-1 -mx-2 flex items-end">
          <div className="px-2 w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors cursor-pointer">
                <option value="01">01 - January</option>
                <option value="02">02 - February</option>
                <option value="03">03 - March</option>
                <option value="04">04 - April</option>
                <option value="05">05 - May</option>
                <option value="06">06 - June</option>
                <option value="07">07 - July</option>
                <option value="08">08 - August</option>
                <option value="09">09 - September</option>
                <option value="10">10 - October</option>
                <option value="11">11 - November</option>
                <option value="12">12 - December</option>
              </select>
            </div>
          </div>
          <div className="px-2 w-1/2">
            <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors cursor-pointer">
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2020">2030</option>
              <option value="2021">2031</option>
              <option value="2022">2032</option>
              <option value="2023">2033</option>
            </select>
          </div>
        </div>
        <div className="mb-1">
          <label className="font-bold text-sm mb-2 ml-1">Security code</label>
          <div>
            <input
              className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors"
              placeholder="000"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button className="block w-64 bg-primary hover:bg-secondary focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
            <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
          </button>

          <button
                  type="button"
                  className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded mr-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Quitter
                </button>



        </div>
      </div>
    </div>










          
          </div>
        </div>
      )}
    </div>
  );
};

export default Projets;
