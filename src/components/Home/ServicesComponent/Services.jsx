const Services = () => {
    const services = [
      {
        icon: "ri-truck-line",
        title: "Free Shipping",
        description: "Order above $200",
      },
      {
        icon: "ri-money-dollar-circle-line",
        title: "Money-back",
        description: "30 days guarantee",
      },
      {
        icon: "ri-secure-payment-line",
        title: "Secure Payments",
        description: "Secured by Stripe",
      },
      {
        icon: "ri-headphone-line",
        title: "24/7 Support",
        description: "Phone and Email support",
      },
    ];
  
    return (
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 hover:scale-[.9] transition-transform duration-300 ease-in-out"
              >
              <i
                className={`${service.icon} text-4xl  mb-4`}
              ></i>
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Services;
  