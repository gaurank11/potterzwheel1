import React from 'react';
import { InstagramIcon, FacebookIcon, XIcon, LinkedinIcon } from 'lucide-react';

const Footer1 = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left Section - About */}
          <div className="flex flex-col space-y-6">
            <div className="flex-shrink-0">
              <img src="logo.png" alt="Logo" className="h-12 w-auto" />
            </div>
            <p className="text-md text-gray-400 font-dm-sans text-left mx-auto max-w-4xl">
            Building homes, shaping dreams. We specialize in connecting you with the perfect property while redefining trust and transparency in real estate. Let's create a seamless journey toward your ideal home.
</p>


          </div>

          {/* Follow Us Section */}
          {/* Social Links Section */}
<div className="flex flex-col space-y-10 md:items-center">
  {/* Title */}
  <h2 className="text-2xl font-bold text-white font-nourd md:text-center">Follow Us</h2>
  
  {/* Icons for Mobile and Laptop (Responsive) */}
  <div className="flex space-x-4 md:space-x-3">
    <a href="https://www.instagram.com/wepotterz/" className="text-blue-400 hover:text-blue-600">
      <InstagramIcon className="h-5 w-5 md:h-6 md:w-6" />
    </a>
    <a href="https://www.facebook.com/profile.php?id=61559495078889" className="text-blue-400 hover:text-blue-600">
      <FacebookIcon className="h-5 w-5 md:h-6 md:w-6" />
    </a>
    <a href="https://www.x.com" className="text-blue-400 hover:text-blue-600">
      <XIcon className="h-5 w-5 md:h-6 md:w-6" />
    </a>
    <a href="https://www.linkedin.com" className="text-blue-400 hover:text-blue-600">
      <LinkedinIcon className="h-5 w-5 md:h-6 md:w-6" />
    </a>
  </div>
</div>


          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl font-bold text-white font-nourd">Quick Links</h2>
            <ul className="space-y-4 text-lg font-dm-sans">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Our Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-2xl font-bold text-white font-nourd">Contact Us</h3>
            <p className="text-sm text-gray-400">
              <span className="font-bold">Corporate Office:</span><br />
              2nd Floor,<br />
              SCO Number 8,Vatika Market Place-1<br />
              Sector 83, Gurugram, Haryana 122012<br />
            </p>
            <p className="text-sm text-gray-400 mt-4">
              <span className="font-bold">Phone:</span> +91-9810360300<br />
              <span className="font-bold">Email:</span> hi@potterzwheel.com<br />
              <span className="font-bold">Website:</span> potterzwheel.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t-2 border-gray-600" />

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-gray-400 text-sm font-dm-sans">
          <p>&copy; {new Date().getFullYear()} Potterzwheel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
