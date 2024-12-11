/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imgDefault from '../../assets/images/counter-timer-img.png';
import './Card.css'
const Card = ({ product }) => {
  const photos = [imgDefault];
  const background = photos[Math.floor(Math.random() * photos.length)];

  return (
    <div className="w-64 mb-5 mr-5 cursor-pointer">
      <div className="card relative bg-gray-100 pt-[50px]    grid place-content-center text-center">
        {product.offer && (
          <div className="absolute top-2 left-2 bg-primary text-white text-xs px-3 py-1 rounded-md">
            {product.offer}
          </div>
        )}
        <div className="absolute top-2 right-2 grid gap-2">
          <i className="ri-heart-fill w-6 h-6 flex items-center justify-center bg-white rounded-full p-1"></i>
          <Link to={`/product/${product.id}`} replace>
            <i className="ri-eye-line w-6 h-6 flex items-center justify-center bg-white rounded-full p-1"></i>
          </Link>
        </div>
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={product.image || background}
          alt={product.title}
          className="h-[150px] w-[200px] mt-4"
        />
        <div className="card_btn bg-black  mb-5 text-white w-full py-2 rounded-md opacity-0 transition-opacity duration-300 ">
          Add to Cart
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-1 text-yellow-500 mt-2">
          {[...Array(Math.floor(product.ratingsAverage || 0))].map((_, index) => (
            <i key={index} className="ri-star-s-fill"></i>
          ))}
          {[...Array(5 - Math.floor(product.ratingsAverage || 0))].map((_, index) => (
            <i key={index} className="ri-star-s-line"></i>
          ))}
          <span className="text-sm text-black opacity-60">
            ({product.ratingsAverage || 0})
          </span>
        </div>
        <h3 className="text-lg font-medium text-black">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-primary font-medium text-lg">
            ${product.priceAfterDiscount}
          </span>
          <span className="line-through text-black opacity-60">
            ${product.price}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Card;
