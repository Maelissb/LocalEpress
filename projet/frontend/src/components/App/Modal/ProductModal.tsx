import React from 'react';
import { createPortal } from 'react-dom';
import '../../../styles/_productModal.sass'

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

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
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

export default ProductModal;