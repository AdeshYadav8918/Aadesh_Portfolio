import { useState, useEffect } from 'react';
import { Code, Database, Server, Globe, Award, Laptop } from 'lucide-react';

const SkillCard = ({ icon, title, skills, delay }: { 
  icon: React.ReactNode, 
  title: string, 
  skills: string[],
  delay: string
}) => {
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
    
    const element = document.getElementById(title);
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [title]);

  return (
    <div 
      id={title}
      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="relative w-full h-7 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: isVisible ? `${80 + Math.random() * 20}%` : '0%',
                transitionDelay: `${parseInt(delay) + 200 + index * 100}ms`
              }}
            ></div>
            <span className="absolute inset-0 flex items-center px-4 text-sm font-medium text-gray-800 dark:text-gray-200">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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
    
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skillGroups = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["HTML/CSS", "JavaScript", "Python", "C++", "Java", "SQL"],
      delay: "100"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      delay: "200"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Platforms & Tools",
      skills: ["Linux", "AWS"],
      delay: "300"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      skills: ["HTML/CSS", "JavaScript", "Responsive Design"],
      delay: "400"
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Cybersecurity",
      skills: ["Network Analysis", "Security Assessment", "Risk Management"],
      delay: "500"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Soft Skills",
      skills: ["Problem-Solving", "Teamwork", "Logical Thinking", "Documentation"],
      delay: "600"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed a diverse set of skills across multiple domains, with a focus on cybersecurity and web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCard 
              key={index} 
              icon={group.icon} 
              title={group.title} 
              skills={group.skills} 
              delay={group.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;