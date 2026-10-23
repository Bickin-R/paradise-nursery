import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import Navbar from './Navbar';
import { plantsData, categories } from '../data/plants';
import { Check, ShoppingBag, Sparkles, Filter } from 'lucide-react';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Helper function to check if plant is already added in the Redux cart (by id or name)
  const isPlantInCart = (plant) => {
    return cartItems.some(
      (item) => item.id === plant.id || item.name === plant.name
    );
  };

  const handleAddToCart = (plant) => {
    if (!isPlantInCart(plant)) {
      dispatch(addToCart(plant));
    }
  };

  // Filtered categories to display
  const displayedCategories =
    selectedCategory === 'All'
      ? categories
      : categories.filter((cat) => cat === selectedCategory);

  return (
    <div className="product-list-page">
      {/* Reusable Navigation Bar */}
      <Navbar />

      {/* Page Header */}
      <div className="catalog-hero-header">
        <div className="catalog-header-content">
          <div className="section-pill">
            <Sparkles size={16} />
            <span>Botanical Collection</span>
          </div>
          <h1 className="catalog-title">Our Indoor Plant Catalogue</h1>
          <p className="catalog-subtitle">
            Explore our curated selection of 18 vibrant, nursery-grown houseplants designed to thrive in your indoor sanctuary.
          </p>

          {/* Category Filter Pills */}
          <div className="category-filter-bar">
            <div className="filter-label">
              <Filter size={16} />
              <span>Filter:</span>
            </div>
            <button
              className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Plants (18)
            </button>
            {categories.map((category) => {
              const count = plantsData.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Catalogue Area Grouped by Categories */}
      <main className="catalog-container">
        {displayedCategories.map((category) => {
          const plantsInCategory = plantsData.filter((plant) => plant.category === category);

          return (
            <section key={category} className="category-section" id={category.replace(/\s+/g, '-').toLowerCase()}>
              <div className="category-header">
                <div className="category-title-group">
                  <span className="category-marker"></span>
                  <h2 className="category-title">{category}</h2>
                </div>
                <span className="category-count">{plantsInCategory.length} varieties</span>
              </div>

              {/* Plant Grid */}
              <div className="plants-grid">
                {plantsInCategory.map((plant) => {
                  const added = isPlantInCart(plant);

                  return (
                    <article key={plant.id || plant.name} className="plant-card" id={`plant-${plant.id}`}>
                      {/* Thumbnail Container */}
                      <div className="plant-image-wrapper">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="plant-thumbnail"
                          loading="lazy"
                        />
                        <span className="plant-price-badge">
                          ${plant.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Content & Details */}
                      <div className="plant-info">
                        <div className="plant-title-row">
                          <h3 className="plant-name">{plant.name}</h3>
                        </div>
                        <p className="plant-description">{plant.description}</p>

                        <div className="plant-footer">
                          <span className="plant-price-text">
                            ${plant.price.toFixed(2)}
                          </span>

                          {/* Add to Cart Button (Disabled when added) */}
                          <button
                            type="button"
                            className={`btn-add-to-cart ${added ? 'added' : ''}`}
                            onClick={() => handleAddToCart(plant)}
                            disabled={added}
                            id={`add-btn-${plant.id}`}
                            aria-label={added ? `${plant.name} is added to cart` : `Add ${plant.name} to cart`}
                          >
                            {added ? (
                              <>
                                <Check size={18} />
                                <span>Added to Cart</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag size={18} />
                                <span>Add to Cart</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default ProductList;
