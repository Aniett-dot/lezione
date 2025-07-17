import { Button, Modal, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    thumbnail: ''
  });

  // Fetch dei prodotti
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  // Funzione POST per aggiungere prodotto
  const handleAddProduct = async () => {
    const res = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    });
    const data = await res.json();

    // Aggiorna la lista locale
    setProducts(prev => [...prev, data]);
    setShowModal(false);
    setNewProduct({ title: '', price: '', thumbnail: '' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📦 Admin - Prodotti</h1>
      <Button variant="success" onClick={() => setShowModal(true)}>
        ➕ Aggiungi Prodotto
      </Button>

      <ul style={{ marginTop: '2rem' }}>
        {products.map(p => (
          <li key={p.id}>
            <img src={p.thumbnail} alt={p.title} width="50" style={{ marginRight: '10px' }} />
            {p.title} - €{p.price}
          </li>
        ))}
      </ul>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Nuovo Prodotto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.title}
                onChange={e => setNewProduct({ ...newProduct, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Prezzo</Form.Label>
              <Form.Control
                type="number"
                value={newProduct.price}
                onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Thumbnail (URL)</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.thumbnail}
                onChange={e => setNewProduct({ ...newProduct, thumbnail: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Chiudi</Button>
          <Button variant="primary" onClick={handleAddProduct}>Salva</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPage;