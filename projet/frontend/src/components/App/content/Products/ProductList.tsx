import { useEffect, useState } from 'react';
import "../../../../styles/_product.sass"
import ProductCard from '../Card/ProductCard'; 
import "../../../../styles/_product.sass"; 
import Pagination from '../pagination/pagination';
// import "../../../../api/fetchData"


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

const PRODUCTS_PER_PAGE = 4;

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data: ProductsResponse) => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <h1>Liste des Produits</h1>
      <div className="product-list">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} // Passer la fonction de changement de page
      />
    </div>
  );
}

export default ProductList;
