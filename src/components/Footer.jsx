import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center gap-3">
            {/* Logo and Title Container */}
            <div className="flex items-center">
              <img 
                src="/images/logo2.png" 
                alt="Logo" 
                className="h-8 w-8 object-contain mr-2" 
              />
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                DevCraft<span className="text-primary-600 dark:text-primary-400">.</span>
              </p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mt-0 text-sm max-w-md">
              Building beautiful, functional web experiences with passion and precision.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <SocialLink href="https://github.com" icon={<Github size={20} />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
            <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
            <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
            <SocialLink href="mailto:contact@example.com" icon={<Mail size={20} />} />
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} DevCraft. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

export default Footer;