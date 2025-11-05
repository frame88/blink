import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterViewInit {
  model = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    birthday: ''
  };

  submitted = false;
  // pagination

  // onSubmit(): void {
  //   this.submitted = true;
  //   // For now just log the values; in a real app you'd POST to an API
  //   console.log('Form submitted', this.model);
  // }

  goBack(): void {
    // Simple, dependency-free navigation back
    window.history.back();
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    const nodes = this.el.nativeElement.querySelectorAll(':scope > *');
    if (nodes && nodes.length) {
      gsap.from(nodes, { opacity: 0, y: 12, stagger: 0.06, duration: 0.5, ease: 'power2.out' });
    }
  }
}
