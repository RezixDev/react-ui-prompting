import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  isDarkMode?: boolean;
}

export const Hero = ({ isDarkMode = false }: HeroProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Designer',
    'Full Stack Engineer'
  ];

  // Typing animation effect
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactMe = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '6rem' }} 
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"></div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        
        {/* Medium Circle */}
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-br from-indigo-400/15 to-blue-400/15 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        {/* Small Floating Shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/25 to-pink-400/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        
        {/* Triangle */}
        <div className="absolute bottom-1/3 right-1/3 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-indigo-400/20 animate-pulse" style={{ animationDuration: '2s' }}></div>
        
        {/* Hexagon */}
        <div className="absolute top-3/4 left-1/4 w-10 h-10 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 transform rotate-12 animate-spin" style={{ animationDuration: '6s', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            Hello, I'm
          </p>
        </div>

        {/* Name */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            John <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Doe</span>
          </h1>
        </div>

        {/* Animated Title */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="h-16 flex items-center justify-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200">
              {displayText}
              <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly web applications. 
            Specializing in modern JavaScript frameworks and clean, scalable code.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center sm:items-center mb-16" style={{ animationDelay: '1s' }}>
          <button
            onClick={handleViewWork}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            aria-label="View my work and projects"
          >
            View My Work
          </button>
          
          <button
            onClick={handleContactMe}
            className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-label="Get in touch with me"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up flex justify-center space-x-6 mb-16" style={{ animationDelay: '1.2s' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
            aria-label="Visit my GitHub profile"
          >
            <Github className="w-6 h-6" />
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          
          <a
            href="mailto:john.doe@example.com"
            className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
            aria-label="Send me an email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <button
            onClick={() => {
              const aboutSection = document.querySelector('#about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full p-2"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};