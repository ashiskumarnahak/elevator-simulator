import { Injectable } from '@angular/core';
import { Request } from '../models/elevator.model';
import { ElevatorService } from './elevator.service';

@Injectable({ providedIn: 'root' })
export class SchedulerService {
  private requestId = 0;

  constructor(private elevatorService: ElevatorService) {}

  generateRandomRequest(totalFloors: number) {
    const origin = Math.floor(Math.random() * totalFloors) + 1;
    let destination = Math.floor(Math.random() * totalFloors) + 1;
    while (destination === origin) {
      destination = Math.floor(Math.random() * totalFloors) + 1;
    }
    const request: Request = {
      id: this.requestId++,
      originFloor: origin,
      destinationFloor: destination,
      timestamp: Date.now(),
    };
    this.elevatorService.addRequest(request);
  }
}
