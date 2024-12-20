 import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/blog1.jpg';
 import img2 from '../../../assets/images/blog2.jpg';
 import img3 from '../../../assets/images/blog3.jpg';
import BlogCard from '../../Blog/BlogCard';

const BlogSection = () => {
  const blogs = [
    {
      title: "7 ways to decorate your home",
      image: img1,
      link: "#",
    },
    {
      title: "Kitchen organization",
      image: img2,
      link: "#",
    },
    {
      title: "Decor your bedroom",
      image: img3,
      link: "#",
    },
  ];
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
      <div className='flex justify-between items-center'>
       <div className="flex items-center space-x-2 mb-6">
          <div className="w-5 h-10 bg-[#000] rounded"></div>
          <h3 className="text-[#000] text-lg font-bold">Blogs</h3>
        </div>
      <Link to="/blogs">
                <button className="play_btn   text-black underline   rounded-md">
                More Blogs<i className="ri-arrow-right-line"></i>
                </button>
              </Link>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
