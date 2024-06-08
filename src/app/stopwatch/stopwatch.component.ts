import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.css',
})
export class StopwatchComponent {
  // Variables for time values
  seconds = 0;
  minutes = 0;
  hours = 0;

  // Variables for leading zero
  leadingSeconds: string | number = '00';
  leadingMinutes: string | number = '00';
  leadingHours: string | number = '00';

  // Vairables for set interval & timerstatus
  timerInterval!: ReturnType<typeof setTimeout>;
  timerStatus = 'stopped';

  stopWatch = () => {
    this.seconds++;

    if (this.seconds / 60 === 1) {
      this.seconds = 0;
      this.minutes++;

      if (this.minutes / 60 === 1) {
        this.minutes = 0;
        this.hours++;
      }
    }

    if (this.seconds < 10) {
      this.leadingSeconds = '0' + this.seconds.toString();
    } else {
      this.leadingSeconds = this.seconds;
    }
    if (this.minutes < 10) {
      this.leadingMinutes = '0' + this.minutes.toString();
    } else {
      this.leadingMinutes = this.minutes;
    }
    if (this.hours < 10) {
      this.leadingHours = '0' + this.hours.toString();
    } else {
      this.leadingHours = this.hours;
    }
  };

  startPauseTimer() {
    if (this.timerStatus === 'stopped') {
      this.timerInterval = setInterval(this.stopWatch, 1000);
      this.timerStatus = 'started';
    } else {
      clearInterval(this.timerInterval);
      this.timerStatus = 'stopped';
    }
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.leadingSeconds = '00';
    this.leadingMinutes = '00';
    this.leadingHours = '00';
  }
}
