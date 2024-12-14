 
  import { useEffect } from 'react';
import img1 from '../assets/images/blog1.jpg';
  import img2 from '../assets/images/blog2.jpg';
  import img3 from '../assets/images/blog3.jpg';
 import BlogCard from '../components/Blog/BlogCard';
import Breadcrumb from '../components/Breadcrumb';
 
 const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
     {
        title: "Decor your bedroom",
        image: img3,
        link: "#",
      },
      {
        title: "Decor your bedroom",
        image: img3,
        link: "#",
      },
      {
        title: "Decor your bedroom",
        image: img3,
        link: "#",
      },
      {
        title: "Decor your bedroom",
        image: img3,
        link: "#",
      },
      {
        title: "Decor your bedroom",
        image: img3,
        link: "#",
      },
      {
        title: "Decor your bedroom",
        image: img3,
        link: "#",
      },
     
   ];

   const breadcrumbItems = [
    { name: 'Home', href: '/', isHome: true },
    { name: 'Blog Page', href: '#' },
    
  ];
   return (
     <div className="px-28 mb-10">
            {/* Header Section */}
     <div className="header_section  flex justify-center items-center   ">
        <div className="  text-center">
        <Breadcrumb breadcrumbItems={breadcrumbItems} /> 
          <h1 className="text-5xl font-[400]">Blog Page</h1>
          <p className="text-gray-800 mt-5">Let’s design the place you always imagined.</p>
        </div>
      </div>
      {/* Filters */}
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Filter by category */}
          <div className="w-full lg:w-1/4 px-4 mb-4">
            <div className="  ">
              <select
                 className="w-full p-2 border border-black  "
              >
                <option >Filter by category</option>
                
                    <option>
                       kitchen
                    </option>
                    <option>
                       room
                    </option>
               </select>
            </div>
          </div>

          {/* Sort by */}
          <div className="w-full lg:w-1/4 px-4 mb-4">
            <div className="  ">
              <select className="w-full p-2 border border-black ">
                <option>Sort by</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>

          {/* Search */}
         <div className="w-full lg:w-1/2 px-4 mb-4">
  <div className="relative border-black border shadow-md">
    <input
      type="text"
      placeholder="Search..."
      className="w-full p-[6px]   bg-transparent border-none rounded-lg focus:outline-none "
      aria-label="Search"
    />
    <span className="absolute top-1/2 right-4 transform -translate-y-1/2  ">
      <i className="ri-search-line text-lg"></i>
    </span>
  </div>
</div>

        </div>
      </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         <BlogCard blogs={blogs} />
         </div>
      </div>
   );
 };
 
 export default BlogPage;
 
 