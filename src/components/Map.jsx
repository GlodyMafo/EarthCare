import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import useFetchProjects from '../hooks/useFetchProjects';
import ProjectFilters from './ProjectFilters';

const Map = () => {
  const [filters, setFilters] = useState({});
  const { data: projects, error } = useFetchProjects(filters);

  if (error) return <div>Error loading projects</div>;

  return (
    <div className='flex justify-around'>
      <ProjectFilters onFilterChange={setFilters} />
      <MapContainer center={[15.505, -0.09]} zoom={3} className="h-[600px] w-[70%] rounded-xl">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {projects.map(project => (
          <Marker key={project.id} position={[project.latitude, project.longitude]}>
            <Popup>{project.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};  

export default Map;
