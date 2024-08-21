
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ProfilePage from './pages/ProfilePage';
import ReportsPage from './pages/ReportsPage';
import ForumPage from './pages/ForumPage';
import EducationPage from './pages/EducationPage';
import AdminPage from './pages/AdminPage'; // Importer la page Admin
import Navbar from './components/Navbar';
import CourseDetails from './components/CourseDetails';
import AuthPage from './pages/AuthPage';
import Footer from './components/Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
    localStorage.setItem('loggedInUser', JSON.stringify(user)); // Stocker les détails de l'utilisateur
  };

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <ProfilePage user={currentUser} />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/admin"
            element={
              isAuthenticated && currentUser.role === 'admin' ? (
                <AdminPage user={currentUser} />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/cours/:id" element={<CourseDetails />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
