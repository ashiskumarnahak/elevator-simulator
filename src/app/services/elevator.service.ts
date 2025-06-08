import { Injectable } from '@angular/core';
import { Elevator, Request } from '../models/elevator.model';

@Injectable({ providedIn: 'root' })
export class ElevatorService {
  elevators: Elevator[] = [];

  constructor() {}

  initElevators(numElevators: number) {
    this.elevators = [];
    for (let i = 0; i < numElevators; i++) {
      this.elevators.push({
        id: i + 1,
        currentFloor: 1,
        direction: 'idle',
        doorOpen: false,
        destinations: [],
        passengers: 0,
      });
    }
  }

  moveElevators() {
    this.elevators.forEach(elevator => {
      if (elevator.destinations.length === 0) {
        elevator.direction = 'idle';
        elevator.doorOpen = false;
        return;
      }
      const nextFloor = elevator.destinations[0];
      if (elevator.currentFloor === nextFloor) {
        // Arrived at destination
        elevator.doorOpen = true;
        elevator.destinations.shift(); // remove reached floor
        elevator.passengers = Math.max(0, elevator.passengers - 1);
      } else {
        elevator.doorOpen = false;
        elevator.direction = elevator.currentFloor < nextFloor ? 'up' : 'down';
        elevator.currentFloor += elevator.direction === 'up' ? 1 : -1;
      }
    });
  }

  addRequest(request: Request) {
    // Simple logic: assign request to first elevator (improve later)
    const elevator = this.elevators[0];
    if (!elevator.destinations.includes(request.originFloor)) {
      elevator.destinations.push(request.originFloor);
    }
    if (!elevator.destinations.includes(request.destinationFloor)) {
      elevator.destinations.push(request.destinationFloor);
    }
    elevator.passengers++; // Assume one passenger per request
  }
}
