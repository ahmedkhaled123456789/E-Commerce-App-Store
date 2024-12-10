/* eslint-disable react/prop-types */
import  { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Categories = () => {
  const swiperRef = useRef(null);

  const data = [
    { icon: "ri-customer-service-line", title: "Headphones" },
    { icon: "ri-camera-line", title: "Camera" },
    { icon: "ri-computer-line", title: "Computers" },
    { icon: "ri-cellphone-line", title: "Phones" },
    { icon: "ri-gamepad-fill", title: "Gaming" },
    { icon: "ri-battery-2-line", title: "Battery" },
  ];

  const settings = {
    slidesPerView: 5,
    spaceBetween: 15,
    onSwiper: (swiper) => (swiperRef.current = swiper), // Get swiper instance
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    },
  };

  return (
    <section className="categories border-b border-gray-300 pb-8 mt-10 ">
      <div className="container mx-auto  ">
      <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2 mb-6">
          <div className="w-5 h-10 bg-[#000] rounded"></div>
          <h3 className="text-[#000] text-lg font-bold">Browse By Categories</h3>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()} // Navigate to previous slide
            className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            <i className="ri-arrow-left-line text-lg"></i>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()} // Navigate to next slide
            className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            <i className="ri-arrow-right-line text-lg"></i>
          </button>
        </div>
      </div>
      

        <Swiper {...settings} modules={[Navigation]}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="categories-box text-center cursor-pointer transition-all">
                <div className="info h-32 border border-gray-300 rounded p-3 flex flex-col justify-center items-center transition-all hover:bg-blue-500 hover:text-white">
                  <div className="icon">
                    <i className={`${item.icon} text-2xl`}></i>
                  </div>
                  <p className="categories-text mt-1 text-sm">{item.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
