import Arrivals from "../components/Home/Arrivals/Arrivals"
import Categories from "../components/Home/banner/Categories"
import HeadingBanner from "../components/Home/banner/HeadingBanner"
import SilderBanner from "../components/Home/banner/SilderBanner"
import BannerSection from "../components/Home/BannerSection/BannerSection"
import BlogSection from "../components/Home/BlogSection/BlogSection"
 import ProductCard from "../components/ProductCard/ProductCard"
import Services from "../components/Home/ServicesComponent/Services"

 
const Home = () => {
  return (
     <>
     <div className="px-28"> <SilderBanner/></div>
     <div className="px-28"> <HeadingBanner/></div>
     <div className="px-28 mb-10"> <Categories/></div>
     <div className="px-28 mb-10"> <Arrivals/></div>
     <div className="px-28 mb-10"> <ProductCard/></div>
     <div className="px-28 mb-10"> <Services/></div>
     <div className="  mb-10"> <BannerSection/></div>
     <div className="px-28 mb-10"> <BlogSection/></div>
 
 
     </>
  )
}

export default Home
