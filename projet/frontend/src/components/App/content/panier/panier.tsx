import React from 'react';
import "../../../../styles/_panier.sass"
const Panier: React.FC = () => {
  return (
    <div className="panier-container">
      <h2>Mon Panier</h2>
      {/* contenu du panier  */}
      <p>Le panier est vide</p>
      <div className="total-container">
        <p>Total: 0€</p>
        <button className="commander-btn">Commander</button>
      </div>
    </div>
  );
};

export default Panier;
