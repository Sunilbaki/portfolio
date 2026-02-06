import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  aboutSubtitle = 'Passionate developer with 5+ years of experience in creating digital solutions that make a difference.';

  journeyText = `I started my journey in web development 5 years ago with a simple "Hello World" program.
    Since then, I've worked with startups and established companies, building scalable web applications
    and mobile solutions that serve thousands of users.`;

  passionText = `I'm passionate about clean code, modern design, and creating user experiences that truly matters.`;

  stats = {
    projects: 50,
    experience: 5
  };

  private scrollY = 0;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollY = window.pageYOffset;
  }

  getZoomStyle() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return {};

    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate if the about section is in view
    const isInView = rect.top < windowHeight && rect.bottom > 0;
    
    if (isInView) {
      // Calculate how much of the section is visible (0 to 1)
      const visibleTop = Math.max(0, windowHeight - rect.top);
      const visibleBottom = Math.min(windowHeight, windowHeight - Math.max(0, rect.bottom - windowHeight));
      const visibleHeight = visibleBottom - Math.max(0, windowHeight - rect.bottom);
      const maxVisibleHeight = Math.min(rect.height, windowHeight);
      const visibilityRatio = visibleHeight / maxVisibleHeight;
      
      // Scale from 0.8 to 1.1 based on visibility
      const scale = 0.8 + (visibilityRatio * 0.3);
      
      return {
        transform: `scale(${Math.min(scale, 1.1)})`,
        transition: 'transform 0.3s ease-out'
      };
    }
    
    return {
      transform: 'scale(0.8)',
      transition: 'transform 0.3s ease-out'
    };
  }
}
