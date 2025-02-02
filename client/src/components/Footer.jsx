import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
        {/* Company */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>Board of Directors</li>
            <li>Partners</li>
            <li>Safety</li>
            <li>Research</li>
            <li>Careers</li>
            <li>News</li>
            <li>Brand Resources</li>
          </ul>
        </div>

        {/* Models */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">Models</h3>
          <ul className="space-y-2">
            <li>Image</li>
            <li>Video</li>
            <li>Audio</li>
            <li>3D</li>
            <li>Language</li>
          </ul>
        </div>

        {/* Applications */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">Applications</h3>
          <ul className="space-y-2">
            <li>Stable Assistant</li>
            <li>Stable Artisan</li>
            <li>Stable Audio</li>
          </ul>
        </div>

        {/* Deployment */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">Deployment</h3>
          <ul className="space-y-2">
            <li>Creo.Ai License</li>
            <li>Community License Agreement</li>
            <li>Platform API</li>
            <li>Cloud Platforms</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Learning Hub</li>
            <li>Customer Stories</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>Acceptable Use Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Discord Terms of Service</li>
            <li>AI Act Suggested Amendments</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>press@Creo.Ai</li>
            <li>partners@Creo.Ai</li>
            <li>Subscribe to Our Newsletter</li>
            <li>Submit a Support Request</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 flex justify-center items-center flex-col">
        <div className="flex space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
        </div>
        <p className="text-gray-500 text-sm">&copy;Creo.Ai, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
