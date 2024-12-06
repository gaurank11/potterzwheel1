import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, Link, Instagram, Facebook, Twitter, Linkedin, MapPin, MapPinned,ContactIcon, TouchpadIcon, Edit2Icon, EditIcon } from 'lucide-react';

const Content = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j3bcnsv",
        "template_8d1xkuo",
        e.target,
        "LhmPcW1aSL4Bb2D5V"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            countryCode: "+91",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message!");
        }
      );
  };

  return (
    <section
      id="content"
      className="max-w-7xl mx-auto py-12 px-6 font-dm-sans text-gray-600"
      style={{
        fontFamily: "DM Sans, sans-serif",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Reach Us */}
        <div
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg shadow-lg text-white relative transition-transform duration-500 hover:scale-105"
          style={{
            fontFamily: "NOURD Bold, sans-serif",
          }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white flex items-center md: gap-4 md:mx-10">
            Reach Us  <MapPinned className="text-3xl text-red-200" />
          </h2>
          <p className="md:mx-10 space-y-10 md:text-xl">
            2nd Floor
            <br />
            SCO Number 8,Vatika Market Place-1, Sector 83
            <br />
            Gurugram, Haryana - 122012
          </p>
          <div className="mt-10 md:mx-10 space-y-5 ">
            <p className="flex items-center">
              <Phone className="mr-2 text-teal-100 text-xl md:text-2xl" />
              <span className=" text-xl md:text-2xl font-bold text-white mx-1">Phone:</span>{" "}
              <a
                href="tel:+919810360300"
                className="underline text-teal-50 hover:text-teal-100 transition-colors mx-6 text-md md:text-xl" 
              >
                +91-9810360300
              </a>
            </p>
            <p className="flex items-center">
              <Mail className="mr-2 text-red-100 text-xl md:text-2xl" />
              <span className="text-xl md:text-2xl font-bold text-white mx-1">Email:</span>{" "}
              <a
                href="mailto:hi@potterzwheel.com"
                className="underline text-red-50 hover:text-red-50 transition-colors mx-8 text-md md:text-xl"
              >
                  hi@potterzwheel.com
              </a>
            </p>
            <p className="flex items-center">
              <Link className="mr-2 text-blue-100 text-xl md:text-2xl" />
              <span className="text-xl md:text-2xl font-bold text-white mx-1">Website:</span>{" "}
              <a
                href="https://potterzwheel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-100 hover:text-blue-50 transition-colors mx-2 text-md md:text-xl "
              >
                  potterzwheel.com
              </a>
            </p>
          </div>
          <div className="mt-12 flex space-x-4 md:mx-10 gap-2 ">
            <a href="https://www.instagram.com/wepotterz/" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-pink-500 hover:text-pink-600 transition-colors md:h-8 w-8" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61559495078889" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-blue-300 hover:text-blue-300 transition-colors  md:h-8 w-8" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-blue-100 hover:text-blue-100 transition-colors  md:h-8 w-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white hover:text-white transition-colors  md:h-8 w-8" />
            </a>
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-teal-700 via-transparent to-yellow-600 opacity-30 rounded-lg blur-lg -z-10"
            aria-hidden="true"
          />
        </div>

        {/* Contact Form */}
        <div
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
           Let's Get in Touch  <EditIcon className="mr-3" />
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Phone Number with Country Code */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <div className="flex items-center">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className="ml-2 w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700"
              >
                Interested in Exploring
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Select a Property Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="SCO">SCO</option>
                <option value="Studio Apartments">Studio Apartments</option>
                <option value="Plots">Plots</option>
                <option value="Fractional Ownership">Fractional Ownership</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Content;
