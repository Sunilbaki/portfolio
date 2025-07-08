import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
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
