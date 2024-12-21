import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductsDetails from "./pages/ProductsDetails";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import ContactPage from "./pages/ContactPage";
import WishList from "./pages/WishList";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ShopCartPages from "./pages/ShopCartPages"
const AppRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Product" element={<ProductsDetails />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogDetails" element={<BlogDetails />} />
      <Route path="/contactPage" element={<ContactPage />} />
      <Route path="/wishList" element={<WishList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<ShopCartPages />} />
    </Routes>
  );
};

export default AppRoutes;
