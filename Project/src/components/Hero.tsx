import { Download, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  setIsVisible(true);
 }, []);

 return (
  <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center">
     <div
      className={`md:w-1/2 transition-all duration-1000 transform ${
       isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'
      }`}
     >
      <div className="text-left">
       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        <span className="block">Hi, I'm</span>
        <span className="text-blue-600 dark:text-blue-400">
         Adesh Yadav
        </span>
       </h1>
       <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
        Aspiring Pentester & Front End Developer
       </h2>
       <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
        I'm passionate about creating secure digital solutions and building
        intuitive web experiences. With expertise in cybersecurity and web
        development, I bring a unique blend of security-first mindset to every
        project.
       </p>

       <div className="flex flex-wrap gap-4 mb-8">
        <a
         href="mailto:aadeshyadav309@gmail.com"
         className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
         <Mail className="h-4 w-4" />
         Contact Me
        </a>
        <a
         href="/Adesh Yadav.pdf"
         className="flex items-center gap-2 px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
        >
         <Download className="h-4 w-4" />
         Download CV
        </a>
       </div>

       <div className="flex gap-4">
        <a
         href="https://linkedin.com/in/adesh-y-1b398b249/"
         target="_blank"
         rel="noopener noreferrer"
         className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
         aria-label="LinkedIn"
        >
         <Linkedin className="h-5 w-5" />
        </a>
        <a
         href="https://github.com/AdeshYadav8918"
         target="_blank"
         rel="noopener noreferrer"
         className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
         aria-label="GitHub"
        >
         <Github className="h-5 w-5" />
        </a>
        <a
         href="mailto:aadeshyadav309@gmail.com"
         className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
         aria-label="Email"
        >
         <Mail className="h-5 w-5" />
        </a>
        <a
         href="tel:+919696987320"
         className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
         aria-label="Phone"
        >
         <Phone className="h-5 w-5" />
        </a>
       </div>
      </div>
     </div>

     <div
      className={`md:w-1/2 flex justify-center mt-10 md:mt-0 transition-all duration-1000 delay-300 transform ${
       isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'
      }`}
     >
      <div className="relative">
       <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 absolute blur-3xl opacity-20 animate-pulse"></div>
       <div className="w-64 h-64 md:w-80 md:h-80 bg-white dark:bg-gray-800 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl relative z-10">
        <img
         src="/profile.jpg"
         alt="Adesh Yadav - Professional Portrait"
         className="w-full h-full object-cover"
        />
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Hero;