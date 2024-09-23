import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Intro from './Components/Intro/Intro.jsx';
import About from './Components/About/About.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Services from './Components/Serrvice/Service.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Loader from './Components/Loader/Loader.jsx';
import { themeContext } from './Context';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [loading, setLoading] = useState(false); // Loader state

  const location = useLocation(); // Get the current route

  // Trigger loader on route change
  useEffect(() => {
    // Show loader when route changes
    setLoading(true);

    // Simulate loading duration (or replace this with actual content load logic)
    const loadContent = setTimeout(() => {
      setLoading(false); // Hide loader after content is loaded
    }, 2000); // You can adjust this time based on real-world scenarios

    return () => clearTimeout(loadContent); // Cleanup timeout
  }, [location]); // Dependency on the route location

  return (
    <div
      className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}
    >
      {/* Display the loader if loading state is true */}
      {loading && <Loader />}

      {/* Only show app content when not loading */}
      {!loading && (
        <>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

