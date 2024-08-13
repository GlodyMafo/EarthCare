import React from 'react';

const Forum = ({ posts }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold">Forum Discussions</h2>
      {posts.map(post => (
        <div key={post.id} className="border-b border-gray-200 py-2">
          <h3 className="font-semibold">{post.title}</h3>
          <p className="text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Forum;
