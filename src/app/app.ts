import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ElevatorDisplayComponent } from './components/elevator-display.components';
//import { ElevatorDisplayComponent } from './components/elevator-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, ElevatorDisplayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'elevator-simulator-test';

  numElevators: number = 5;
  numFloors: number = 10;
  requestFrequency: number = 1;
  speedMultiplier: number = 1;

  elevators: any[] = [];

  constructor() {
    this.initializeElevators();
  }

  initializeElevators() {
    this.elevators = Array.from({ length: this.numElevators }, (_, i) => ({
      id: i + 1,
      currentFloor: 1,
      direction: 'idle',
      doorOpen: false,
      passengers: 0,
      destinations: []
    }));
  }

  startSimulation() {
    console.log('Starting simulation...');
    // Add logic to start request generation and elevator movement
  }

  stopSimulation() {
    console.log('Stopping simulation...');
    // Add logic to pause simulation
  }

  resetSimulation() {
    console.log('Resetting simulation...');
    this.initializeElevators();
  }
}
