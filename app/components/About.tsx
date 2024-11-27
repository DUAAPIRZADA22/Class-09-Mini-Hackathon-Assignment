import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-5 sm:px-8 lg:px-10 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="aboutt.jpg"
            alt="About"
            className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl font-semibold text-cyan-500 mb-2">About</h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            A passionate Front-End Web Developer with a keen eye for design and user experience. Proficient in HTML,
            CSS, JavaScript, and frameworks like React and Next.js, I specialize in building responsive and visually
            appealing web applications. With a strong foundation in Tailwind CSS and custom CSS, I create designs
            that are not only functional but also engaging. I am always eager to stay updated with the latest 
            trends in web development, such as web animations, accessibility, and progressive web apps (PWAs).
            I enjoy collaborating with teams to transform ideas into seamless digital experiences. My goal is
            to continuously learn, grow, and create impactful websites that delight users and meet business 
            objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
