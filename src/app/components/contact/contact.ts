import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  

  contactInfo = {
    email: 'sunilbaki@gmail.com',
    phone: '+91 849483 83516',
    location: 'Bengalore KA'
  };

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sunil-baki',
      icon: 'linkedin'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/Sunil_b16',
      icon: 'x-twitter'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/',
      icon: 'instagram'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Sunilbaki',
      icon: 'github'
    }
  ];

   formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.formData);

    // Here you would typically send the data to your backend
    // For now, we'll just show an alert
    alert('Thank you for your message! I\'ll get back to you soon.');

    // Reset form
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
