import { useState } from 'react';
import Breadcrumb from '../components/header/Breadcrumb'
import '../Style/ProductsDetails.css'
const ProductsDetails = () => {
  const [selected, setSelected] = useState('Newest');
  const [imgs, setImgs] = useState('https://cdn.shopify.com/s/files/1/0036/0143/2676/products/stone_acacia_bedside_table_1_720x.png?v=1633512055');
  const handelImgs = (src) => {
    setImgs(src)
  }
  return (
    <section className='pb-5'>
      <Breadcrumb />
      <div className="p-4  max-w-full mx-auto px-28   flex items-center justify-center">
        <div className="lg:flex lg:max-w-6xl lg:w-full">

          <div className="relative lg:w-1/2">
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-50%</span>
            <img
              src={imgs}
              alt="Tray Table"
              className="w-full h-auto rounded-lg border border-gray-200 bg-[#f3f5f7]"
            />

            <div className="flex justify- items-center  mt-4 space-x-5">
              <img
                src="https:cdn.shopify.com/s/files/1/0036/0143/2676/products/slim_bedside_table_1_720x.png?v=1633512042"
                alt="Small 1"
                className="w-1/4 h-auto cursor-pointer rounded-lg border border-gray-200 hover:shadow-md bg-[#f3f5f7]"
                onClick={() => handelImgs("https:cdn.shopify.com/s/files/1/0036/0143/2676/products/slim_bedside_table_1_720x.png?v=1633512042")}
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0036/0143/2676/products/ocean_blue_footstool_1_720x.png?v=1633511973"
                alt="Small 2"
                className="w-1/4 h-auto cursor-pointer rounded-lg border border-gray-200 hover:shadow-md bg-[#f3f5f7]"
                onClick={() => handelImgs("https://cdn.shopify.com/s/files/1/0036/0143/2676/products/ocean_blue_footstool_1_720x.png?v=1633511973")}
              />
              <img
                src='https://cdn.shopify.com/s/files/1/0036/0143/2676/products/stone_acacia_bedside_table_1_720x.png?v=1633512055'
                alt="Small 3"
                className="w-1/4 h-auto cursor-pointer rounded-lg border border-gray-200 hover:shadow-md bg-[#f3f5f7]"
                onClick={() => handelImgs('https://cdn.shopify.com/s/files/1/0036/0143/2676/products/stone_acacia_bedside_table_1_720x.png?v=1633512055')}
              />
            </div>
          </div>


          <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-24 ">
            <h2 className="text-2xl font-bold text-gray-800">Tray Table</h2>
            <p className="text-gray-600 text-sm mt-2">
              Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.
            </p>

            <div className="mt-4">

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-800">$199.00</span>
                <span className="line-through text-gray-400 text-lg">$400.00</span>
              </div>


              <div className="flex items-center text-sm text-gray-500 mt-4">
                <span>Offer expires in:</span>
                <div className="flex items-center space-x-2 ml-3">
                  <span className="font-bold text-gray-800">02</span><span>Days</span>
                  <span className="font-bold text-gray-800">12</span><span>Hours</span>
                  <span className="font-bold text-gray-800">45</span><span>Minutes</span>
                  <span className="font-bold text-gray-800">05</span><span>Seconds</span>
                </div>
              </div>
            </div>


            <div className="mt-4">
              <div className="text-gray-500 text-sm">Measurements</div>
              <p className="font-bold text-gray-800">17 1/2x20 5/8 </p>
              <div className="flex space-x-4 mt-2">
                <div className="w-8 h-8 bg-black rounded-full border-2 border-gray-300"></div>
                <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-gray-300"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-gray-300"></div>
              </div>
            </div>


            <div className="flex items-center mt-6">
              <button className="bg-gray-100 px-6 py-2 text-sm font-bold rounded-lg border border-gray-300 mr-4">
                Wishlist
              </button>
              <button className="bg-black text-white px-8 py-2 text-sm font-bold rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className='reviews px-28 mt-10'>
        <div className='flex flex-row gap-16 font-medium  	 '>
          <span className='border-b-2 border-current'>Additional Info</span>
          <span className=''>Questions</span>
          <span>Reviews</span>
        </div>

        <div >
          <h1 className='mt-10 font-medium text-2xl'>Customer Reviews</h1>
          <div className="relative w-full mt-10 reviews">
            <input
              type="text"
              placeholder="Write your review..."
              className="input-field"
            />
            <button className="submit-button">Write Reviews </button>
          </div>

          <div className='flex justify-between align-item-center mt-10'>
            <h2 className=' font-medium text-2xl'>11 Reviews</h2>
            <div className=" w-48">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Most Popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        <div className='flex justify-between align-item-center  mt-10'>
          <div className="p-4 border rounded-lg shadow-sm max-w-md bg-white">
            <div className="flex items-center space-x-3">
              <img
                src="http://miini.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2018/12/avatar.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Sofia Harvetz</h3>
                <div className="text-yellow-500">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              I bought it 3 weeks ago and now come back just to say Awesome Product.
            </p>
            <div className="flex space-x-4 text-gray-500 text-sm mt-2">
              <button>Like</button>
              <button>Reply</button>
            </div>
          </div>

          <div className="p-4 border rounded-lg shadow-sm max-w-md bg-white">
            <div className="flex items-center space-x-3">
              <img
                src="http://miini.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2018/12/avatar.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Sofia Harvetz</h3>
                <div className="text-yellow-500">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              I bought it 3 weeks ago and now come back just to say Awesome Product.
            </p>
            <div className="flex space-x-4 text-gray-500 text-sm mt-2">
              <button>Like</button>
              <button>Reply</button>
            </div>
          </div>
        </div>
      </section>

    </section >
  );
};

export default ProductsDetails;


