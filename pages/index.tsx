import { GetServerSideProps } from 'next';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CartSummary from '../components/CartSummary';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const handleSearch = (query: string) => {
    setFilteredProducts(
      products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <CartSummary />
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://your-json-server.typicode.com/your-repo/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default Home;
