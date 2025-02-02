import React from "react";

const ImageGenerationSection = () => {
  return (
    <div
      className="bg-black h-[100vh] flex items-center justify-center p-4"
      style={{ color: "#fff" }}
    >
      <div className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-4">
          <p className="text-purple-400 font-medium text-sm mb-2">
            Image Generation
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Envision The Extraordinary
          </h2>
          <p className="text-gray-400 mb-4">
            Take creativity a step further with the transformative power of our
            Image Generation tool. It’s not just about bringing your concepts to
            life — redefine the impossible. From beginners to professionals, we
            offer a spectrum of settings that can be intuitively tailored to
            your needs.
          </p>
          <p className="text-gray-400">
            Discover an unprecedented fusion of simplicity and power, designed
            to cater to creative minds at all levels.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <div
            className="w-[90%] h-[90%] bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-2xl"
          >
            <div className="bg-gray-900 w-[90%] h-[90%] rounded-lg relative">
              <div className="absolute top-4 right-4">
                <button className="bg-purple-600 text-sm text-white px-4 py-1 rounded">
                  Generate
                </button>
              </div>
              <p className="text-gray-500 text-center mt-20">
                Placeholder Image Section
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerationSection;