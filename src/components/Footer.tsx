import { Linkedin, Github, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-blue-400 mb-2">Adesh Yadav</h2>
            <p className="text-gray-400 max-w-md text-sm">
              A passionate cybersecurity enthusiast and web developer specialized in creating secure and engaging digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://linkedin.com/in/adesh-y-1b398b249/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/AdeshYadav8918"
                target="_blank" 
                rel="noopener noreferrer"  
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:aadeshyadav309@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+919696987320" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-2 bg-blue-600 dark:bg-blue-700 rounded-full text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 animate-bounce"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Adesh Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;