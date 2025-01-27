import React from 'react';
import { Card } from 'react-bootstrap';

function Image({ image }) {
  return <Card.Img variant="top" src={image} alt="Produit" />;
}

export default Image;

