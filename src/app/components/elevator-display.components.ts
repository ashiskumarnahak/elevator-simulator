import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Elevator } from '../models/elevator.model';

@Component({
  selector: 'app-elevator-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngFor="let elevator of elevators" class="elevator">
      <p>Elevator #{{ elevator.id }} - Floor: {{ elevator.currentFloor }}</p>
      <p>Status: {{ elevator.direction }} - Door: {{ elevator.doorOpen ? 'Open' : 'Closed' }}</p>
      <p>Passengers: {{ elevator.passengers }}</p>
      <p>Destinations: {{ elevator.destinations.join(', ') || 'None' }}</p>
    </div>
  `,
  styles: [
    `
      .elevator {
        border: 1px solid black;
        margin: 10px 0;
        padding: 10px;
        border-radius: 4px;
      }
    `,
  ],
})
export class ElevatorDisplayComponent {
  @Input() elevators: Elevator[] = [];
}
