export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  type?: 'work' | 'training';
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Activity {
  name: string;
  organization: string;
  date: string;
  type: 'curricular' | 'extra';
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}