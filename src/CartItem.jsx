import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from '../redux/CartSlice';
import Navbar from './Navbar';
import {
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  CreditCard,
  ShoppingBag,
  Sparkles,
  X
} from 'lucide-react';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // Helper to calculate total cost for a specific cart item (Coursera specification)
  const calculateTotalCost = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  // Helper to calculate grand total amount (Coursera specification)
  const calculateTotalAmount = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  // Compute total item count dynamically across all plants
  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const grandTotal = calculateTotalAmount();

  // Handlers matching standard Coursera naming conventions
  const handleIncrement = (item) => {
    dispatch(increaseQuantity(item.id || item.name));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id || item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id || item.name));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to remove all items from your cart?')) {
      dispatch(clearCart());
    }
  };

  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (typeof onContinueShopping === 'function') {
      onContinueShopping(e);
    } else {
      navigate('/plants');
    }
  };

  const handleCheckoutShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setShowCheckoutModal(true);
  };

  return (
    <div className="cart-page-wrapper">
      {/* Reusable Navigation Bar */}
      <Navbar />

      <main className="cart-main-container">
        {/* Cart Page Heading */}
        <div className="cart-page-header">
          <div className="section-pill">
            <ShoppingBag size={16} />
            <span>Your Order</span>
          </div>
          <h1 className="cart-page-title">Shopping Cart</h1>
          <p className="cart-page-subtitle">
            Review your selected houseplants, adjust quantities, and proceed to checkout.
          </p>
        </div>

        {/* Empty Cart State */}
        {cartItems.length === 0 ? (
          <div className="empty-cart-container" id="empty-cart-state">
            <div className="empty-cart-icon-circle">
              <ShoppingBag size={48} className="empty-cart-icon" />
            </div>
            <h2 className="empty-cart-title">Your Cart is Currently Empty</h2>
            <p className="empty-cart-message">
              Looks like you haven't added any botanical wonders to your cart yet. Explore our fresh indoor plant varieties and bring nature home today!
            </p>
            <button
              type="button"
              onClick={handleContinueShopping}
              className="btn-explore-plants"
              id="btn-empty-shop"
            >
              <ArrowLeft size={18} />
              <span>Explore Plants Catalogue</span>
            </button>
          </div>
        ) : (
          <div className="cart-layout-grid">
            {/* Left: Cart Items List */}
            <div className="cart-items-column">
              <div className="cart-items-header-bar">
                <span className="items-count-text">
                  Items in Cart ({totalItemCount} {totalItemCount === 1 ? 'plant' : 'plants'})
                </span>
                <button
                  type="button"
                  className="btn-clear-cart"
                  onClick={handleClearCart}
                  title="Remove all items from cart"
                >
                  <Trash2 size={15} />
                  <span>Clear Cart</span>
                </button>
              </div>

              <div className="cart-items-list">
                {cartItems.map((item) => {
                  const itemSubtotal = calculateTotalCost(item);

                  return (
                    <div key={item.id || item.name} className="cart-item-card" id={`cart-item-${item.id || item.name}`}>
                      {/* Item Thumbnail */}
                      <div className="cart-item-thumbnail-wrapper">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-image"
                        />
                      </div>

                      {/* Item Info */}
                      <div className="cart-item-details">
                        <div className="cart-item-top">
                          <h3 className="cart-item-name">{item.name}</h3>
                          <button
                            type="button"
                            className="btn-item-delete"
                            onClick={() => handleRemove(item)}
                            title={`Remove ${item.name}`}
                            aria-label={`Remove ${item.name} from cart`}
                            id={`remove-btn-${item.id || item.name}`}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <p className="cart-item-unit-price">
                          Unit Price: <strong>${item.price.toFixed(2)}</strong>
                        </p>

                        {/* Quantity and Subtotal Row */}
                        <div className="cart-item-actions-row">
                          <div className="quantity-controller">
                            <button
                              type="button"
                              className="qty-btn qty-decrease"
                              onClick={() => handleDecrement(item)}
                              disabled={item.quantity <= 1}
                              aria-label={`Decrease quantity of ${item.name}`}
                              id={`decrease-btn-${item.id || item.name}`}
                            >
                              <Minus size={15} />
                            </button>
                            <span className="qty-value" id={`qty-value-${item.id || item.name}`}>
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              className="qty-btn qty-increase"
                              onClick={() => handleIncrement(item)}
                              aria-label={`Increase quantity of ${item.name}`}
                              id={`increase-btn-${item.id || item.name}`}
                            >
                              <Plus size={15} />
                            </button>
                          </div>

                          <div className="cart-item-subtotal-block">
                            <span className="subtotal-label">Subtotal:</span>
                            <span className="subtotal-value" id={`subtotal-${item.id || item.name}`}>
                              ${itemSubtotal}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Back */}
              <div className="cart-actions-footer">
                <button
                  type="button"
                  className="btn-continue-shopping"
                  onClick={handleContinueShopping}
                  id="btn-continue-shopping"
                >
                  <ArrowLeft size={18} />
                  <span>Continue Shopping</span>
                </button>
              </div>
            </div>

            {/* Right: Order Summary Card */}
            <aside className="cart-summary-column">
              <div className="order-summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-row">
                  <span className="summary-label">Total Plants Count</span>
                  <span className="summary-value" id="total-plants-count">
                    {totalItemCount}
                  </span>
                </div>

                <div className="summary-row">
                  <span className="summary-label">Estimated Delivery</span>
                  <span className="summary-value-free">FREE</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-total-row">
                  <span className="total-label">Total Amount</span>
                  <span className="total-amount" id="total-cart-amount">
                    ${grandTotal}
                  </span>
                </div>

                <p className="summary-tax-note">
                  * Applicable taxes calculated at checkout. Free nursery-grade packaging included.
                </p>

                {/* Primary Actions */}
                <div className="summary-buttons">
                  <button
                    type="button"
                    className="btn-checkout"
                    onClick={handleCheckoutShopping}
                    id="btn-checkout"
                  >
                    <CreditCard size={20} />
                    <span>Proceed to Checkout</span>
                  </button>

                  <button
                    type="button"
                    className="btn-continue-shopping-alt"
                    onClick={handleContinueShopping}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      {/* Checkout "Coming Soon" Modal */}
      {showCheckoutModal && (
        <div className="modal-backdrop" onClick={() => setShowCheckoutModal(false)}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowCheckoutModal(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="modal-icon-badge">
              <Sparkles size={32} />
            </div>
            <h3 className="modal-title">Checkout Coming Soon!</h3>
            <p className="modal-message">
              Thank you for exploring <strong>Paradise Nursery</strong>! Our secure payment and doorstep plant delivery checkout integration is currently under final calibration.
            </p>
            <div className="modal-summary-box">
              <div className="modal-summary-item">
                <span>Total Items:</span>
                <strong>{totalItemCount} plants</strong>
              </div>
              <div className="modal-summary-item">
                <span>Grand Total:</span>
                <strong className="modal-price">${grandTotal}</strong>
              </div>
            </div>
            <button
              type="button"
              className="btn-modal-action"
              onClick={() => setShowCheckoutModal(false)}
            >
              Got it, keep browsing!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
