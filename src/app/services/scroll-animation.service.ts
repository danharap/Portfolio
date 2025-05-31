import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer!: IntersectionObserver;
  private animatedElements = new Set<Element>();

  constructor() {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger animation 100px before element enters viewport
      threshold: 0.1 // Trigger when 10% of element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
          this.animateElement(entry.target);
          this.animatedElements.add(entry.target);
        }
      });
    }, options);
  }

  observeElement(element: ElementRef) {
    if (element && element.nativeElement) {
      this.observer.observe(element.nativeElement);
    }
  }

  private animateElement(element: Element) {
    // Add the animate class to trigger CSS animations
    element.classList.add('animate-in');
    
    // Add staggered animation for child elements
    const children = element.querySelectorAll('.animate-child');
    children.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('animate-in');
      }, index * 100); // 100ms delay between each child
    });
  }

  disconnectObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
