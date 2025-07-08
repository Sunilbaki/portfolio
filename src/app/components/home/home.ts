import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  name = 'Sunil Baki';
  description = 'Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences.';

  scrollY = 0;
  zoomScale = 1;

  ngOnInit() {
    this.updateZoomScale();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
    this.updateZoomScale();
  }

  private updateZoomScale() {
    // Calculate zoom scale based on scroll position
    // Zoom out as user scrolls down from home section
    const maxScroll = window.innerHeight; // Full viewport height
    const scrollRatio = Math.min(this.scrollY / maxScroll, 1);

    // Scale from 1 (normal) to 0.8 (zoomed out) and back to 1
    if (scrollRatio <= 0.5) {
      // Scrolling down: zoom out from 1 to 0.8
      this.zoomScale = 1 - (scrollRatio * 0.4); // 1 to 0.8
    } else {
      // Scrolling further: zoom back in from 0.8 to 1
      this.zoomScale = 0.8 + ((scrollRatio - 0.5) * 0.4); // 0.8 to 1
    }

    // Ensure scale doesn't go below 0.7 or above 1.1
    this.zoomScale = Math.max(0.7, Math.min(1.1, this.zoomScale));
  }

  getTransformStyle() {
    return {
      transform: `scale(${this.zoomScale})`,
      transition: 'transform 0.3s ease-out'
    };
  }
}
