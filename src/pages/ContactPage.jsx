import { Link } from "react-router-dom";
import img from '../assets/images/Blog.jpg'
 import Services from '../components/Home/ServicesComponent/Services'
 
const ContactPage = () => {
    const contacts = [
        {
          icon: "ri-home-4-line",
          title: "ADDRESS",
          description: "234 Hai Trieu, Ho Chi Minh City, Viet Nam",
        },
        {
          icon: "ri-phone-line",
          title: "CONTACT US",
          description: "+84 234 567 890",
        },
        {
          icon: "ri-mail-line",
          title: "EMAIL",
          description: "hello@3elegant.com",
        },
        
      ];
  return (
    <div className="mt-10">
       <section className="flex flex-col md:flex-row items-center gap-8 mb-12 px-28">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            We believe in sustainable decor. We’re passionate about life at home.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors,
            and classic design, which can be incorporated into any decor project. The pieces enchant
            for their sobriety, to last for generations, faithful to the shapes of each period.
          </p>
          
        </div>
        
      </section>

      <section className="px-28">
      <div className="flex flex-col lg:flex-row items-center h-auto lg:items-start">
      {/* Left: Image */}
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
        <img
          src={img}
          alt="Banner"
          className='h-[400px]'
         />
      </div>

      {/* Right: Text Content */}
      <div className=" grid justify-center items-center bg-gray-100 h-[400px] pl-20 lg:w-1/2 w-full  lg:text-left">
<div>
<p className="text-blue-500 font-semibold text-sm mb-2">
          SALE UP TO 35% OFF
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          HUNDREDS of <br /> New lower prices!
        </h1>
        <p className="text-gray-600 mb-6">
          It’s more affordable than ever to give every room in your home a
          stylish makeover.
        </p>
        <Link to="/shop">
                <button className="play_btn   text-black underline   rounded-md">
                  Shop Now <i className="ri-arrow-right-line"></i>
                </button>
              </Link>   
</div>    
      </div>
    </div>
      </section>

      {/* Contact Us Section */}
      <section className="mt-7 px-28">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>

        {/* Contact Info */}


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 hover:scale-[.9] transition-transform duration-300 ease-in-out"
              >
              <i
                className={`${contact.icon} text-4xl  mb-4`}
              ></i>
              <h3 className="font-bold text-xl mb-2">{contact.title}</h3>
              <p className="text-gray-500">{contact.description}</p>
            </div>
          ))}
        </div>

 

        {/* Contact Form */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-20 mb-20">
  {/* Form Section */}
  <form className="w-full md:w-1/2 grid gap-6">
    {/* Full Name Field */}
    <div>
      <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
        Full Name
      </label>
      <input
        id="fullName"
        type="text"
        placeholder="Enter your full name"
        aria-label="Full Name"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg   "
      />
    </div>

    {/* Email Address Field */}
    <div>
      <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email address"
        aria-label="Email Address"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg   "
      />
    </div>

    {/* Message Field */}
    <div>
      <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
        Message
      </label>
      <textarea
        id="message"
        placeholder="Write your message here..."
        aria-label="Message"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg   transition"
        rows="5"
      ></textarea>
      {/* Submit Button */}
    <button
      type="submit"
      className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition"
    >
      Send Message
    </button>
    </div>

    
  </form>

  {/* Map Section */}
  <div className="w-full md:w-1/2">
    <iframe
      title="Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.614335430684!2d106.69529111428714!3d10.762622462403187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f43af62d53f%3A0x58c3af2e4fae7bdb!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1603378133928!5m2!1sen!2s"
      className="w-full h-80 rounded-lg border border-gray-300"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</div>

        
      </section>
      <section className="px-28 bg-slate-100">
      <Services/>

      </section>
     </div>
  );
};

export default ContactPage;
