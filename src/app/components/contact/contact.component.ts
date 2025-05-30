import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    email: 'daniel.harapiak@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    linkedin: 'https://linkedin.com/in/danielharapiak',
    github: 'https://github.com/danielharapiak',
    twitter: 'https://twitter.com/danielharapiak'
  };

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! I will get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
