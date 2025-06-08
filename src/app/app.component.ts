import { Component, OnInit, OnDestroy } from '@angular/core';
import { Elevator } from './models/elevator.model';
import { ElevatorDisplayComponent } from './components/elevator-display.components';
import { ElevatorService } from './services/elevator.service';
import { SchedulerService } from './services/scheduler.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ElevatorDisplayComponent, CommonModule, FormsModule],
  template: `
    <div style="
      max-width: 1000px;
      margin: 20px auto;
      border: 3px solid #2c3e50;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 0 12px rgba(0,0,0,0.1);
      background-color: #f9f9f9;
    ">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="font-size: 2.5rem; color: #2c3e50;">8 bytes of🚦 Elevator Simulation</h1>
        <p style="color: #555;">Control panel to simulate smart elevator operations of 8 bytes </p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-bottom: 1rem;">
        <label>
          Elevators:<br />
          <input type="number" [(ngModel)]="numElevators" min="1" max="10" />
        </label>

        <label>
          Floors:<br />
          <input type="number" [(ngModel)]="numFloors" min="1" max="50" />
        </label>

        <label>
          Request frequency:<br />
          <input type="number" [(ngModel)]="requestFrequency" min="0" max="10" step="0.1" />
        </label>

        <label>
          Speed:<br />
          <select [(ngModel)]="speedMultiplier">
            <option [value]="1">1x</option>
            <option [value]="2">2x</option>
            <option [value]="5">5x</option>
          </select>
        </label>
      </div>

      <div style="text-align: center; margin-bottom: 1rem;">
        <button (click)="start()">Start</button>
        <button (click)="stop()">Stop</button>
        <button (click)="reset()">Reset</button>
      </div>

      <hr />

      <app-elevator-display [elevators]="elevatorService.elevators"></app-elevator-display>
    </div>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  numElevators = 5;
  numFloors = 10;
  requestFrequency = 1;
  speedMultiplier = 1;
  intervalId: any;

  constructor(
    public elevatorService: ElevatorService,
    private schedulerService: SchedulerService
  ) {}

  ngOnInit() {
    this.reset();
  }

  start() {
    this.stop();
    this.intervalId = setInterval(() => {
      this.schedulerService.generateRandomRequest(this.numFloors);
      this.elevatorService.moveElevators();
    }, 1000 / this.speedMultiplier);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  reset() {
    this.stop();
    this.elevatorService.initElevators(this.numElevators);
  }

  ngOnDestroy() {
    this.stop();
  }
}
