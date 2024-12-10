 import { Link } from "react-router-dom";
import './Arrivals.css'
const Arrivals = () => {
  return (
    <section className="arrivals_section ">
      {/* Featured and New Arrival Titles */}
      <div className="flex items-center justify-start">
      <div className="flex items-center space-x-2 mb-6">
          <div className="w-5 h-10 bg-[#000] rounded"></div>
          <h3 className="text-[#000] text-lg font-bold">New Arrival</h3>
        </div>
      </div>
      

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[550px]">
         <div className="Living  p-6 rounded-lg">
          <div className="info">
            <h2 className="text-3xl font-semibold mb-2">Living Room</h2>
             
            <Link to="/shop">
            <button className="play_btn   text-black underline  rounded-md">
                  Shop Now <i className="ri-arrow-right-line"></i>
                </button>
            </Link>
          </div>
        </div>

         <div>
          <div className="Bedroom flex justify-between   p-6 rounded-lg mb-6">
            <div className="info">
              <h2 className="text-3xl font-semibold mb-2">
              Bedroom              </h2>
               
              <Link to="/shop">
              <button className="play_btn   text-black underline   rounded-md">
                  Shop Now <i className="ri-arrow-right-line"></i>
                </button>
              </Link>
            </div>
            <div className="images_po">
            </div>
          </div>

          <div className="Kitchen flex justify-between   p-6 rounded-lg  ">
            <div className="info">
              <h2 className="text-3xl font-semibold mb-2">
              Kitchen              </h2>
               
              <Link to="/shop">
                <button className="play_btn   text-black underline   rounded-md">
                  Shop Now <i className="ri-arrow-right-line"></i>
                </button>
              </Link>
            </div>
            <div className="images_po2">
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Section */}
      {/* <div className="delivery grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
         <div className="text-center mb-5">
          <div className="icons text-4xl text-black mb-4">
            <i className="ri-truck-line"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">FREE AND FAST DELIVERY</h2>
          <p className="text-gray-600">Free delivery for all orders over $140</p>
        </div>

         <div className="text-center mb-5">
          <div className="icons text-4xl text-black mb-4">
            <i className="ri-customer-service-line"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">24/7 CUSTOMER SERVICE</h2>
          <p className="text-gray-600">Friendly 24/7 customer support</p>
        </div>

         <div className="text-center mb-5">
          <div className="icons text-4xl text-black mb-4">
            <i className="ri-git-repository-private-line"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">MONEY BACK GUARANTEE</h2>
          <p className="text-gray-600">We return money within 30 days</p>
        </div>
      </div> */}
    </section>
  );
};

export default Arrivals;
