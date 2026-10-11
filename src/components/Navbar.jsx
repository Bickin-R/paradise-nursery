import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Sprout, Home, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity of all items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Brand Logo & Name */}
        <Link to="/" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <Sprout className="brand-icon" size={28} />
          </div>
          <div className="brand-text-container">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-tagline">Where Greenery Meets Serenity</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            id="nav-home"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>

          <Link
            to="/plants"
            className={`nav-link ${location.pathname === '/plants' ? 'active' : ''}`}
            id="nav-plants"
          >
            <ShoppingBag size={18} />
            <span>Plants</span>
          </Link>

          {/* Cart Icon with Dynamic Total Badge */}
          <Link
            to="/cart"
            className={`nav-link cart-nav-link ${location.pathname === '/cart' ? 'active' : ''}`}
            id="nav-cart"
            aria-label={`Shopping Cart with ${totalQuantity} items`}
          >
            <div className="cart-icon-wrapper">
              <ShoppingCart size={22} />
              {totalQuantity > 0 && (
                <span className="cart-badge" id="cart-badge">
                  {totalQuantity}
                </span>
              )}
            </div>
            <span className="cart-label">Cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
