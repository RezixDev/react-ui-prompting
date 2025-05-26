import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Zap, Globe, Database, Terminal, Figma, Smartphone, Cloud, GitBranch, Monitor, Package } from 'lucide-react';

interface ToolsProps {
  isDarkMode?: boolean;
}

interface Tool {
  name: string;
  icon: React.ReactNode;
  description: string;
  whyLoveIt: string;
  color: string;
}

interface ToolCategoryProps {
  title: string;
  categoryIcon: React.ReactNode;
  tools: Tool[];
  isVisible: boolean;
  delay?: number;
}

const ToolCard = ({ tool, delay = 0, isVisible }: { tool: Tool; delay?: number; isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-500 transform hover:scale-105 hover:shadow-xl cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tool Icon */}
      <div className={`flex justify-center mb-4 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-lg`}>
          {tool.icon}
        </div>
      </div>

      {/* Tool Name */}
      <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
        {tool.name}
      </h4>

      {/* Tool Description */}
      <p className="text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed mb-4">
        {tool.description}
      </p>

      {/* Hover Overlay with "Why I Love It" */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center p-6 transition-all duration-300 ${
          isHovered ? 'opacity-95 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="text-center">
          <div className="text-white/90 text-xs font-semibold uppercase tracking-wider mb-2">
            Why I Love It
          </div>
          <p className="text-white text-sm leading-relaxed font-medium">
            {tool.whyLoveIt}
          </p>
        </div>
      </div>
    </div>
  );
};

const ToolCategory = ({ title, categoryIcon, tools, isVisible, delay = 0 }: ToolCategoryProps) => {
  return (
    <div className="mb-16 last:mb-0">
      {/* Category Header */}
      <div
        className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          {categoryIcon}
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <ToolCard
            key={tool.name}
            tool={tool}
            delay={delay + (index * 100)}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

export const FavouriteTools = ({ isDarkMode = false }: ToolsProps) => {
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

  const toolCategories = [
    {
      title: 'Development Tools',
      categoryIcon: <Code className="w-6 h-6" />,
      tools: [
        {
          name: 'VS Code',
          icon: <Code className="w-8 h-8" />,
          description: 'Powerful code editor with extensive extensions',
          whyLoveIt: 'Lightning-fast performance, incredible extension ecosystem, and seamless Git integration make coding a joy.',
          color: 'from-blue-500 to-blue-600'
        },
        {
          name: 'React DevTools',
          icon: <Globe className="w-8 h-8" />,
          description: 'Essential browser extension for React debugging',
          whyLoveIt: 'Makes React debugging effortless with component tree inspection and state tracking in real-time.',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          name: 'Chrome DevTools',
          icon: <Monitor className="w-8 h-8" />,
          description: 'Comprehensive web development debugging suite',
          whyLoveIt: 'The ultimate debugging companion - from performance profiling to network analysis, it does it all.',
          color: 'from-green-500 to-teal-500'
        },
        {
          name: 'Postman',
          icon: <Database className="w-8 h-8" />,
          description: 'API development and testing platform',
          whyLoveIt: 'Makes API testing intuitive and collaborative. The collection sharing feature is a game-changer.',
          color: 'from-orange-500 to-red-500'
        },
        {
          name: 'Terminal',
          icon: <Terminal className="w-8 h-8" />,
          description: 'Command-line interface for system operations',
          whyLoveIt: 'Raw power at your fingertips. Nothing beats the speed and efficiency of command-line workflows.',
          color: 'from-gray-700 to-gray-900'
        },
        {
          name: 'npm/Yarn',
          icon: <Package className="w-8 h-8" />,
          description: 'Package managers for JavaScript projects',
          whyLoveIt: 'Seamless dependency management that just works. The vast ecosystem makes development incredibly efficient.',
          color: 'from-red-500 to-pink-500'
        }
      ]
    },
    {
      title: 'Design Tools',
      categoryIcon: <Palette className="w-6 h-6" />,
      tools: [
        {
          name: 'Figma',
          icon: <Figma className="w-8 h-8" />,
          description: 'Collaborative interface design tool',
          whyLoveIt: 'Real-time collaboration and component systems make design-to-development handoffs seamless.',
          color: 'from-purple-500 to-indigo-500'
        },
        {
          name: 'Adobe Creative Suite',
          icon: <Palette className="w-8 h-8" />,
          description: 'Professional creative design software',
          whyLoveIt: 'Industry-standard tools with unmatched creative capabilities. Perfect for high-quality visual assets.',
          color: 'from-pink-500 to-purple-500'
        },
        {
          name: 'Canva',
          icon: <Smartphone className="w-8 h-8" />,
          description: 'Quick and easy graphic design platform',
          whyLoveIt: 'Perfect for rapid prototyping and social media graphics. Templates save hours of design time.',
          color: 'from-teal-500 to-cyan-500'
        },
        {
          name: 'Unsplash',
          icon: <Monitor className="w-8 h-8" />,
          description: 'High-quality stock photography platform',
          whyLoveIt: 'Incredible free photography that elevates every project. The quality and variety are unmatched.',
          color: 'from-indigo-500 to-blue-500'
        }
      ]
    },
    {
      title: 'Productivity Tools',
      categoryIcon: <Zap className="w-6 h-6" />,
      tools: [
        {
          name: 'Notion',
          icon: <Package className="w-8 h-8" />,
          description: 'All-in-one workspace for notes and planning',
          whyLoveIt: 'Combines notes, tasks, and databases perfectly. It\'s like having a second brain for organization.',
          color: 'from-gray-600 to-gray-800'
        },
        {
          name: 'Slack',
          icon: <Zap className="w-8 h-8" />,
          description: 'Team communication and collaboration platform',
          whyLoveIt: 'Keeps team communication organized and searchable. Integrations make it a central hub for work.',
          color: 'from-purple-600 to-indigo-600'
        },
        {
          name: 'Git/GitHub',
          icon: <GitBranch className="w-8 h-8" />,
          description: 'Version control and code collaboration',
          whyLoveIt: 'Essential for any serious development. GitHub\'s community and collaboration features are incredible.',
          color: 'from-gray-800 to-black'
        },
        {
          name: 'Vercel',
          icon: <Cloud className="w-8 h-8" />,
          description: 'Frontend deployment and hosting platform',
          whyLoveIt: 'Deploy with a single git push. The DX is phenomenal and performance optimizations are automatic.',
          color: 'from-blue-600 to-indigo-600'
        },
        {
          name: 'Google Workspace',
          icon: <Globe className="w-8 h-8" />,
          description: 'Cloud-based productivity suite',
          whyLoveIt: 'Seamless collaboration and cloud sync. Real-time editing and sharing make teamwork effortless.',
          color: 'from-green-500 to-emerald-500'
        }
      ]
    }
  ];

  return (
    <section
      id="tools"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full"></div>
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full"></div>
        
        {/* Floating Tool Icons */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/5 left-1/5 w-4 h-4 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Favourite <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tools</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The essential tools that power my development workflow and boost productivity. 
            Hover over each tool to discover why I love using them.
          </p>
        </div>

        {/* Tool Categories */}
        <div className="max-w-7xl mx-auto">
          {toolCategories.map((category, index) => (
            <ToolCategory
              key={category.title}
              title={category.title}
              categoryIcon={category.categoryIcon}
              tools={category.tools}
              isVisible={isVisible}
              delay={index * 300}
            />
          ))}
        </div>

        {/* Bottom Call-to-Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Exploring New Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The tech landscape evolves constantly, and so does my toolkit. I'm always on the lookout for innovative tools 
              that can streamline workflows, improve code quality, or enhance the development experience. 
              Got a tool recommendation? I'd love to hear about it!
            </p>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
      </div>
    </section>
  );
};