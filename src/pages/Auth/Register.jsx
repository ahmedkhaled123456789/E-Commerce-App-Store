import React from "react";
import auth from "../../assets/images/auth.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Image Section */}
      <div className="flex-1">
        <img
          src={auth}
          alt="Authentication"
          className="object-cover w-screen h-screen"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex flex-1 items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Register</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-green-400 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="block w-full px-3 py-2 focus:outline-none focus:ring-black focus:border-black custom-input"
                />
              </div>

              {/* Username Field */}
              <div>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="block w-full px-3 py-2 focus:outline-none focus:ring-black focus:border-black custom-input"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="block w-full px-3 py-2 focus:outline-none focus:ring-black focus:border-black custom-input "
                />
              </div>

              {/* Password Field */}
              <div>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="block w-full px-3 py-2 focus:outline-none focus:ring-black focus:border-black custom-input"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree with{" "}
                <a href="#" className="text-black font-medium hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-black font-medium hover:underline">
                  Terms of Use
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-medium rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
