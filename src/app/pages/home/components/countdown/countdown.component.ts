import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  giorni = 0;
  ore = 0;
  minuti = 0;
  secondi = 0;

  private intervalId: number | undefined;

  ngOnInit(): void {
    this.update();
    this.intervalId = window.setInterval(() => this.update(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Compute the target date: November 7 at 23:00 of the current year;
   * if that datetime is already past, use next year.
   */
  private getTargetDate(): Date {
    const now = new Date();
    const year = now.getFullYear();
    // Months are 0-based in JS Date: 10 -> November
    const targetThisYear = new Date(year, 10, 7, 23, 0, 0, 0);
    if (now > targetThisYear) {
      return new Date(year + 1, 10, 7, 23, 0, 0, 0);
    }
    return targetThisYear;
  }

  private update(): void {
    const now = new Date().getTime();
    const target = this.getTargetDate().getTime();
    let diff = Math.max(0, target - now);

    if (diff === 0) {
      this.giorni = this.ore = this.minuti = this.secondi = 0;
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
      }
      return;
    }

    const sec = Math.floor(diff / 1000);
    this.giorni = Math.floor(sec / 86400);
    this.ore = Math.floor((sec % 86400) / 3600);
    this.minuti = Math.floor((sec % 3600) / 60);
    this.secondi = sec % 60;
  }
}
