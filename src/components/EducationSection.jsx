import React from 'react';

const EducationSection = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold">Education & Awareness</h2>
      <p className="text-gray-700">
        Learn about the importance of reforestation and how you can contribute to a greener planet.
      </p>
      <a href="/articles" className="text-primary underline mt-2 block">
        Read More Articles
      </a>
    </div>
  );
};

export default EducationSection;
