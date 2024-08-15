import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const CartSummary: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="fixed top-0 right-0 p-4 bg-white shadow-lg">
      <p>Total Items: {cart.items.length}</p>
      <p>Total Price: ${cart.total.toFixed(2)}</p>
    </div>
  );
};

export default CartSummary;
