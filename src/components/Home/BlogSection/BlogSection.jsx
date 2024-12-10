 import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/blog1.jpg';
 import img2 from '../../../assets/images/blog2.jpg';
 import img3 from '../../../assets/images/blog3.jpg';

const BlogSection = () => {
  const articles = [
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
          <h3 className="text-[#000] text-lg font-bold">Articles</h3>
        </div>
      <Link to="/shop">
                <button className="play_btn   text-black underline   rounded-md">
                More Articles<i className="ri-arrow-right-line"></i>
                </button>
              </Link>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white  overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover mb-2"
              />
              <div className="">
                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                
                <Link to="/shop">
                <button className="play_btn   text-black underline   rounded-md">
                Read More <i className="ri-arrow-right-line"></i>
                </button>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
