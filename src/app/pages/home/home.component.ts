import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountdownComponent } from './components/countdown/countdown.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CountdownComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
