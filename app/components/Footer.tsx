import React from 'react';

const Footer = () => {
  return (
    <div className="bg-sky-100 text-black p-6 pt-10">
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-lg text-blue-500 font-bold">Contacts</h1>
        <h2 className="text-3xl text-black font-extrabold">Get in touch</h2>

        <a
          href="mailto:pirzadaduaa87@gmail.com"
          className="text-sm text-black hover:text-cyan-600 transition-colors duration-200"
        >
          pirzadaduaa87@gmail.com
        </a>

  
        <div className="flex flex-row space-x-4">
          <a
            href="https://www.linkedin.com/in/duaa-pirzada-52a1062aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-700"
          >
            <img
              src="https://img.icons8.com/ios-filled/30/1E3A8A/linkedin.png"
              alt="LinkedIn"
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://github.com/DUAAPIRZADA22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-700"
          >
            <img
              src="https://img.icons8.com/ios-filled/30/1E3A8A/github.png"
              alt="GitHub"
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>

         
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-700"
          >
            <img
              src="https://img.icons8.com/ios-filled/30/1E3A8A/instagram-new.png"
              alt="Instagram"
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

    
        <div className="text-sm text-black-500 mt-4">
        Copyright© 2024 Developed & Designed by Duaa Pirzada
        </div>
      </div>
    </div>
  );
};

export default Footer;
