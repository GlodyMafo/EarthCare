import React from 'react';

const ReportCard = ({ report }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold">{report.title}</h2>
      <p className="text-gray-700">{report.summary}</p>
      <a href={report.link} className="text-primary underline mt-2 block">
        Read Full Report
      </a>
    </div>
  );
};

export default ReportCard;
