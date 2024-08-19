// src/components/MapComponent.js
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Données fictives
const allProjects = [
  {
    id: 1,
    position: [51.505, -0.09],
    name: "Projet A",
    region: "Europe",
    treeType: "Chêne",
    status: "En cours",
  },
  {
    id: 2,
    position: [48.8566, 2.3522],
    name: "Projet B",
    region: "Europe",
    treeType: "Érable",
    status: "Complété",
  },
  {
    id: 3,
    position: [34.0522, -118.2437],
    name: "Projet C",
    region: "Amérique",
    treeType: "Séquoia",
    status: "En cours",
  },
  
];

const MapComponent = () => {
  const [projects, setProjects] = useState(allProjects);
  const [regionFilter, setRegionFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    // Filtrer les projets en fonction des filtres sélectionnés
    setProjects(
      allProjects.filter(
        (project) =>
          (regionFilter === "All" || project.region === regionFilter) &&
          (statusFilter === "All" || project.status === statusFilter)
      )
    );
  }, [regionFilter, statusFilter]);

  return (
    <div className="w-full h-screen">
      {/* Section des filtres */}
      <div className="p-4">
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

      {/* Carte interactive */}
      <MapContainer center={[51.505, -0.09]} zoom={2} className="h-96">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {projects.map((project) => (
          <Marker key={project.id} position={project.position}>
            <Popup>
              <div>
                <h3 className="font-bold">{project.name}</h3>
                <p>Région: {project.region}</p>
                <p>Type d'arbre: {project.treeType}</p>
                <p>Statut: {project.status}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Section des détails des projets filtrés */}
      <div className="p-4 z-40">
        <h2 className="text-2xl font-bold mb-4">Détails des Projets Filtrés</h2>
        {projects.length > 0 ? (
          <div className="flex justify-around flex-wrap ">
            {projects.map((project) => (
              <div key={project.id} className=" p-4 rounded-lg">
                <div class="group flex flex-col shadow-lg justify-start mt-4 mb-20 items-start gap-2 w-80 h-56 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                  <div
                    class="absolute z-20 duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200"
                    alt="image here"
                  >
                    <img src={project.imageUrl} alt="" />
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

                  <button className="bg-primary text-white p-2 rounded mt-4">
                    Donate
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Aucun projet ne correspond aux filtres sélectionnés.</p>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
