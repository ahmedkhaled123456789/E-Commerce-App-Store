import { useEffect } from "react";
import Card from "../components/Card/Card";
import Breadcrumb from "../components/Breadcrumb";
 
const Shop = () => {
    const product = [
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { name: 'Home', href: '/', isHome: true },
    { name: 'Shop', href: '#' },
    
  ];
  return (
    <section className="py-8 px-28">
     {/* Header Section */}
     <div className="header_section  flex justify-center items-center   ">
        <div className="  text-center">
        <Breadcrumb breadcrumbItems={breadcrumbItems} /> 
          <h1 className="text-5xl font-[400]">Shop Page</h1>
          <p className="text-gray-800 mt-5">Let’s design the place you always imagined.</p>
        </div>
      </div>
      {/* Filters */}
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Filter by category */}
          <div className="w-full lg:w-1/4 px-4 mb-4">
            <div className="  ">
              <select
                 className="w-full p-2 border border-black  "
              >
                <option >Filter by category</option>
                
                    <option>
                       kitchen
                    </option>
                    <option>
                       room
                    </option>
               </select>
            </div>
          </div>

          {/* Sort by */}
          <div className="w-full lg:w-1/4 px-4 mb-4">
            <div className="  ">
              <select className="w-full p-2 border border-black ">
                <option>Sort by</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>

          {/* Search */}
         <div className="w-full lg:w-1/2 px-4 mb-4">
  <div className="relative border-black border shadow-md">
    <input
      type="text"
      placeholder="Search..."
      className="w-full p-[6px]   bg-transparent border-none rounded-lg focus:outline-none "
      aria-label="Search"
    />
    <span className="absolute top-1/2 right-4 transform -translate-y-1/2  ">
      <i className="ri-search-line text-lg"></i>
    </span>
  </div>
</div>

        </div>
      </div>

       <div className="container mx-auto mt-8">
        <div className="flex flex-wrap -mx-4">
          {!product ? (
            <h1 className="text-center text-xl font-semibold w-full">
              No products are found!
            </h1>
          ) : (
            product.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <Card product={item} />
              </div>
            ))
          )}
        </div>
      </div>
     </section>
  );
};

export default Shop;
