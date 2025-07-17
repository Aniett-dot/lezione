import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>🛒 Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} x {item.quantity} → € {item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: € {totalPrice}</h3>
    </div>
  );
};

export default Cart;
