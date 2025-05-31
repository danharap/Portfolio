import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('footerSection', { static: false }) footerSection!: ElementRef;
  
  currentYear = new Date().getFullYear();
  angularVersion = '19';

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit() {
    if (this.footerSection) {
      this.scrollAnimationService.observeElement(this.footerSection);
    }
  }

  ngOnDestroy() {
    this.scrollAnimationService.disconnectObserver();
  }
}
