import { useState, useEffect } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface Project {
  title: string;
  date: string;
  description: string[];
  techStack: string[];
  github?: string;
  live?: string;
  image: string;
}

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-1" />
            {project.date}
          </div>
        </div>
        
        <div className="mb-4">
          {project.description.map((desc, idx) => (
            <p key={idx} className="text-gray-700 dark:text-gray-300 text-sm mb-2">
              {desc}
            </p>
          ))}
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <Github className="h-4 w-4 mr-1" />
              Code
            </a>
          )}
          
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors duration-300"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
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
    
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Keylogger",
      date: "Jan 2025",
      description: [
        "Executed logging of around 60 screenshots each hour in tandem with capturing close to 1,000 keystrokes hourly.",
        "Captured 10 keystrokes per minute using Pynput while taking 1 screenshot each minute.",
        "Sent logged data to a server every 5 minutes for continuous monitoring."
      ],
      techStack: ["Python", "Pynput", "Server Integration"],
      github: "#",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
    },
    {
      title: "Network Traffic Analyzer",
      date: "Jul 2024",
      description: [
        "Captured up to 100 packets per session to analyze network traffic and identify active/open ports.",
        "Generated an output of 100 captured packets for quick identification of potential vulnerabilities."
      ],
      techStack: ["Python", "Scapy", "Network Analysis"],
      github: "https://github.com/AdeshYadav8918/Network-Traffic-Analyzer.github.io",
      image: "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg"
    },
    {
      title: "Tourism World",
      date: "Feb 2024",
      description: [
        "Developed 'Tourism World', a dynamic website with a responsive interface showcasing 5+ travel destinations.",
        "Enhanced user experience with 5 interactive elements and clean code for optimal functionality."
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "https://tourismworld2.netlify.app/",
      image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;