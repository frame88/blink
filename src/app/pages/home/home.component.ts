import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountdownComponent } from './components/countdown/countdown.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CountdownComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    // Animate direct children of the component root with a small stagger
    const nodes = this.el.nativeElement.querySelectorAll(':scope > *');
    if (nodes && nodes.length) {
      gsap.from(nodes, { opacity: 0, y: 16, stagger: 0.08, duration: 0.6, ease: 'power2.out' });
    }
  }
}
