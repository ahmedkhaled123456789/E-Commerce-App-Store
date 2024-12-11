import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

const AppRoutes = () => {
  return (
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

      </Routes>
   );
};

export default AppRoutes;
