const ShopCards = () => {
  const cartItems = [
    { id: 1, name: "Tray Table", color: "Black", price: 19, quantity: 2 },
    { id: 2, name: "Tray Table", color: "Red", price: 19, quantity: 2 },
    { id: 3, name: "Table Lamp", color: "Gold", price: 39, quantity: 1 },
  ];

  return (
    <section className="px-6 lg:px-28 mt-14 pb-5">
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mt-10">

        <div className="flex-1 space-y-6">
          {cartItems.map(({ id, name, color, price, quantity }) => (
            <div
              key={id}
              className="flex items-center justify-between  p-4 border-b-2 border-black  bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https:cdn.shopify.com/s/files/1/0036/0143/2676/products/slim_bedside_table_1_720x.png?v=1633512042"
                  alt={name}
                  className="w-16 h-16 rounded bg-[#f3f5f7]"
                />
                <div>
                  <h2 className="font-semibold">{name}</h2>
                  <p className="text-sm text-gray-500">Color: {color}</p>
                  <button className="text-red-500 text-sm hover:underline">
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold">Quantity</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <button className="px-2 py-1 border rounded">-</button>
                  <span>{quantity}</span>
                  <button className="px-2 py-1 border rounded">+</button>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold">Price</p>
                <p>${price}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Subtotal</p>
                <p>${price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
          <div className="space-y-2">
            {[
              { label: "Free shipping", value: 0 },
              { label: "Express shipping", value: 15 },
              { label: "Pick Up", value: 21 },
            ].map(({ label, value }) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="shipping"
                  value={value}
                  className="mr-2"
                />
                {label} <span className="ml-auto">${value}</span>
              </label>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$20</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>$20</span>
            </div>
            <button className="w-full mt-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCards;

