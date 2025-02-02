import React from 'react';

const CommunitySection = () => {
  const testimonials = [
    {
      quote: "Creo gave me a way of expressing myself in a completely new and different way. Without AI I was only a consumer. Now I can create.",
      author: "Malakai030",
      avatar: "/profile1.jpg"
    },
    {
      quote: "Creo is suitable for those who are just starting their way in the world of AI images, as well as for professionals, who are offered a wide range of tools to work with.",
      author: "Raini Studios",
      avatar: "/profile2.jpg"
    },
    {
      quote: "With its powerful fined tuned models Leonardo makes A.I art a breeze. The community is also the best I've found to date!",
      author: "Dee Does A.I",
      avatar: "/profile3.jpg"
    }
  ];

  const partners = [
    { name: "Netflix", logo: "/logo1.png" },
    { name: "FIGMA", logo: "/logo2.png" },
    { name: "PEPSI", logo: "/logo2.png" },
    { name: "APPLE", logo: "/logo4.png" }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-10 pb-10">
      {/* Header Section */}
      <div className="w-full max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          A community of over <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">4 million</span> is waiting for you
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-4xl">
          Creo's power extends beyond our revolutionary tools — we are anchored in one of the largest and most supportive AI communities worldwide, and we're deeply committed to it.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg">
            <p className="lg:text-lg text-sm italic mb-4">{testimonial.quote}</p>
            <div className="flex items-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author}
                className="w-8 h-8 rounded-full mr-3 bg-cover bg-center"
              />
              <span className="font-medium">{testimonial.author}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Partners Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center flex items-center justify-center lg:text-7xl text-4xl font-bold">
          Our <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Partners</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;