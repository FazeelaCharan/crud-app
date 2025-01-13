import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Our Blog
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to our blog! Here, we share insightful articles, tips, and
          stories on various topics. Our goal is to create a platform where
          knowledge and experiences are exchanged freely.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
            Explore Blogs
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      <div className="mt-10">
        <img src="https://shorturl.at/IPmcs" alt="About us illustration" />
      </div>
    </div>
  );
};

export default About;
