import React, { useState, useEffect, useRef } from 'react';
import { Download, Code, Users, Coffee, Award } from 'lucide-react';

interface AboutProps {
  isDarkMode?: boolean;
}

interface StatItemProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem = ({ icon, number, label, suffix = '', delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= number) {
            setCount(number);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, number, delay]);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          {icon}
        </div>
      </div>
      <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-300 font-medium">
        {label}
      </div>
    </div>
  );
};

export const About = ({ isDarkMode = false }: AboutProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = () => {
    // In a real application, this would trigger a file download
    console.log('Download CV clicked');
    // You can implement actual file download logic here
    // For example: window.open('/path-to-cv.pdf', '_blank');
  };

  const stats = [
    {
      icon: <Code className="w-6 h-6" />,
      number: 5,
      label: 'Years Experience',
      suffix: '+',
      delay: 0
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: 50,
      label: 'Projects Completed',
      suffix: '+',
      delay: 200
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: 25,
      label: 'Happy Clients',
      suffix: '+',
      delay: 400
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      number: 1000,
      label: 'Cups of Coffee',
      suffix: '+',
      delay: 600
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-indigo-400/5 to-blue-400/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* About Text */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="prose prose-lg lg:prose-xl max-w-none text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
              <p className="text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-8">
                Passionate Frontend Developer with a love for creating exceptional digital experiences
              </p>
              
              <p>
                My journey in web development began over 5 years ago when I discovered the perfect blend of creativity and logic that programming offers. Since then, I've dedicated myself to mastering the art of frontend development, specializing in React, TypeScript, and modern web technologies.
              </p>
              
              <p>
                Throughout my career, I've had the privilege of working with diverse teams and clients, from innovative startups to established enterprises. Each project has taught me valuable lessons about user experience, performance optimization, and the importance of clean, maintainable code.
              </p>
              
              <p>
                I believe that great software is not just about functionality—it's about creating intuitive, accessible, and delightful experiences that users love. This philosophy drives my approach to every project, ensuring that the end result not only meets technical requirements but also exceeds user expectations.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the latest web technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm always excited to take on new challenges and collaborate with like-minded professionals who share my passion for excellence.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                suffix={stat.suffix}
                delay={stat.delay}
              />
            ))}
          </div>

          {/* Download CV Button */}
          <div className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 group"
              aria-label="Download my resume"
            >
              <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Download Resume</span>
            </button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Get a detailed overview of my experience and skills
            </p>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
      </div>
    </section>
  );
};