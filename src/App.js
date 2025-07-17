import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './Context/ProductContext';
import { CartProvider } from './Context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import MyNavbar from './components/MyNavbar';
import ProductDetail from './components/ProductDetail';
import AdminPage from './page/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <MyNavbar />
          <h1>Amazing! E-commerce 🛍️</h1>

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>

          <Cart />
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;