import React from "react";

function Login({ openSignUp }) {
  return (
    <div>
      {/* Login form title */}
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        {/* Email input field */}
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter your Email"
          />
        </div>
        
        {/* Password input field */}
        <div>
          <label htmlFor="" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter your Password"
          />
        </div>
        
        {/* Remember Me checkbox and Forgot Password link */}
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="" className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-red-800">
            Forgot Password?
          </a>
        </div>
        
        {/* Login button */}
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Login
          </button>
        </div>
      </form>
      
      {/* Sign-up prompt */}
      <div className="text-center">
        <span className="text-gray-700">Don't Have an Account?</span>
        <button className="text-red-800" onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
