import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<div>Home Page</div>} />
          <Route exact path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
