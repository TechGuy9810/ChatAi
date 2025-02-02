import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="bg-gray-100 h-screen px-6">
      <div className="w-full h-full max-w-7xl mx-auto text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8 w-80 md:w-96">
          Have any questions or need support? Feel free to reach out to us!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
          {/* Contact Form */}
          <form className="w-11/12 md:w-1/2 bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="w-11/12 md:w-1/3 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              Reach out to us via email, phone, or visit us at our office.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-500">
                  <i className="fas fa-envelope"></i>
                </span>
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p className="text-gray-700">
                  1234 Street Name, City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
