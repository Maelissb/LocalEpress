import React, { useState } from 'react';
import ProductModal from '../../Modal/ProductModal'
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


// Composant ProductCard
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <article className="product_card" onClick={openModal}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>Prix: ${product.price}</p>
      <p>Catégorie: {product.category}</p>
      <button>ajouter</button>
      {showModal && <ProductModal product={product} onClose={closeModal} />}
    </article>
  );
};

export default ProductCard;
