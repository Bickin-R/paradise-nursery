import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './components/App';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<App />} />

          {/* Plant Catalogue Page */}
          <Route path="/plants" element={<ProductList />} />

          {/* Shopping Cart Page */}
          <Route path="/cart" element={<CartItem />} />

          {/* Fallback Route: Redirect any undefined path to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
