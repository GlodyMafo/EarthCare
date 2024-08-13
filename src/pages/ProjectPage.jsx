// import React from 'react';
// import { useParams } from 'react-router-dom';
// import useFetchProjectDetails from '../hooks/useFetchProjectDetails';
// import Fundraiser from '../components/Fundraiser';

// const ProjectPage = () => {
//   const { id } = useParams();
//   const { data: project, error } = useFetchProjectDetails(id);

//   if (error) return <div>Error loading project details</div>;

//   return (
//     <div className="container mx-auto p-4">
//       {project ? (
//         <div>
//           <h1 className="text-3xl font-bold">{project.name}</h1>
//           <img src={project.imageUrl} alt={project.name} className="w-full h-64 object-cover mt-4" />
//           <p className="mt-4">{project.description}</p>
//           <Fundraiser project={project} onDonate={(id) => alert(`Donate to project ${id}`)} />
//         </div>
//       ) : (
//         <p>Loading project details...</p>
//       )}
//     </div>
//   );
// };

// export default ProjectPage;

import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProjectDetails from '../hooks/useFetchProjectDetails';
import Fundraiser from '../components/Fundraiser';
import ReportCard from '../components/ReportCard';

const ProjectPage = () => {
  const { id } = useParams();
  const { data: project, error } = useFetchProjectDetails(id);

  if (error) return <div>Error loading project details: {error}</div>;

  if (!project) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <img src={project.imageUrl} alt={project.name} className="w-full h-64 object-cover mt-4" />
      <p className="mt-4">{project.description}</p>
      <Fundraiser project={project} onDonate={() => alert(`Donate to project ${project.id}`)} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Reports</h2>
        {project.reports.map(report => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
