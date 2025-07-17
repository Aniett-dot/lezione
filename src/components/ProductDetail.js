import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
import { CartContext } from '../Context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const {
    addToCart,
    removeFromCart,
    decreaseQuantity,
    cartItems,
  } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));
  const cartItem = cartItems.find((item) => item.id === product?.id);

  if (!product) return <p>Prodotto non trovato</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: '300px' }} />
      <p>{product.description}</p>
      <p><strong>Prezzo:</strong> € {product.price}</p>
      <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
      {cartItem && (
        <>
          <button onClick={() => decreaseQuantity(product.id)}>Rimuovi 1 quantità</button>
          <button onClick={() => removeFromCart(product.id)}>Rimuovi tutto</button>
          <p>In carrello: {cartItem.quantity}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetail;