import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
// import CartPage from '../pages/CartPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
