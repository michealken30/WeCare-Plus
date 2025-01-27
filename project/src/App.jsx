import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Loans from './pages/Loans';
import Wellness from './pages/Wellness';
import Reminders from './pages/Reminders';
import Immunization from './pages/Immunization';
import Supplements from './pages/Supplements';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/immunization" element={<Immunization />} />
            <Route path="/supplements" element={<Supplements />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;