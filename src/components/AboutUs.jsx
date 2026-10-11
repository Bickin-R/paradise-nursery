import React from 'react';
import { Wind, Heart, ShieldCheck, Sun, Sparkles, Sprout } from 'lucide-react';

const AboutUs = () => {
  const benefits = [
    {
      icon: <Wind className="benefit-icon" size={28} />,
      title: "Purify Your Air",
      description:
        "Indoor houseplants naturally absorb airborne pollutants, volatile organic chemicals, and dust, infusing your living areas with clean oxygen."
    },
    {
      icon: <Heart className="benefit-icon" size={28} />,
      title: "Enhance Well-Being",
      description:
        "Cultivating greenery reduces everyday stress, boosts creative focus, and brings a peaceful, restorative ambiance into bedrooms and workspaces."
    },
    {
      icon: <Sun className="benefit-icon" size={28} />,
      title: "Natural Moisture Balance",
      description:
        "Plants release roughly 97% of the moisture they absorb back into the air through transpiration, easing respiratory dryness during cold seasons."
    },
    {
      icon: <ShieldCheck className="benefit-icon" size={28} />,
      title: "Guaranteed Quality",
      description:
        "Every single plant is carefully cultivated by botanical specialists, inspected for prime root health, and safely packed in eco-conscious containers."
    }
  ];

  return (
    <section className="about-us-section" id="about-us">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-pill">
            <Sparkles size={16} />
            <span>Our Philosophy</span>
          </div>
          <h2 className="section-title">About Paradise Nursery</h2>
          <p className="section-subtitle">
            Cultivating healthier sanctuaries, one flourishing leaf at a time.
          </p>
        </div>

        {/* Mission Statement Card */}
        <div className="about-mission-card">
          <div className="mission-content">
            <h3 className="mission-heading">
              <Sprout size={24} className="heading-icon" />
              Our Mission &amp; Purpose
            </h3>
            <p>
              At <strong>Paradise Nursery</strong>, we believe everyone deserves a tranquil touch of nature in their everyday life. Founded by passionate horticulturalists, our purpose is to bridge the gap between busy urban life and the healing serenity of the natural world.
            </p>
            <p>
              We are passionately committed to supplying resilient, nursery-grade houseplants directly to your doorstep. Whether you are an experienced plant parent expanding your indoor forest or a curious beginner seeking your first forgiving succulent, our team provides step-by-step guidance and healthy, thriving specimens.
            </p>
          </div>
          <div className="mission-highlight-box">
            <span className="highlight-stat">100%</span>
            <span className="highlight-label">Healthy Plant Guarantee</span>
            <p className="highlight-desc">
              All plants undergo meticulous root-and-leaf quality screenings before shipping.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="about-benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-container">{benefit.icon}</div>
              <h4 className="benefit-title">{benefit.title}</h4>
              <p className="benefit-desc">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="about-vision-banner">
          <h4>Greener Spaces, Brighter Minds</h4>
          <p>
            Join our growing community of plant lovers across the country. Let’s turn your home into an oasis of calm and vitality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
