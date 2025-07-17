import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button, Card } from "react-bootstrap";
import { ProductContext } from "../Context/ProductContext";

const ProductList = () => {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useContext(CartContext);
  const { products, loading } = useContext(ProductContext);

  if (loading) return <p>Caricamento...</p>;

  return (
    <div className="d-flex flex-wrap gap-3 p-3">
      {products.map(product => {
        const inCart = cartItems.find(item => item.id === product.id);

        return (
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.thumbnail} style={{ height: 200, objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>€ {product.price}</Card.Text>

              <Button variant="success" size="sm" onClick={() => addToCart(product)}>
                ➕ Aggiungi al carrello
              </Button>

              {inCart && (
                <div className="mt-2 d-flex flex-column gap-1">
                  <Button variant="warning" size="sm" onClick={() => decreaseQuantity(product.id)}>
                    ➖ Rimuovi quantità
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(product.id)}>
                    ❌ Rimuovi prodotto
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductList;