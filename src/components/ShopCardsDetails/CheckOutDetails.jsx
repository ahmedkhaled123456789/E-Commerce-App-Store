import { useState } from "react";
import "./CheckOut.css";
const CheckOutDetails = () => {
  const [selected, setSelected] = useState("Country");
  const cartItems = [
    { id: 1, name: "Tray Table", color: "Black", price: 19, quantity: 2 },
    { id: 2, name: "Tray Table", color: "Red", price: 19, quantity: 2 },
    { id: 3, name: "Table Lamp", color: "Gold", price: 39, quantity: 1 },
  ];
  return (
    <section className="px-6 lg:px-28 mt-14 pb-5">
      <div className="grid  grid-cols-2 gap-10 items-start">
        <div>
          <div className="border border-black shadow-md rounded-md p-5">
            <form action="">
              <h1 className="font-semibold text-[20px]">Contact Infomation</h1>
              <div className="flex gap-3 mt-6">
                <div className="w-full">
                  <p className="font-semibold text-[13px]">FIRST NAME</p>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="first name"
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold text-[13px]">LAST NAME</p>
                  <input
                    type="text"
                    name="LastName"
                    placeholder="last name"
                    className="w-full"
                  />
                </div>
              </div>
              <p className="font-semibold text-[13px] mt-5">PHONE NUMBER</p>
              <input
                type="number"
                name="Phone number"
                placeholder="Phone number"
                className="w-full"
              />
              <p className="font-semibold text-[13px] mt-5">Email address</p>
              <input
                type="email"
                name=""
                placeholder="your email"
                className="w-full"
              />
            </form>
          </div>

          <div className="border border-black shadow-md rounded-md p-5 mt-6">
            <form>
              <h1 className="font-semibold text-[20px]">Shipping Address</h1>
              <div>
                <p className="font-semibold text-[13px]">Street Address *</p>
                <input
                  type="text"
                  name=""
                  placeholder="street address "
                  className="w-full"
                />
              </div>

              <p className="font-semibold text-[13px] mt-5">COUNTRY</p>
              <div className=" w-full">
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  <option value="Country">Country</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Syria">Syria</option>
                </select>
              </div>
              <p className="font-semibold text-[13px] mt-5">TOWN/CITY</p>
              <input
                type="text"
                name=""
                placeholder="TOWN/CITY"
                className="w-full"
              />
              <div className="flex items-center gap-3 mt-6">
                <div className="w-full">
                  <p className="font-semibold text-[13px]">FIRST NAME</p>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="first name"
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold text-[13px]">LAST NAME</p>
                  <input
                    type="text"
                    name="LastName"
                    placeholder="last name"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-3">
                <input type="radio" name="shipping" />
                <span className=" pl-2 ">
                  Use a different billing address (optional)
                </span>
              </div>
            </form>
          </div>

          <div className="border border-black shadow-md rounded-md p-5 mt-6">
            <form>
              <div className="flex gap-3 mt-6">
                <label className="mt-3 pay_card  w-full">
                  <input type="radio" name="shipping" />
                  <span className=" pl-2  ">Pay by Card Credit</span>
                </label>

                <label className="mt-3 pay_card  w-full">
                  <input type="radio" name="shipping" />
                  <span className=" pl-2  ">Paypal</span>
                </label>
              </div>

              <p className="font-semibold text-[13px] mt-5">CARD NUMBER</p>
              <input
                type="number"
                name=""
                placeholder="1234 1234 1234"
                className="w-full"
              />
              <div className="flex items-center gap-3 mt-6">
                <div className="w-full">
                  <p className="font-semibold text-[13px]">EXPIRATION DATE</p>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="MM/YY"
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold text-[13px]">CVC</p>
                  <input
                    type="text"
                    name="LastName"
                    placeholder="CVC code"
                    className="w-full"
                  />
                </div>
              </div>
            </form>
          </div>
          <button className="btn_form w-full mt-6">Place Order</button>
        </div>

        <div className="border border-black shadow-md rounded-md p-5 w-[413px]">
          <h1 className="font-semibold text-[20px]">Order Summary</h1>
          {cartItems.map(({ id, name, color, price, quantity }) => (
            <div key={id} className="flex items-center gap-4 mt-6 border-b-2 border-[#d1d1d1]">

              <img
                src="https:cdn.shopify.com/s/files/1/0036/0143/2676/products/slim_bedside_table_1_720x.png?v=1633512042"
                alt={name}
                className="w-24 h-24 rounded bg-[#f3f5f7]"
              />
              <div>
                <h2 className="font-semibold">{name}</h2>
                <span className="font-semibold">${price}</span>
                <p className="text-sm text-gray-500">Color: {color}</p>
                <div
                  className="flex items-center justify-center gap-2 mt-1 border-2 border-black
              rounded-md mb-5"
                >
                  <button className="px-2 py-1 border rounded">-</button>
                  <span>{quantity}</span>
                  <button className="px-2 py-1 border rounded">+</button>
                </div>
              </div>
            </div>

          ))}

          <div className="flex gap-3 w-full mt-3">
            <input type="text" name="input" placeholder="input" id="" className="w-full" />
            <button className="bg-black text-white p-3 rounded-md">
              Apply
            </button>
          </div>
          <div className="flex justify-between items-center  mt-5 pb-3  border-b-2 border-[#d1d1d1] font-semibold">
            <p>JenkateMW</p>
            <p className="text-[#38cb89] font-bold">-$25.00 [Remove]</p>
          </div>
          <div className="flex justify-between items-center  mt-5 pb-3  border-b-2 border-[#d1d1d1] font-semibold">
            <p>Shipping</p>
            <p className=" font-bold">Free</p>
          </div>
          <div className="flex justify-between items-center  mt-5 pb-3  border-b-2 border-[#d1d1d1] font-semibold">
            <p>Subtotal</p>
            <p className="font-bold">-$99.00 </p>
          </div>
          <div className="flex justify-between items-center mt-5 pb-3  border-b-2 border-[#d1d1d1] font-bold text-[20px]">
            <h1>Total</h1>
            <p className="font-bold">$234.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutDetails;
