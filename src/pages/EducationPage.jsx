// import React from 'react';
// import EducationSection from '../components/EducationSection';

// const EducationPage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Education & Awareness</h1>
//       <EducationSection />
//     </div>
//   );
// };

// export default EducationPage;

import React from 'react';

const EducationPage = () => {
  const articles = [
    { id: 1, title: 'The Importance of Reforestation', summary: 'An overview of why reforestation is critical.', link: '#' },
    { id: 2, title: 'Techniques for Effective Tree Planting', summary: 'Best practices for planting trees successfully.', link: '#' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Education & Awareness</h1>
      <div className="space-y-4">
        {articles.map(article => (
          <div key={article.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-gray-700">{article.summary}</p>
            <a href={article.link} className="text-primary underline mt-2 block">
              Read Full Article
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;

