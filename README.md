# Paradise Nursery Shopping Application

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-purple.svg)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-green.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A complete, responsive, and modern houseplant e-commerce web application built for the **Coursera Front-End Development Final Project**. **Paradise Nursery** provides plant enthusiasts with a seamless platform to explore curated houseplants, learn about their air-purifying and mental well-being benefits, manage a live shopping cart with Redux Toolkit, and prepare orders for delivery.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Directory Structure](#project-directory-structure)
- [Coursera Required Files Checklist](#coursera-required-files-checklist)
- [Redux Shopping Cart Architecture](#redux-shopping-cart-architecture)
- [Available Application Routes](#available-application-routes)
- [Local Setup & Installation](#local-setup--installation)
- [GitHub Submission & Direct File Links Guide](#github-submission--direct-file-links-guide)
- [License](#license)

---

## Project Overview

Paradise Nursery is an online houseplant shop dedicated to helping people bring nature into their homes and workspaces. The application is built using modern React functional components with hooks, global state management via Redux Toolkit, client-side routing via React Router DOM, and a bespoke CSS3 botanical design system.

---

## Key Features

- **Botanical Hero Landing Page**: Plant-themed background with high-contrast text overlay, value badges, welcoming introduction, and a high-visibility "Get Started" call-to-action button.
- **Dedicated About Us Section**: In-depth information explaining the mission of Paradise Nursery, air-purification science, stress-relief benefits of indoor plants, and quality assurance.
- **Dynamic Navigation Bar**: Sticky, glassmorphism navbar accessible across all views with an instant, badge-driven total plant count indicator.
- **18+ Houseplants in 3 Structured Categories**:
  1. *Air-Purifying Plants* (Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, English Ivy)
  2. *Succulents & Cacti* (Aloe Vera, Jade Plant, Zebra Haworthia, Golden Barrel Cactus, String of Pearls, Echeveria Elegans)
  3. *Flowering Indoor Plants* (Anthurium Red, Phalaenopsis Orchid, African Violet, Bromeliad Guzmania, Christmas Cactus, Kalanchoe Blossfeldiana)
- **Disable-on-Add Cart Logic**: When a plant is added to the cart, its catalogue button immediately switches to a disabled "Added to Cart" state to prevent accidental duplicates.
- **Full-Featured Shopping Cart**:
  - Live total plant count across all cart items.
  - Granular quantity increments and decrements (protected against quantities below 1).
  - Immediate dynamic subtotal updates (`$XX.XX`) for each plant.
  - Item deletion and one-click "Clear Cart" functionality.
  - Dynamically calculated overall order total.
  - "Continue Shopping" navigation link to return to the plant catalogue.
  - "Checkout" action triggering a friendly "Coming Soon" notification.
  - Welcoming empty-cart state guiding users back to the catalogue.
- **100% Responsive Design**: Engineered with CSS Grid and Flexbox for seamless browsing on mobile, tablet, and desktop screens.

---

## Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework / Library** | React 18 (Functional Components, Hooks) |
| **Build Tool & Server** | Vite 5 |
| **State Management** | Redux Toolkit (`createSlice`, `configureStore`) & React Redux (`useSelector`, `useDispatch`) |
| **Routing** | React Router DOM v6 (`BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`) |
| **Styling** | Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphism) |
| **Icons** | Lucide React |
| **Typography** | Plus Jakarta Sans (Google Fonts) |

---

## Project Directory Structure

```text
nursery/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx       # [Coursera Req #2] Company mission & plant benefits
│   │   ├── App.jsx           # [Coursera Req #4] Landing page with hero & CTA
│   │   ├── Navbar.jsx        # Navigation bar with dynamic badge
│   │   ├── ProductList.jsx   # [Coursera Req #6] 18 plants, 3 categories, add-to-cart logic
│   │   └── CartItem.jsx      # [Coursera Req #7] Shopping cart with subtotals & quantity controls
│   ├── redux/
│   │   ├── CartSlice.jsx     # [Coursera Req #5] Redux Toolkit cart slice & action creators
│   │   └── store.js          # Redux store configuration
│   ├── data/
│   │   └── plants.js         # 18 unique houseplants structured data
│   ├── App.css               # [Coursera Req #3] Complete CSS design system
│   └── main.jsx              # React application entry point & router
├── index.html                # HTML5 entry shell
├── package.json              # Project dependencies & npm scripts
├── vite.config.js            # Vite configuration
└── README.md                 # [Coursera Req #1] Documentation & assignment submission guide
```

---

## Coursera Required Files Checklist

The Coursera final evaluation requires seven specific files. All seven files are implemented in this repository:

| # | Required Submission File | Repository Path | Description |
| :-: | :--- | :--- | :--- |
| **1** | **README.md** | `README.md` | Complete project documentation, setup guide, and rubric checklist. |
| **2** | **AboutUs.jsx** | `src/components/AboutUs.jsx` | Mission, purpose, plant health benefits, and quality guarantees. |
| **3** | **App.css** | `src/App.css` | Complete botanical design system, color variables, and responsive rules. |
| **4** | **App.jsx** | `src/components/App.jsx` | Landing page with hero background, Get Started CTA, and About Us integration. |
| **5** | **CartSlice.jsx** | `src/redux/CartSlice.jsx` | Redux slice with `addToCart`, `increaseQuantity`, `decreaseQuantity`, `removeFromCart`, `clearCart`. |
| **6** | **ProductList.jsx** | `src/components/ProductList.jsx` | Catalogue displaying 18 plants across 3 categories with button disable logic. |
| **7** | **CartItem.jsx** | `src/components/CartItem.jsx` | Shopping cart view with quantity selectors, subtotals, grand total, and checkout modal. |

---

## Redux Shopping Cart Architecture

Global cart state is centralized in `src/redux/CartSlice.jsx` and registered in `src/redux/store.js`:

```javascript
// Initial State
initialState = {
  items: [] // Array of { id, name, price, image, description, quantity }
}
```

### Action Creators
- `addToCart(plant)`: Adds a plant to the cart with an initial quantity of 1. If already present, updates quantity safely.
- `increaseQuantity(id)`: Increments the item quantity by 1.
- `decreaseQuantity(id)`: Decrements the item quantity by 1, enforcing a minimum of 1.
- `removeFromCart(id)`: Removes the specified plant from the cart array.
- `clearCart()`: Empties the shopping cart.

### Dynamic Computations
- **Navbar Cart Badge**: Evaluates `cartItems.reduce((sum, item) => sum + item.quantity, 0)` so it accurately reflects total items rather than just unique products.
- **Item Subtotal**: Evaluates `(item.price * item.quantity).toFixed(2)`.
- **Order Total**: Evaluates `cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)`.

---

## Available Application Routes

| Path | Component | View Description |
| :--- | :--- | :--- |
| `/` | `App.jsx` | Landing Page with hero banner, company introduction, and About Us section. |
| `/plants` | `ProductList.jsx` | Houseplant catalogue categorized into 3 sections with Add to Cart controls. |
| `/cart` | `CartItem.jsx` | Shopping cart management view with order summary and checkout dialog. |
| `*` | `Navigate to="/"` | Fallback route redirecting all unknown paths to the landing page. |

---

## Local Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended; verified on Node v22)
- [npm](https://www.npmjs.com/) (version 9 or higher)

### Step-by-Step Instructions

1. **Clone or download the repository**:
   ```bash
   git clone https://github.com/<your-username>/paradise-nursery.git
   cd paradise-nursery
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` (or the URL printed in the terminal).

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## GitHub Submission & Direct File Links Guide

### 1. Initialize Git and Push to GitHub

```bash
# Initialize git in the project root
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "feat: complete Paradise Nursery e-commerce application for Coursera"

# Rename branch to main
git branch -M main

# Link to your newly created GitHub repository
git remote add origin https://github.com/hariharanraj86-beep/paradise-nursery.git

# Push code to GitHub
git push -u origin main
```

### 2. Copying Direct GitHub URLs for Coursera Submission

When submitting to Coursera, copy the direct URLs for each of the 7 files by browsing your repository on GitHub:

1. Navigate to your repository: `https://github.com/hariharanraj86-beep/paradise-nursery`
2. Click on the file name.
3. Copy the URL from your browser's address bar. The links are:
   - **README.md**: `https://github.com/hariharanraj86-beep/paradise-nursery/blob/main/README.md`
   - **AboutUs.jsx**: `https://github.com/hariharanraj86-beep/paradise-nursery/blob/main/src/components/AboutUs.jsx`
   - **App.css**: `https://github.com/hariharanraj86-beep/paradise-nursery/blob/main/src/App.css`
   - **App.jsx**: `https://github.com/hariharanraj86-beep/paradise-nursery/blob/main/src/components/App.jsx`
   - **CartSlice.jsx**: `https://github.com/hariharanraj86-beep/paradise-nursery/blob/main/src/redux/CartSlice.jsx`
   - **ProductList.jsx**: `https://github.com/hariharanraj86-beep/paradise-nursery/blob/main/src/components/ProductList.jsx`
   - **CartItem.jsx**: `https://github.com/hariharanraj86-beep/paradise-nursery/blob/main/src/components/CartItem.jsx`

---

## License

This project is created for educational purposes under the MIT License.
