// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CategoryPage from './CategoryPage';
import LanguageSelector from './LanguageSelector';
import './i18n';
import './styles.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div><Link to="/">
            <AiFillHome style={{ color: 'black' }} />
          </Link></div>
          <div className="navbar-right">
            <LanguageSelector />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryId" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
