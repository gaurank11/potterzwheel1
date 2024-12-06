import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, Globe } from "lucide-react";

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
      {/* Contact Details Section */}
      <div
        className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-lg shadow-lg text-white relative transition-transform duration-500 hover:scale-105"
        style={{
          fontFamily: "NOURD Bold, sans-serif",
        }}
      >
        <h2 className="text-3xl font-bold mb-4">Reach Us</h2>
        <p className="mb-6">
          <span className="font-bold text-xl text-yellow-200 underline">
            Corporate Office:
          </span>
          <br />
          2nd Floor
          <br />
          SCO Number 8, Vatika Market Place-1, Sector 83
          <br />
          Gurugram, Haryana - 122012
        </p>
        <div className="mt-6 space-y-4">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone size={24} className="text-teal-100" />
            <span className="text-lg font-bold">Phone:</span>
            <a
              href="tel:+919810360300"
              className="underline text-white hover:text-gray-300 transition-colors"
            >
              +91-9810360300
            </a>
          </div>
          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail size={24} className="text-red-200" />
            <span className="text-lg font-bold">Email:</span>
            <a
              href="mailto:hi@potterzwheel.com"
              className="underline text-white hover:text-gray-300 transition-colors"
            >
              hi@potterzwheel.com
            </a>
          </div>
          {/* Website */}
          <div className="flex items-center gap-4">
            <Globe size={24} className="text-blue-100" />
            <span className="text-lg font-bold">Website:</span>
            <a
              href="https://potterzwheel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-100 hover:text-blue-200 transition-colors"
            >
              potterzwheel.com
            </a>
          </div>
        </div>
        {/* Decorative Elements */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-700 via-transparent to-green-500 opacity-30 rounded-lg blur-xl -z-10"
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-500 rounded-full" />
      </div>

      {/* Contact Form */}
      <div
        className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 mt-12"
        style={{
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Let's Get in Touch
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
              Interested in
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
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-400 transition-transform transform hover:scale-105 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Content;
