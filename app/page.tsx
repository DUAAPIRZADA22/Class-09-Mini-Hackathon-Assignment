import React from 'react';
import Footer from './components/Footer';
import About from './about/page';
import Skills from './components/Skills';
import Projects from './components/Project';

const page = () => {
  return (
    <div className="bg-sky-100 min-h-[130vh] p-10 pt-32"> 
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <div className="max-w-lg">
          <h1 className="text-lg text-cyan-500">Hi Everyone, I am</h1>
          <h1 className="text-4xl font-bold text-black mt-2">Duaa Pirzada</h1>
          <p className="text-gray-700 mt-4 leading-relaxed">
            I am a passionate student at GIAIC, currently diving deep into the exciting realms of Artificial 
            Intelligence, Web 3.0, and the Metaverse. With a strong drive to stay ahead of the curve, I am fascinated 
            by the endless possibilities these technologies offer.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/duaapirzada-CV.pdf.pdf"
              target="__blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition-all"
            >
              Download CV
            </a>
            <a
              href="/"
              target="__blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-black px-6 py-2 rounded-md shadow hover:bg-gray-400 transition-all"
            >
              Explore More
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 ml-auto">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-64 h-64 rounded-lg shadow-lg object-cover"
          />
          <br/> <br/> <br/> <br/>
        </div>
      </div>
      
      <About/>
      <Skills/>
      <Projects/>
      <Footer />
    </div>
  );
};

export default page;
