import img1 from '../assets/images/bath.jpg';
import img2 from '../assets/images/bath1.jpg';
import img3 from '../assets/images/bath2.jpg';
import BlogSection from '../components/Home/BlogSection/BlogSection'
const BlogDetails = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Blog Title */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          How to make a busy bathroom <br/> a place to relax
        </h1>
        <div className='flex items-center gap-10'>
        <span className="text-gray-500 mt-2"><i className="ri-account-circle-line"></i> Henrik Annemark</span>
        <span className="text-gray-500 mt-2"><i className="ri-calendar-line"></i>  October 12, 2024</span>

        </div>
      </header>

      {/* Main Image */}
      <div className="mb-8">
        <img
          src={img1}
          alt="Bathroom Relaxation"
          className="w-full  "
        />
      </div>

      {/* Blog Content */}
      <section className="space-y-6 text-gray-700 mb-10">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            A cleaning hub with built-in ventilation
          </h2>
          <p className="leading-relaxed">
            Your bathroom serves as a sanctuary of peace and function in any home. With built-in ventilation,
            you can ensure fresh air and minimal clutter for your comfort and ease.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 " >
          <img
            src={img2}
            alt="Bathroom View"
            className="h-[500px]"
          />
          <img
            src={img3}
            alt="Storage Ideas"
            className="h-[500px]"
          />
        </div>

         <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Storage with a calming effect
          </h2>
          <p className="leading-relaxed">
            The right storage solutions can create a calming effect. Minimal shelving, hidden compartments,
            and clever towel racks can turn chaos into calm.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Kit your clutter for easy access
          </h2>
          <p className="leading-relaxed">
            Invest in small organizers to store essential tools, products, and towels. This makes everything
            easy to find and keeps your bathroom looking sharp.
          </p>
        </div>
      </section>
<BlogSection/>
      
    </div>
  );
};

export default BlogDetails;
