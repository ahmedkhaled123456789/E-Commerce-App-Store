import ShopCards from "../components/ShopCardsDetails/ShopCards";
import CheckOutDetails from "../components/ShopCardsDetails/CheckOutDetails";

import { useState } from "react";
import OrderComplete from "../components/ShopCardsDetails/OrderComplete";

const ShopCartPages = () => {
  const [tap, setTap] = useState(1);

  return (
    <section className="mt-10">
      {tap === 1 && <h1 className="text-center text-3xl font-medium">Cart</h1>}
      {tap === 2 && (<h1 className="text-center text-3xl font-medium">CheckOut</h1>)}
      {tap === 3 && (<h1 className="text-center text-3xl font-medium">Complete!</h1>)}
      <div className="flex justify-around items-center mt-10">
        <div
          className={`flex items-center gap-4 ${tap === 1 ? "border-b-2 border-green-600" : ""
            } cursor-pointer pb-2`}
        >
          <span
            className={`bg-black text-white px-4 py-2 rounded-full text-center 
            ${tap === 1 ? "bg-green-600" : ""} `}
          >
            1
          </span>
          <a onClick={() => setTap(1)}>Shopping Cart</a>
        </div>
        <div
          className={`flex items-center gap-4 ${tap === 2 ? "border-b-2 border-green-600" : ""
            } cursor-pointer pb-2`}
        >
          <span
            className={`bg-black text-white px-4 py-2 rounded-full text-center 
            ${tap === 2 ? "bg-green-600" : ""} `}
          >
            2
          </span>
          <a onClick={() => setTap(2)}>Checkout Details</a>
        </div>
        <div
          className={`flex items-center gap-4 ${tap === 3 ? "border-b-2 border-green-600 mb-3" : ""
            } cursor-pointer pb-2`}
        >
          <span
            className={`bg-black text-white px-4 py-2 rounded-full text-center 
            ${tap === 3 ? "bg-green-600" : ""} `}
          >
            3
          </span>
          <a onClick={() => setTap(3)}>Order Complete</a>
        </div>
      </div>
      <div>
        {tap === 1 && <ShopCards />}
        {tap === 2 && <CheckOutDetails />}
        {tap === 3 && <OrderComplete />}

      </div>
    </section>
  );
};

export default ShopCartPages;
