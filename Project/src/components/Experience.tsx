import { useState, useEffect } from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string[];
  icon: 'work' | 'education';
  isLeft: boolean;
  isVisible: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  company,
  description,
  icon,
  isLeft,
  isVisible,
  index
}) => {
  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:contents`}>
      <div
        className={`col-start-1 col-end-2 md:mx-auto relative ${isLeft ? 'mr-10' : 'ml-10'} md:mr-0 md:ml-0`}
      >
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-blue-600 dark:bg-blue-400 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-600 dark:bg-blue-400 shadow flex items-center justify-center">
          {icon === 'work' ? (
            <Briefcase className="h-3 w-3 text-white" />
          ) : (
            <GraduationCap className="h-3 w-3 text-white" />
          )}
        </div>
      </div>

      <div
        className={`bg-white dark:bg-gray-800 col-start-2 col-end-12 p-6 rounded-lg shadow-md my-4 mr-auto md:mr-0 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div className="flex flex-wrap justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <p className="mb-3 text-gray-600 dark:text-gray-400 font-medium">{company}</p>
        <ul className="list-disc pl-5 space-y-1">
          {description.map((item, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
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
    
    const element = document.getElementById('experience');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const timelineItems = [
    {
      date: 'Jun 2024 - Jul 2024',
      title: 'Trainee',
      company: 'IBM',
      description: [
        'Learnt about cyber threats (malware, phishing, ransomware) and prioritized risk assessment.',
        'Demonstrated proficiency in deploying and managing firewalls, intrusion detection systems, and antivirus software.',
        'Implemented strong password policies and conducted employee training for effective threat recognition and incident response.',
      ],
      icon: 'education' as const,
    },
    {
      date: 'Dec 2023 - Feb 2024',
      title: 'Trainee',
      company: 'Elewayte',
      description: [
        'Acquired skills in HTML, CSS, JavaScript to create dynamic, user-friendly websites.',
        'Developed the "Tourism World" project with a focus on responsive design and engaging features.',
        'Collaborated with teams to troubleshoot issues and iterated on web applications based on user feedback.',
      ],
      icon: 'education' as const,
    },
    {
      date: 'Jun 2023 - Jul 2023',
      title: 'Intern',
      company: 'Purvanchal Sewa Sansthan',
      description: [
        'Educated villagers in 10+ rural villages about PM Jan Dhan Yojana, Ayushman Bharat and other schemes.',
        'Led 8 sessions on menstrual hygiene for women and girls with 5 senior volunteers.',
        'Sold 100+ sanitary pads to women, promoting informed health choices.',
      ],
      icon: 'work' as const,
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Experience & Training</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational experiences that have shaped my skills and knowledge.
          </p>
        </div>
        
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              company={item.company}
              description={item.description}
              icon={item.icon}
              isLeft={index % 2 === 0}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;