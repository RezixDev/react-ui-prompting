import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:john.doe@example.com',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/',
      color: 'hover:text-gray-800 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/',
      color: 'hover:text-blue-700 dark:hover:text-blue-500'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/',
      color: 'hover:text-blue-500 dark:hover:text-blue-400'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'john.doe@example.com',
      href: 'mailto:john.doe@example.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'New York, USA',
      href: null
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full"></div>
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/5 to-cyan-400/5 rounded-full"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/6 left-1/4 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/5 right-1/3 w-4 h-4 bg-purple-400/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your project to life? I'd love to hear from you. 
            Let's discuss how we can work together to create something exceptional.
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                        } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors duration-200`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                        } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors duration-200`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                        } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors duration-200 resize-vertical`}
                        placeholder="Tell me about your project or question..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 disabled:transform-none disabled:shadow-none flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={info.label} className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-900 dark:text-white">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Connect With Me
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 ${link.color} transition-all duration-300 transform hover:scale-105 hover:shadow-md`}
                      >
                        {link.icon}
                        <span className="font-medium">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Professional Note */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-6 border border-gray-200/20 dark:border-gray-700/20">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Professional Commitment
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    I value clear communication and prompt responses. All inquiries receive 
                    a reply within 24 hours during business days. For urgent matters, 
                    please indicate the priority in your message subject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
      </div>
    </section>
  );
};