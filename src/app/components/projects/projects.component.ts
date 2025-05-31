import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('projectsSection', { static: false }) projectsSection!: ElementRef;
  projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Angular, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://picsum.photos/600/400?random=1',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project1',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, built using React, Firebase, and Material-UI.',
      image: 'https://picsum.photos/600/400?random=2',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project2',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides detailed forecasts and weather maps using OpenWeather API.',
      image: 'https://picsum.photos/600/400?random=3',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project3',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and featuring smooth animations and optimized performance.',
      image: 'https://picsum.photos/600/400?random=4',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'Git'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project4',
      featured: false
    }
  ];

  filteredProjects = this.projects;
  activeFilter = 'all';

  filterProjects(filter: string) {
    this.activeFilter = filter;
    
    if (filter === 'all') {
      this.filteredProjects = this.projects;
    } else if (filter === 'featured') {
      this.filteredProjects = this.projects.filter(project => project.featured);
    } else {      this.filteredProjects = this.projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  }

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit() {
    if (this.projectsSection) {
      this.scrollAnimationService.observeElement(this.projectsSection);
    }
  }

  ngOnDestroy() {
    this.scrollAnimationService.disconnectObserver();
  }
}
