import Header from '../../components/Header/Header';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

const HeaderFeature = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.length;

  return <Header cartCount={cartCount} />;
};

export default HeaderFeature;
