import React from 'react';
import ProfileCard from '../components/ProfileCard';

const ProfilePage = () => {
  // Placeholder user data
  const user = {
    name: 'John Doe',
    totalContributions: 1234,
    badges: ['Tree Lover', 'Eco Warrior']
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">My Profile</h1>
      <ProfileCard user={user} />
    </div>
  );
};

export default ProfilePage;
