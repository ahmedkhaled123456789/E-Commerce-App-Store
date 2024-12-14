import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductsDetails from "./pages/ProductsDetails";
import ShopCards from "./pages/ShopCards";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import ContactPage from "./pages/ContactPage";

const AppRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Product" element={<ProductsDetails />} />
      <Route path="/cart" element={<ShopCards />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogDetails" element={<BlogDetails />} />
      <Route path="/contactPage" element={<ContactPage />} />

    </Routes>
  );
};

export default AppRoutes;
