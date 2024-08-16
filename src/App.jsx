import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ProfilePage from './pages/ProfilePage';
import ReportsPage from './pages/ReportsPage';
import ForumPage from './pages/ForumPage';
import EducationPage from './pages/EducationPage';
import Navbar from './components/Navbar';
import CourseDetails from './components/CourseDetails';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/cours/:id" element={<CourseDetails />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
