import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit() {
    if (this.aboutSection) {
      this.scrollAnimationService.observeElement(this.aboutSection);
    }
  }

  ngOnDestroy() {
    this.scrollAnimationService.disconnectObserver();
  }
}
