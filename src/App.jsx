import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Card, Button } from 'react-bootstrap';
import Nom from './compnents/Nom';
import Prix from './compnents/rix';
import Description from './compnents/description';
import Image from './compnents/image';
import produit from './compnents/produit'


function App() {
  const firstName = "VotrePrénom"; 

  return (
    <>
       <div className="container mt-5">
      <Card style={{ width: '18rem', margin: '0 auto', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Image image={produit.Image} />
        <Card.Body>
          <Nom nom={produit.nom} />
          <Prix Prix={produit.prix} />
          <Description description={produit.description} />
          <Button variant="primary">Acheter</Button>
        </Card.Body>
      </Card>
      <p className="mt-4 text-center">
        Bonjour, {firstName ? `${firstName} !` : "!"}
      </p>
      {firstName && (
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="rounded-circle"
          />
        </div>
         )}
    </div>
    </>
  )
}

export default App
