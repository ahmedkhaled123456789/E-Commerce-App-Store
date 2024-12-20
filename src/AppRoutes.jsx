import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductsDetails from "./pages/ProductsDetails";
import HeaderShopCart from "./components/header/HeaderShopCart";

const AppRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Product" element={<ProductsDetails />} />
      <Route path="/cart" element={<HeaderShopCart />} />
    </Routes>
  );
};

export default AppRoutes;
