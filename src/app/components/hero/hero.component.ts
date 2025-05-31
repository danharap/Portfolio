import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef;
  
  displayText = '';
  fullText = 'Full Stack Developer & Software Engineer';
  typingIndex = 0;
  isDeleting = false;
  typingSpeed = 100;

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngAfterViewInit() {
    this.scrollAnimationService.observeElement(this.heroSection);
  }

  ngOnDestroy() {
    this.scrollAnimationService.disconnectObserver();
  }

  private startTypingAnimation() {
    const type = () => {
      if (!this.isDeleting && this.typingIndex < this.fullText.length) {
        this.displayText += this.fullText.charAt(this.typingIndex);
        this.typingIndex++;
        setTimeout(type, this.typingSpeed);
      } else if (this.isDeleting && this.typingIndex > 0) {
        this.displayText = this.fullText.substring(0, this.typingIndex - 1);
        this.typingIndex--;
        setTimeout(type, this.typingSpeed / 2);
      } else if (!this.isDeleting && this.typingIndex === this.fullText.length) {
        setTimeout(() => {
          this.isDeleting = true;
          type();
        }, 2000);
      } else if (this.isDeleting && this.typingIndex === 0) {
        this.isDeleting = false;
        setTimeout(type, 500);
      }
    };
    
    setTimeout(() => type(), 1000);
  }
}
