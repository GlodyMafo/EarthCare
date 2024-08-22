import React, { useState, useEffect } from 'react';
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

const AdminPage = () => {

  const [activeTab, setActiveTab] = useState('projects');

  const [user, setUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState('');
  const [newContribution, setNewContribution] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false); // État pour la pop-up de modification
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // État pour la pop-up de modification

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUser(loggedInUser);
  }, []);

  const handleContribution = () => {
    if (selectedProject && newContribution > 0) {
      console.log(`Contribution de $${newContribution} au projet ${selectedProject}`);
    }
  };

  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
    setIsModalOpen(false);
  };

  if (!user) {
    return <p>Chargement...</p>;
  }








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
    <div className="p-6 mx-20">

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

            <button
              className="mt-2 border border-primary transition hover:bg-secondary text-primary hover:border-secondary hover:text-white p-2 rounded mr-4 transition"
              onClick={() => setIsCreateModalOpen(true)}
            >
              Nouveau Projet
            </button>
            <div>
              
            </div>
          </div>
        </div>
      </div>


      {/* Onglets */}
      <div className="mb-4">
        <div className="flex border-b">
          <button
            className={`py-2 px-4 ${activeTab === 'projects' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('projects')}
          >
            Vue d'Ensemble des Projets
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'stats' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('stats')}
          >
            Statistiques des Projets
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'rapport' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('rapport')}
          >
            Rapport
          </button>
        
          <button
            className={`py-2 px-4 ${activeTab === 'topContributors' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('topContributors')}
          >
            Top Contributeurs
          </button>

          <button
            className={`py-2 px-4 ${activeTab === 'users' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('users')}
          >
            Contacter
          </button>
        </div>
      </div>

      {/* Contenu des Onglets */}
      {activeTab === 'projects' && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Vue d'Ensemble des Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fakeReports.projectStats.map((project, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{project.projectName}</h3>
                <p>Total Contributions: ${project.totalContributions}</p>
                <p>Impact Total: {project.totalImpact}</p>
                <div className="flex justify-around">
                <button
                  onClick={() => generatePDF(project)}
                  className="mt-4 bg-primary hover:bg-secondary transition flex text-white py-2 px-4 rounded"
                >
                  Télécharger le Rapport en PDF  <svg class="w-6 mx-2 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
 <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fill-rule="evenodd">
 </path>
</svg>
                </button>

                <button
                  onClick={() => generatePDF(project)}
                  className="mt-4 border border-primary hover:border-red-600 hover:bg-red-600 hover:text-white text-primary py-2 px-4 rounded"
                >
                  Marquer comme termine
                </button>
              </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'stats' && (
        <div>
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


  {/* Analyse des Tendances */}
  <div className="mb-8">
        <div className="border p-4  rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Tendances Mensuelles</h3>
          <ResponsiveContainer width="100%" height={310}>
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

     </div>

 {/* Impact Global */}
 <div className="mb-8 mt-8">
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
        </div>

      </div>



     

      )}

   

      {activeTab === 'topContributors' && (
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



{/* Formulaire de creation d'un projet */}

{isCreateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Creer un nouveau projet</h2>
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
                <label className="block text-gray-700">Nom du projet</label>
                <input
                  type="text"
                  name="name"
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Region</label>
                <input
                  type="text"
                  name="region"
                  className="border p-2 w-full"
                />
              </div>
<div className="flex justify-between">
              <div className="mb-4">
                <label className="block text-gray-700">Longitude</label>
                <input
                  type="number"
                  name="longitude"
                  className="border p-2 w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Latitude</label>
                <input
                  type="number"
                  name="latitude"
                  className="border p-2 w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Espece d'arbre</label>
                <input
                  type="text"
                  name="treeType"
                  className="border p-2 w-full"
                />
              </div>

              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                  type="text"
                  name="description"
                  className="border p-2 w-full"
                />
              </div>
             

              <div className="mb-4">
                <label className="block text-gray-700">Objectif de fond (en dollars americain)</label>
                <input
                  type="number"
                  name="country"
                  className="border p-2 w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Prediction d'impact</label>
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
                  className="bg-gray-300 hover:bg-red-600 hover:text-white transition text-gray-700 px-4 py-2 rounded mr-2"
                  onClick={() => setIsCreateModalOpen(false)}
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

export default AdminPage;

