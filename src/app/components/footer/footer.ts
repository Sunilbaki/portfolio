import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  brandName = 'Sunil Baki';
  brandDescription = 'Full-stack developer passionate about creating beautiful and functional web applications.';
  currentYear = new Date().getFullYear();

  contactInfo = {
    email: 'hello@sunilbaki.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY'
  };

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: 'linkedin'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/yourusername',
      icon: 'x-twitter'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: 'instagram'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'github'
    }
  ];

  quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];

  legalLinks = [
    { name: 'Privacy Policy', url: '#privacy' },
    { name: 'Terms of Service', url: '#terms' },
    { name: 'Cookie Policy', url: '#cookies' }
  ];
}
