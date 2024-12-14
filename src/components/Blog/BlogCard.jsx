/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
 

 const BlogCard = ({blogs}) => {
 

  return (
       < >
       
           {blogs.map((article, index) => (
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
                
                <Link to="/blogDetails">
                <button className="play_btn   text-black underline   rounded-md">
                Read More <i className="ri-arrow-right-line"></i>
                </button>
              </Link>
              </div>
            </div>
          ))}
        </>
    );
};

export default BlogCard;
