// import React from 'react';
// import ReportCard from '../components/ReportCard';

// const ReportsPage = () => {
//   const reports = [
//     { id: 1, title: 'Impact Report 2023', summary: 'Summary of the environmental impact of 2023 projects.', link: '#' },
//     // Add more reports here
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Reports & Analysis</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         {reports.map(report => (
//           <ReportCard key={report.id} report={report} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReportsPage;

import React from 'react';
import ReportCard from '../components/ReportCard';

const ReportsPage = () => {
  const reports = [
    { id: 1, title: 'Impact Report 2023', summary: 'Summary of the environmental impact of 2023 projects.', link: '#' },
    // Add more reports here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Reports & Analysis</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {reports.map(report => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;

