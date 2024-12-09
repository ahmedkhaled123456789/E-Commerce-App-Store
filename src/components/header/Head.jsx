import  { useState } from "react";
import { Link } from "react-router-dom";

const Head = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Handle close button click
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <header className="bg-gray-100 py-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
             <div className="flex-1 text-center">
              <p className="text-sm text-gray-700">
                <i className="ri-discount-percent-line text-lg"></i> 30% off
                storewide — Limited time!
                <Link to="/shop" className="text-blue-500 underline ml-1">
                  <span>
                    Shop Now <i className="ri-arrow-right-line"></i>
                  </span>
                </Link>
              </p>
            </div>

             <button
              className="text-gray-500 hover:text-gray-800 focus:outline-none mr-4"
              onClick={handleClose}
              aria-label="Close"
            >
              <i className="ri-close-line text-lg"></i>
            </button>
          </div>
        </div>
      </header>
    )
  );
};

export default Head;
