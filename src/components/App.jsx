import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import { ArrowRight, Leaf, Shield, Truck } from 'lucide-react';

const App = () => {
  return (
    <div className="landing-page-container">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">
            <Leaf size={16} className="tag-icon" />
            <span>Welcome to Paradise Nursery</span>
          </div>
          <h1 className="hero-title">
            Where Green Dreams <span className="highlight-text">Flourish</span>
          </h1>
          <p className="hero-description">
            Transform your living space into a tranquil botanical oasis. We cultivate premium, air-purifying houseplants, resilient succulents, and vibrant indoor blooms delivered with love directly to your door.
          </p>

          <div className="hero-actions">
            <Link to="/plants" className="btn-get-started" id="btn-get-started">
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
            <a href="#about-us" className="btn-learn-more">
              <span>Learn More</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="hero-features-bar">
            <div className="feature-pill">
              <Leaf size={18} />
              <span>18+ Handpicked Varieties</span>
            </div>
            <div className="feature-pill">
              <Truck size={18} />
              <span>Safe Plant Packaging</span>
            </div>
            <div className="feature-pill">
              <Shield size={18} />
              <span>Horticulturist Guaranteed</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Us Component */}
      <main>
        <AboutUs />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <Leaf size={24} />
              <span className="footer-title">Paradise Nursery</span>
            </div>
            <p className="footer-tagline">
              Breathe pure, live green, and create your indoor sanctuary.
            </p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Shop Plants</Link>
            <Link to="/cart">Cart</Link>
            <a href="#about-us">About Us</a>
          </div>
          <div className="footer-copy">
            <p>&copy; {new Date().getFullYear()} Paradise Nursery. All rights reserved. Coursera Final Assignment.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
