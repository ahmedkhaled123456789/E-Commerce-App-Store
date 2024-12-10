 import { Link } from 'react-router-dom';
import img from '../../../assets/images/Blog.jpg'
const BannerSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center h-auto lg:items-start">
      {/* Left: Image */}
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
        <img
          src={img}
          alt="Banner"
          className='h-[400px]'
         />
      </div>

      {/* Right: Text Content */}
      <div className=" grid justify-center items-center bg-gray-100 h-[400px] pl-20 lg:w-1/2 w-full  lg:text-left">
<div>
<p className="text-blue-500 font-semibold text-sm mb-2">
          SALE UP TO 35% OFF
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          HUNDREDS of <br /> New lower prices!
        </h1>
        <p className="text-gray-600 mb-6">
          It’s more affordable than ever to give every room in your home a
          stylish makeover.
        </p>
        <Link to="/shop">
                <button className="play_btn   text-black underline   rounded-md">
                  Shop Now <i className="ri-arrow-right-line"></i>
                </button>
              </Link>   
</div>    
      </div>
    </div>
  );
};

export default BannerSection;
