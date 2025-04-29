import { useState, useEffect } from 'react';
import { User, Mail, Smartphone, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className={`md:w-1/2 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm Adesh Yadav, a passionate cybersecurity enthusiast and web developer with a strong foundation in both 
              defensive security measures and creating engaging web experiences. My journey in technology began with 
              a curiosity about how digital systems work and how to protect them.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With training from IBM in cybersecurity and Elewayte in web development, I've developed a versatile 
              skill set that allows me to approach problems from multiple angles. I pride myself on being a logical 
              thinker and problem solver, constantly seeking to improve my skills and knowledge.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              My experience extends beyond technical skills to community engagement, where I've worked to educate 
              and empower people through various initiatives. I believe technology should be both secure and accessible, 
              which guides my approach to every project I undertake.
            </p>
          </div>
          
          <div className={`md:w-1/2 transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                    <p className="text-gray-800 dark:text-gray-200">Adesh Yadav</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:aadeshyadav309@gmail.com" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">aadeshyadav309@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Smartphone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a href="tel:+919696987320" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">+91 9696987320</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-gray-200">India</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Availablity</p>
                    <p className="text-gray-800 dark:text-gray-200">Available for opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;