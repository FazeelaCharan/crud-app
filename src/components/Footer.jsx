import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-6 ">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">My Blog</h1>
            <p className="text-sm text-gray-200">
              Share your stories, inspire others, and explore new ideas.
            </p>
          </div>
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-4 border-white" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} My Blog. All rights reserved.
          </p>
          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png"
                alt="Twitter"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
