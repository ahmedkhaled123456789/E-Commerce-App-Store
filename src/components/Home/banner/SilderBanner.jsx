import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Sdata from "../../../assets/data/Sdata";
import './Banner.css'
import { Link } from "react-router-dom";
const SilderBanner = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        // navigation
        modules={[Pagination]}
        className="mySwiper"
      >
        {Sdata.map((value, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex justify-center items-center text-center  text-[#000]  h-[450px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${value.cover})`,
              }}
            >
              <div>
                <h1 className="text-2xl font-bold">{value.title}</h1>

                <div className="flex items-center justify-center gap-2">

                  <div className="btn-box d-flex align-items-center mt-3 underline ">

                    <div>
                      <Link to="/shop">
                        <span className="button">Shop Now </span>
                        <i className="ri-arrow-right-line"></i>

                      </Link>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
};

export default SilderBanner;
