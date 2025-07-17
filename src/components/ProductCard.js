import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      width: '200px',
      
    }}>
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
        <h4>{product.title}</h4>
      </Link>
      <p>€ {product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;