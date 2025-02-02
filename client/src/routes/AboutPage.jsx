import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center w-full">
      <header className="w-full bg-slate-900 text-white py-4 shadow-md">
        <h1 className="text-center text-3xl font-bold">About Creo.AI</h1>
      </header>

      <main className="flex-grow w-full max-w-5xl mt-8 mb-16">
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Creo.AI</h2>
          <p className="text-gray-600 leading-relaxed">
            At Creo.AI, we are passionate about harnessing the power of artificial intelligence to transform the way you interact with technology. Our AI chat app is designed to make conversations intuitive, efficient, and impactful, ensuring that you have the answers you need, when you need them.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Creo.AI?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Advanced conversational AI for seamless interactions.</li>
            <li>Personalized experiences tailored to your needs.</li>
            <li>Continuous innovation to bring you the best features.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            We strive to empower individuals and businesses with cutting-edge AI technology, fostering meaningful connections and unlocking new possibilities for growth and creativity.
          </p>
        </section>
      </main>

      <footer className="w-full bg-slate-900 text-white py-4">
        <div className="text-center text-sm">&copy; {new Date().getFullYear()} Creo.AI. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default AboutPage;