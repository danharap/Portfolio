import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Lead development of enterprise-level web applications using Angular, Node.js, and cloud technologies. Mentor junior developers and establish best practices.',
      achievements: [
        'Improved application performance by 40% through optimization',
        'Led a team of 5 developers on major product redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['Angular', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed responsive web applications and RESTful APIs. Collaborated with design teams to implement pixel-perfect user interfaces.',
      achievements: [
        'Built 15+ successful client projects',
        'Reduced bug reports by 35% through comprehensive testing',
        'Integrated third-party APIs for payment and analytics'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'REST APIs', 'Git']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Creative Agency Co.',
      period: '2019 - 2020',
      location: 'San Francisco, CA',
      description: 'Focused on creating engaging user experiences and interactive web interfaces. Worked closely with designers to bring creative visions to life.',
      achievements: [
        'Delivered 20+ high-quality web projects',
        'Achieved 98% client satisfaction rate',
        'Optimized websites for mobile-first approach'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap']
    }
  ];
}
