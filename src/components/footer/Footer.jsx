 
const Footer = () => {
  return (
    <footer className="bg-black  text-gray-300 py-10 px-28">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-white text-xl font-bold">3legant.</h1>
            <p className="text-sm text-gray-400">Gift & Decoration Store</p>
          </div>

          {/* Navigation Links */}
          <nav className="text-sm space-x-4">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#shop" className="hover:text-white">
              Shop
            </a>
            <a href="#product" className="hover:text-white">
              Product
            </a>
            <a href="#blog" className="hover:text-white">
              Blog
            </a>
            <a href="#contact-us" className="hover:text-white">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Copyright */}
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} 3legant. All rights reserved.
          </p>

          {/* Policy Links */}
          <div className="space-x-4">
            <a href="#privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms-of-use" className="hover:text-white">
              Terms of Use
            </a>
          </div>

          {/* Social Icons */}
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#facebook" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#instagram" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#twitter" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
