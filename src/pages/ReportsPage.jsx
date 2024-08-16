import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Label
} from 'recharts';
import { jsPDF } from 'jspdf';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

const fakeReports = {
  projectStats: [
    { projectName: 'Projet A', totalContributions: 1200, totalImpact: 3000 },
    { projectName: 'Projet B', totalContributions: 1500, totalImpact: 4000 },
    { projectName: 'Projet C', totalContributions: 900, totalImpact: 2000 },
  ],
  monthlyTrends: [
    { month: 'Jan', contributions: 300, impact: 750 },
    { month: 'Feb', contributions: 250, impact: 600 },
    { month: 'Mar', contributions: 400, impact: 1000 },
    { month: 'Apr', contributions: 350, impact: 800 },
    { month: 'May', contributions: 450, impact: 1200 },
    { month: 'Jun', contributions: 500, impact: 1400 },
  ],
  overallImpact: [
    { category: 'Reforestation', value: 7000 },
    { category: 'Protection des Forêts', value: 5000 },
    { category: 'Sensibilisation', value: 3000 },
  ],
  impactByTreeType: [
    { treeType: 'Chêne', impact: 4000 },
    { treeType: 'Érable', impact: 3000 },
    { treeType: 'Séquoia', impact: 2000 },
  ],
  contributionByProjectType: [
    { type: 'Reforestation', contributions: 2500 },
    { type: 'Protection des Forêts', contributions: 1500 },
    { type: 'Sensibilisation', contributions: 1000 },
  ],
  topContributors: [
    { name: 'Alice', totalContributions: 5000 },
    { name: 'Bob', totalContributions: 3000 },
    { name: 'Charlie', totalContributions: 1500 },
  ],
  detailedReports: [
    { projectName: 'Projet A', date: '2024-01-15', contributionAmount: 200, impactScore: 500 },
    { projectName: 'Projet B', date: '2024-02-20', contributionAmount: 300, impactScore: 800 },
    { projectName: 'Projet A', date: '2024-03-05', contributionAmount: 150, impactScore: 400 },
    { projectName: 'Projet C', date: '2024-04-10', contributionAmount: 100, impactScore: 200 },
    { projectName: 'Projet B', date: '2024-05-25', contributionAmount: 250, impactScore: 600 },
  ],
};

const PageRapports = () => {


  const generatePDF = (project) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(`Rapport de Contribution - ${project.projectName}`, 20, 20);

    doc.setFontSize(12);
    doc.text('Détails du Projet:', 20, 40);

    doc.setFontSize(10);
    doc.text(`Nom du Projet: ${project.projectName}`, 20, 50);
    doc.text(`Total des Contributions: $${project.totalContributions}`, 20, 60);
    doc.text(`Impact Total: ${project.totalImpact}`, 20, 70);

    doc.text('Historique des Contributions:', 20, 90);
    let yPosition = 100;

    fakeReports.detailedReports
      .filter((report) => report.projectName === project.projectName)
      .forEach((report, index) => {
        doc.text(`${index + 1}. Date: ${report.date} - Montant: $${report.contributionAmount} - Impact: ${report.impactScore}`, 20, yPosition);
        yPosition += 10;
      });

    doc.save(`${project.projectName}_rapport.pdf`);
  };





  return (
    <div className="p-6">
      {/* Vue d'Ensemble des Projets */}

    <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Vue d'Ensemble des Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fakeReports.projectStats.map((project, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{project.projectName}</h3>
              <p>Total Contributions: ${project.totalContributions}</p>
              <p>Impact Total: {project.totalImpact}</p>
              <button
                onClick={() => generatePDF(project)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Télécharger le Rapport en PDF
              </button>
            </div>
          ))}
        </div>
      </div>




      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Vue d'Ensemble des Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Statistiques des Projets */}
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Statistiques des Projets</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fakeReports.projectStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="projectName">
                  <Label value="Projet" offset={0} position="insideBottomRight" />
                </XAxis>
                <YAxis>
                  <Label value="Montant (en $)" angle={-90} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="totalContributions" fill="#8884d8" name="Contributions Totales" />
                <Bar dataKey="totalImpact" fill="#82ca9d" name="Impact Total" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Analyse des Tendances */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Analyse des Tendances</h2>
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Tendances Mensuelles</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={fakeReports.monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month">
                <Label value="Mois" offset={0} position="insideBottomRight" />
              </XAxis>
              <YAxis>
                <Label value="Montant (en $)" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="contributions" stroke="#8884d8" name="Contributions" />
              <Line type="monotone" dataKey="impact" stroke="#82ca9d" name="Impact" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Impact Global */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Impact Global</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Répartition par Catégorie */}
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Répartition par Catégorie</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={fakeReports.overallImpact} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                  {fakeReports.overallImpact.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Impact par Type d'Arbre */}
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Impact par Type d'Arbre</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={fakeReports.impactByTreeType} dataKey="impact" nameKey="treeType" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d">
                  {fakeReports.impactByTreeType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Performances des Contributions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Performances des Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contributions par Type de Projet */}
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Contributions par Type de Projet</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={fakeReports.contributionByProjectType} dataKey="contributions" nameKey="type" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                  {fakeReports.contributionByProjectType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Top Contributeurs */}
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Top Contributeurs</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contributions Totales</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {fakeReports.topContributors.map((contributor) => (
                  <tr key={contributor.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contributor.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${contributor.totalContributions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Historique des Contributions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Historique des Contributions</h2>
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Détails des Contributions</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projet</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score d'Impact</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fakeReports.detailedReports.map((report, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.projectName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${report.contributionAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.impactScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PageRapports;
