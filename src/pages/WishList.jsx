import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";

const WishList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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


   const Wish = [
    
    {id: 1,
        title: "Stylish Chair",
        price: 150,
        priceAfterDiscount: 100,
        ratingsAverage: 4,
        offer: "-30%",
        image: "../../images/double-sofa-01.png"},
        {id: 2,
            title: "Stylish Chair",
            price: 150,
            priceAfterDiscount: 100,
            ratingsAverage: 4,
            offer: "-30%",
            image: "../../images/double-sofa-02.png"},
  
   ];
  return (
    <section className="best_sales py-8 px-28">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Wishlist (0)</h1>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            All Bag
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {Wish.map((product,index) => (
           <Card product={product} key={index}/>
        ))}
      </div>
        {/* Just For You Section */}
        <div className="flex items-center justify-between mt-16">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-black mr-4"></div>
            <h3 className="text-lg font-bold text-black">Just For You</h3>
          </div>
          <Link to="/shop">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              See All
            </button>
          </Link>
        </div>

        {/* Additional Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product,index) => (
           <Card product={product} key={index}/>
        ))}
      </div>
      </div>
    </section>
  );
};

export default WishList;
