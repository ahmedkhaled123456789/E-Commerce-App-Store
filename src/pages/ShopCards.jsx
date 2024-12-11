import React, { useState } from "react";

const ShopCards = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Tray Table", color: "Black", price: 19, quantity: 2 },
    { id: 2, name: "Tray Table", color: "Red", price: 19, quantity: 2 },
    { id: 3, name: "Table Lamp", color: "Gold", price: 39, quantity: 1 },
  ]);
  const [shipping, setShipping] = useState(0);

  const handleQuantityChange = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + shipping;

  return (
    <section className="px-6 lg:px-28 mt-14">
      <h1 className="text-center text-3xl font-medium">Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mt-10">
        {/* جدول المنتجات */}
        <div className="flex-1">
          <table className="w-full border">
            <thead>
              <tr>
                {["Product", "Quantity", "Price", "Subtotal"].map((header) => (
                  <th key={header} className="border p-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cartItems.map(({ id, name, color, price, quantity }) => (
                <tr key={id}>
                  <td className="border p-2">
                    <div className="flex items-center gap-4">
                      <img
                        src="https:cdn.shopify.com/s/files/1/0036/0143/2676/products/slim_bedside_table_1_720x.png?v=1633512042"
                        alt={name}
                        className="w-12 h-12"
                      />
                      <div>
                        <div>{name}</div>
                        <div className="text-sm text-gray-500">
                          Color: {color}
                        </div>
                        <button
                          onClick={() => handleRemove(id)}
                          className="text-red-500 text-sm hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="border p-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(id, -1)}
                        className="px-2 py-1 border rounded"
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(id, 1)}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="border p-2 text-center">
                    ${price.toFixed(2)}
                  </td>
                  <td className="border p-2 text-center">
                    ${(price * quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* ملخص السلة */}
        <div className="p-4 border rounded-lg shadow-sm bg-white">
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
                  checked={shipping === value}
                  onChange={() => setShipping(value)}
                  className="mr-2"
                />
                {label} <span className="ml-auto">${value.toFixed(2)}</span>
              </label>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
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
