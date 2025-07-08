import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  bgClass: string;
  textClass: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgClass: string;
  technologies: Technology[];
  demoUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with Angular and Node.js, featuring real-time inventory management.',
      icon: '📱',
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
      technologies: [
        { name: 'Angular', bgClass: 'bg-red-500/20', textClass: 'text-red-400' },
        { name: 'Node.js', bgClass: 'bg-green-500/20', textClass: 'text-green-400' },
        { name: 'MongoDB', bgClass: 'bg-emerald-500/20', textClass: 'text-emerald-400' },
        { name: 'TypeScript', bgClass: 'bg-blue-500/20', textClass: 'text-blue-400' },
        { name: 'Tailwind CSS', bgClass: 'bg-cyan-500/20', textClass: 'text-cyan-400' }
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      icon: '💼',
      bgClass: 'bg-gradient-to-r from-accent to-orange-500',
      technologies: [
        { name: 'React', bgClass: 'bg-sky-500/20', textClass: 'text-sky-400' },
        { name: 'Express.js', bgClass: 'bg-gray-500/20', textClass: 'text-gray-400' },
        { name: 'Socket.io', bgClass: 'bg-purple-500/20', textClass: 'text-purple-400' },
        { name: 'JWT', bgClass: 'bg-pink-500/20', textClass: 'text-pink-400' },
        { name: 'Redis', bgClass: 'bg-red-600/20', textClass: 'text-red-400' }
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      description: 'A comprehensive healthcare management system with patient records and appointment scheduling.',
      icon: '🏥',
      bgClass: 'bg-gradient-to-r from-green-500 to-teal-500',
      technologies: [
        { name: 'Vue.js', bgClass: 'bg-emerald-600/20', textClass: 'text-emerald-400' },
        { name: 'Python', bgClass: 'bg-yellow-500/20', textClass: 'text-yellow-400' },
        { name: 'PostgreSQL', bgClass: 'bg-indigo-500/20', textClass: 'text-indigo-400' },
        { name: 'Django', bgClass: 'bg-green-600/20', textClass: 'text-green-400' },
        { name: 'Docker', bgClass: 'bg-blue-600/20', textClass: 'text-blue-400' }
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'AI-Powered Chat Bot',
      description: 'An intelligent chatbot with natural language processing and machine learning capabilities.',
      icon: '🤖',
      bgClass: 'bg-gradient-to-r from-purple-500 to-pink-500',
      technologies: [
        { name: 'Python', bgClass: 'bg-yellow-500/20', textClass: 'text-yellow-400' },
        { name: 'TensorFlow', bgClass: 'bg-orange-500/20', textClass: 'text-orange-400' },
        { name: 'Flask', bgClass: 'bg-gray-600/20', textClass: 'text-gray-400' },
        { name: 'OpenAI API', bgClass: 'bg-green-500/20', textClass: 'text-green-400' },
        { name: 'WebSocket', bgClass: 'bg-teal-500/20', textClass: 'text-teal-400' }
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform with property listings, virtual tours, and agent management.',
      icon: '🏠',
      bgClass: 'bg-gradient-to-r from-blue-500 to-purple-600',
      technologies: [
        { name: 'Next.js', bgClass: 'bg-gray-800/20', textClass: 'text-gray-300' },
        { name: 'GraphQL', bgClass: 'bg-pink-500/20', textClass: 'text-pink-400' },
        { name: 'Prisma', bgClass: 'bg-indigo-500/20', textClass: 'text-indigo-400' },
        { name: 'AWS S3', bgClass: 'bg-orange-600/20', textClass: 'text-orange-400' },
        { name: 'Stripe', bgClass: 'bg-purple-600/20', textClass: 'text-purple-400' }
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'A mobile-first fitness application with workout tracking, nutrition planning, and social features.',
      icon: '💪',
      bgClass: 'bg-gradient-to-r from-emerald-500 to-lime-500',
      technologies: [
        { name: 'React Native', bgClass: 'bg-cyan-500/20', textClass: 'text-cyan-400' },
        { name: 'Firebase', bgClass: 'bg-yellow-600/20', textClass: 'text-yellow-400' },
        { name: 'Redux', bgClass: 'bg-purple-500/20', textClass: 'text-purple-400' },
        { name: 'Chart.js', bgClass: 'bg-rose-500/20', textClass: 'text-rose-400' },
        { name: 'Expo', bgClass: 'bg-blue-500/20', textClass: 'text-blue-400' }
      ],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];
}
