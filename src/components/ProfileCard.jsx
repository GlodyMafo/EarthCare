import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-700 mt-2">Total Contributions: ${user.totalContributions}</p>
      <p className="text-gray-700">Badges: {user.badges.join(', ')}</p>
    </div>
  );
};

export default ProfileCard;
