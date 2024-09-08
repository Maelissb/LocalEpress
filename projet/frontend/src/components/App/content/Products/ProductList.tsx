import React, { useEffect, useState } from 'react';
import "../../../../styles/_product.sass"
import ProductCard from '../Card/ProductCard'; // Assurez-vous que le chemin est correct vers le fichier ProductCard
import "../../../../styles/_product.sass"; // Utiliser les styles appropriés

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

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data: ProductsResponse) => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Liste des Produits</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        <button>ajouter</button>
    </div>
  );
}

export default ProductList;
