import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  model = {
    name: '',
    email: '',
    phone: '',
    birthday: ''
  };

  submitted = false;
  // pagination

  onSubmit(): void {
    this.submitted = true;
    // For now just log the values; in a real app you'd POST to an API
    console.log('Form submitted', this.model);
  }

  goBack(): void {
    // Simple, dependency-free navigation back
    window.history.back();
  }
}
