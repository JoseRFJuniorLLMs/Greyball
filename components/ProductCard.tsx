interface ProductCardProps {
    product: {
      id: number;
      name: string;
      description: string;
      price: number;
      rating: number;
      image: string;
    };
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <div className="border p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p>{product.description.substring(0, 100)}...</p>
        <p className="font-semibold">${product.price.toFixed(2)}</p>
        <p>{'⭐'.repeat(Math.round(product.rating))} ({product.rating})</p>
      </div>
    );
  };
  
  export default ProductCard;
  