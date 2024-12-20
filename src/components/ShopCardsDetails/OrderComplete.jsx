const OrderComplete = () => {
  return (
    <section className="px-56 mt-10 pb-10">
      <div className="text-center shadow-2xl rounded-lg   p-14 ">
        <h3 className="font-bold text-[27px]">Thank you !</h3>
        <h1 className="text-[40px] font-bold mt-5">
          Your order has been <br /> received
        </h1>
        <div className="flex justify-center items-center gap-10 mt-10">
          <div className="relative">
            <img
              src="https:cdn.shopify.com/s/files/1/0036/0143/2676/products/slim_bedside_table_1_720x.png?v=1633512042"
              alt=""
              className="w-32 h-32 rounded bg-[#f3f5f7] "
            />
            <span className="absolute bottom-[110px] left-[100px] bg-black text-white px-3 py-1 rounded-full text-center text-[15px]">
              1
            </span>
          </div>
          <div className="relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0036/0143/2676/products/stone_acacia_bedside_table_1_720x.png?v=1633512055"
              alt=""
              className="w-32 h-32 rounded bg-[#f3f5f7]"
            />
            <span className="absolute bottom-[110px] left-[100px] bg-black text-white px-3 py-1 rounded-full text-center text-[15px]">
              2
            </span>
          </div>
          <div className="relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0036/0143/2676/products/ocean_blue_footstool_1_720x.png?v=1633511973"
              alt=""
              className="w-32 h-32 rounded bg-[#f3f5f7]"
            />
            <span className="absolute bottom-[110px] left-[100px] bg-black text-white px-3 py-1 rounded-full text-center text-[15px]">
              3
            </span>
          </div>
        </div>
        <div className="flex justify-center  items-center">
          <div>
            <div className="flex  items-center gap-10 mt-10">
              <p className="text-[#6c7275] font-semibold">order code :</p>
              <span className="font-bold">#0123_45678</span>
            </div>
            <div className="flex  items-center gap-10 mt-10">
              <p className="text-[#6c7275] font-semibold">Date:</p>
              <span className="font-bold">December 13, 2024</span>
            </div>
            <div className="flex  items-center gap-10 mt-10">
              <p className="text-[#6c7275] font-semibold">Total:</p>
              <span className="font-bold">$1,345.00</span>
            </div>
            <div className="flex  items-center gap-10 mt-10">
              <p className="text-[#6c7275] font-semibold">Payment method:</p>
              <span className="font-bold">Credit Card</span>
            </div>
          </div>
        </div>
        <button className="bg-black text-white p-5 px-10 rounded-full mt-9">
          Purchase history
        </button>
      </div>
    </section>
  );
};

export default OrderComplete;
