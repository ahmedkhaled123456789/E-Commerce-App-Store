/* eslint-disable react/prop-types */
 
const CustomButton = ({
  children,  
  onClick,  
  type = "button", 
  bg = "primary", 
  size = "md",  
  disabled = false,  
  className = "",  
}) => {
  // Define Tailwind classes for variants
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

   const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 
      ${variantClasses[bg]} ${sizeClasses[size]} 
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${className}`}  
    >
      {children}
    </button>
  );
};

export default CustomButton;


// when use in components
{/* <CustomButton 
onClick={() => console.log("Clicked!")}
 variant="primary"
  className="shadow-lg"
 size="lg"
 >
  Click Me
</CustomButton> */}
