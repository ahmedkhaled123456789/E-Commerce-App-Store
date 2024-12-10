import { Link } from "react-router-dom";
import Card from "../Card/Card";

 
const ProductCard = () => {
  const products = [
    {id: 1,
    title: "Stylish Chair",
    price: 150,
    priceAfterDiscount: 100,
    ratingsAverage: 4,
    offer: "-30%",
    image: "../../images/counter-timer-img.png"},
    {id: 2,
        title: "Stylish Chair",
        price: 150,
        priceAfterDiscount: 100,
        ratingsAverage: 4,
        offer: "-30%",
        image: "../../images/double-sofa-01.png"},
        {id: 3,
            title: "Stylish Chair",
            price: 150,
            priceAfterDiscount: 100,
            ratingsAverage: 4,
            offer: "-30%",
            image: "../../images/double-sofa-02.png"},
            {id: 4,
                title: "Stylish Chair",
                price: 150,
                priceAfterDiscount: 100,
                ratingsAverage: 4,
                offer: "-30%",
                image: "../../images/double-sofa-03.png"},

   ];

  return (
    <div className=" ">
     

        <div className='flex justify-between items-center'>
       <div className="flex items-center space-x-2 mb-6">
          <div className="w-5 h-10 bg-[#000] rounded"></div>
          <h3 className="text-[#000] text-lg font-bold">New Products</h3>
        </div>
      <Link to="/shop">
                <button className="play_btn   text-black underline   rounded-md">
                More Products<i className="ri-arrow-right-line"></i>
                </button>
              </Link>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product,index) => (
           <Card product={product} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
