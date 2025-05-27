import React, { useState, useEffect, useRef } from 'react';
import { Code, Server } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  isVisible: boolean;
  delay?: number;
}

const SkillBar = ({ skill, isVisible, delay = 0 }: { skill: Skill; isVisible: boolean; delay?: number }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 1500;
        const steps = 60;
        const increment = skill.percentage / steps;
        let current = 0;

        const animation = setInterval(() => {
          current += increment;
          if (current >= skill.percentage) {
            setAnimatedPercentage(skill.percentage);
            clearInterval(animation);
          } else {
            setAnimatedPercentage(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(animation);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.percentage, delay]);

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium text-lg">
          {skill.name}
        </span>
        <span className="text-gray-600 dark:text-gray-400 font-semibold">
          {animatedPercentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1500 ease-out ${skill.color}`}
          style={{
            width: `${animatedPercentage}%`,
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, icon, skills, isVisible, delay = 0 }: SkillCategoryProps) => {
  return (
    <div
      className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Skills List */}
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            isVisible={isVisible}
            delay={delay + (index * 150)}
          />
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'React/Next.js', percentage: 95, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
        { name: 'TypeScript', percentage: 90, color: 'bg-gradient-to-r from-blue-600 to-indigo-600' },
        { name: 'JavaScript (ES6+)', percentage: 92, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
        { name: 'HTML5 & CSS3', percentage: 95, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', percentage: 88, color: 'bg-gradient-to-r from-teal-400 to-blue-500' },
        { name: 'Responsive Design', percentage: 93, color: 'bg-gradient-to-r from-purple-500 to-pink-500' }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', percentage: 85, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
        { name: 'Express.js', percentage: 82, color: 'bg-gradient-to-r from-gray-600 to-gray-800' },
        { name: 'MongoDB', percentage: 78, color: 'bg-gradient-to-r from-green-600 to-lime-600' },
        { name: 'PostgreSQL', percentage: 75, color: 'bg-gradient-to-r from-blue-700 to-indigo-700' },
        { name: 'REST APIs', percentage: 88, color: 'bg-gradient-to-r from-indigo-500 to-purple-600' },
        { name: 'GraphQL', percentage: 70, color: 'bg-gradient-to-r from-pink-500 to-rose-500' }
      ]
    },
    {
      title: 'Tools & Other',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Git & GitHub', percentage: 90, color: 'bg-gradient-to-r from-gray-800 to-black' },
        { name: 'Webpack/Vite', percentage: 80, color: 'bg-gradient-to-r from-yellow-600 to-orange-600' },
        { name: 'Docker', percentage: 72, color: 'bg-gradient-to-r from-blue-600 to-cyan-600' },
        { name: 'AWS/Cloud', percentage: 68, color: 'bg-gradient-to-r from-orange-600 to-yellow-500' },
        { name: 'Testing (Jest)', percentage: 75, color: 'bg-gradient-to-r from-red-500 to-pink-500' },
        { name: 'Figma/Design', percentage: 85, color: 'bg-gradient-to-r from-purple-600 to-indigo-600' }
      ]
    }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full"></div>
        <div className="absolute bottom-1/3 -left-40 w-72 h-72 bg-gradient-to-br from-indigo-400/5 to-cyan-400/5 rounded-full"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-purple-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-indigo-400/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels across different technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and methodologies 
              to stay at the forefront of web development. Currently diving deeper into advanced React patterns, 
              serverless architectures, and modern DevOps practices.
            </p>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"></div>
      </div>
    </section>
  );
};