import React from 'react'
import Image from 'next/image';

const projects = [
     {
        image: "downloadd.png",
        title: "E-commerce Website",
        description: "A fully responsive e-commerce website for a coffee shop, featuring a menu, pricing, and a simple cart system using React, Next.js, and Tailwind CSS.",
        githubLink: "https://github.com/DUAAPIRZADA22/E-commerce-Website",
        liveView: "https://e-commerce-website-kappa-two.vercel.app/"
     },
     {
        image: "download.png",
        title: "Personal Portfolio",
        description: "A sleek, modern personal portfolio showcasing my web development skills, projects, and achievements, built using Next.js and Tailwind CSS",
        githubLink: "https://github.com/DUAAPIRZADA22/My-Personal-Portfolio",
        liveView: "https://my-personal-portfolio-nine-tan.vercel.app/"
     },
     {
        image: "download1.png",
        title: "Birthday Wish App",
        description: "An interactive birthday wish app that allows users to send personalized wishes, built using Next.js, Tailwind CSS, and Shadcn UI",
        githubLink: "https://github.com/DUAAPIRZADA22/Birthday-Wish-App",
        liveView: "https://birthday-wish-app-murex.vercel.app/"
     },
     {
        image: "download 2.png",
        title: "Countdown Timer",
        description: " A dynamic countdown timer that helps track upcoming events, built with JavaScript to provide real-time countdown functionality.",
        githubLink: "https://github.com/DUAAPIRZADA22/CountDown_Timer",
        liveView: "https://count-down-timer-lyart.vercel.app/"
     },
     {
        image: "download3.png",
        title: "Weather Widget App",
        description: "A tool that displays real-time weather information such as temperature, humidity, and forecast for a specific location. ",
        githubLink: "https://github.com/DUAAPIRZADA22/Weather-Widget-App",
        liveView: "https://weather-widget-app-murex.vercel.app/"
     },
     {
        image: "download4.jpg",
        title: "Word Counter",
        description: " A tool that counts the number of words in a given text or document to help monitor word limits or track writing progress.",
        githubLink: "https://github.com/DUAAPIRZADA22/Word-Counter",
     }
];

export default function Projects() {
    return (
      <div className="bg-gray-100 py-10 pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-xl font-semibold text-cyan-500 text-center mb-8">Projects</h1>
          <p className="text-center text-4xl text-black font-bold mb-10">What I have made?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition duration-300 w-90" 
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-8"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  {project.githubLink && (
                    <a
                      href="https://github.com/DUAAPIRZADA22"
                      className="text-blue-500 hover:underline"
                    >
                      Github
                    </a>
                  )}
                  {project.liveView && (
                    <a
                      href="https://vercel.com/duaapirzada22s-projects"
                      className="text-blue-500 hover:underline"
                    >
                      LiveView
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  