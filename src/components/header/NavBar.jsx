import   { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
 
const NavBar = () => {
   
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  const navigateIcon = () => {
    navigate("/cart");
  };

  const navigateFav = () => {
    navigate("/wishlist");
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  const nav_link = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "Shop",
      display: "Shop",
    },
    {
      path: "Product",
      display: "Product",
    },
    {
      path: "Contact Us",
      display: "Contact Us",
    },
  ];
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const [user, setUser] = useState(() => {
    try {
      const data = localStorage.getItem("user");
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <header className="header  h-[70px] w-full   flex items-center justify-between px-28 bg-white   " ref={headerRef}>
      <div className="logo flex items-center space-x-4 w-[30%]">
        <Link to="/home">
          <h1 className="text-lg font-bold text-gray-800 cursor-pointer">3legant.
</h1>
        </Link>
      </div>

      <div className="navigation flex items-center space-x-12 w-[40%]">
        <ul className="menu flex items-center space-x-10">
          {nav_link.map((item, index) => (
            <li key={index} className="nav_item text-gray-800 font-medium cursor-pointer">
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? "text-black font-semibold" : ""}
              >
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav_icon flex  justify-center items-center space-x-4 w-[30%]">
       
       
          <div
  className={`search flex items-center space-x-2 p-2 bg-gray-100 rounded-md mt-2 ${
     isSearchVisible ? "opacity-100" : "opacity-0 pointer-events-none"
  } transition-opacity duration-300`}
>            <input
              type="text"
              placeholder="Looking for?"
              className="bg-transparent outline-none text-sm font-light placeholder-gray-500 flex-grow"
              onChange={() => console.log("ahmed")}
            />
           </div>
        
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none ml-4"
            onClick={toggleSearch}
            aria-label="Search"
          >
          <i className="ri-search-line text-2xl"></i>
          </button>
        <span className="fav_icon relative cursor-pointer" onClick={navigateFav}>
          <i className="ri-heart-line text-2xl text-gray-300"></i>
          <span className="badge absolute bottom-4 left-4 flex items-center justify-center bg-gray-800 text-white rounded-full w-5 h-5 text-xs font-semibold">0</span>
        </span>

        <span className="cart_icon relative cursor-pointer" onClick={navigateIcon}>
          <i className="ri-shopping-cart-2-line text-2xl text-gray-800"></i>
          <span className="badge absolute  bottom-4 left-4 flex items-center justify-center bg-gray-800 text-white rounded-full w-5 h-5 text-xs font-semibold">1</span>
        </span>

        <span className="profile relative">
          <i onClick={() => setToggle(!toggle)} className="ri-user-3-line text-2xl text-gray-800 cursor-pointer"></i>
          <div className={`${toggle ? "block" : "hidden"} profile_action absolute top-12 right-0 w-48 p-3 bg-gradient-to-r from-gray-400 z-50 to-gray-800 text-white rounded-md`}>
            <div className="flex flex-col items-center space-y-2" onClick={() => setToggle(!toggle)}>
              {user ? (
                <>
                  <Link to="/account">Manage My Account</Link>
                  {user.role === "admin" ? <Link to="/admin/allproducts">Dashboard</Link> : <Link to="/order">My Order</Link>}
                  <Link to="/" onClick={logOut}>Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
            </div>
          </div>
        </span>

        <div className="mobile_menu block lg:hidden">
          <span onClick={menuToggle}>
            <i className="ri-menu-line text-2xl text-gray-800"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
