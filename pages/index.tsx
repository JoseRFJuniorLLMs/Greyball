import { GetStaticProps } from 'next';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CartSummary from '../components/CartSummary';
import productsData from '../data/data.json'; 

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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products: productsData,
    },
  };
};

export default Home;
