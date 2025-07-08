import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  frontendSkills: Skill[] = [
    { name: 'Angular', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 95 }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 82 },
    { name: 'MongoDB', level: 85 }
  ];

  toolsSkills: Skill[] = [
    { name: 'Git', level: 95 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 75 }
  ];
}
