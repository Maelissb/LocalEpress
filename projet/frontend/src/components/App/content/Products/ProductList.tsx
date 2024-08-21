import React, { useEffect, useState } from 'react';

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
      <div>
        {products.map(product => (
          <div key={product.id} >
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Prix: ${product.price}</p>
            <p>Catégorie: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <p>Évaluation: {product.rating}</p>
            <p>Marque: {product.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
