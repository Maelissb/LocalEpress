import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import '../../../../styles/_ProductCard.sass'; 

// Définir les types des produits et des props
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

interface ProductCardProps {
  product: Product;
}

// Composant Modal pour afficher les détails du produit
const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>Fermer</button>
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt={product.title} />
        <p>Description: {product.description}</p>
        <p>Prix: ${product.price}</p>
        <p>Catégorie: {product.category}</p>
        <p>Stock: {product.stock}</p>
        <p>Évaluation: {product.rating}</p>
        <p>Marque: {product.brand}</p>
      </div>
    </div>,
    document.body
  );
};

// Composant ProductCard
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
//   const handleAddToCart = () => {
//     // Implémentez la logique pour ajouter au panier ici
//     console.log(`Produit ajouté au panier: ${product.title}`);
//   };

  return (
    <article className="product_card" onClick={openModal}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>Prix: ${product.price}</p>
      <p>Catégorie: {product.category}</p>
      {showModal && <ProductModal product={product} onClose={closeModal} />}
    </article>
  );
};

export default ProductCard;
