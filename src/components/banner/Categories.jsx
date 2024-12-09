/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import './Banner.css'

const Categories = () => {
  const data = [
    {
      icon: "ri-customer-service-line",
      title: "Headphones",
    },
    {
      icon: "ri-camera-line",
      title: "Camera",
    },
    {
      icon: "ri-computer-line",
      title: "Computers",
    },
    {
      icon: "ri-cellphone-line",
      title: "Phones",
    },
    {
      icon: "ri-gamepad-fill",
      title: "Gaming ",
    },
    {
      icon: "ri-battery-2-line",
      title: "Battery ",
    },
  ];

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="ri-arrow-right-line"></i>{" "}
        </button>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
     const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="ri-arrow-left-line"></i>{" "}
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      600: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <section className="categories border-b border-gray-300 pb-8 mt-10">
      <div className="container mx-auto">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-5 h-10 bg-blue-500 rounded"></div>
          <h3 className="text-blue-500 text-lg font-bold"> Browse By Categories</h3>
        </div>
        
        <Swiper {...settings} modules={[Navigation]}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="categories-box text-center cursor-pointer transition-all">
                <div className="info h-36  border-2 border-gray-300 rounded p-4 flex flex-col justify-center items-center transition-all hover:bg-blue-500 hover:text-white">
                  <div className="icon">
                    <i className={`${item.icon} text-3xl`}></i>
                  </div>
                  <p className="categories-text mt-2">{item.title}</p>
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
