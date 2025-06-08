export interface Elevator {
  id: number;
  currentFloor: number;
  direction: 'up' | 'down' | 'idle';
  doorOpen: boolean;
  destinations: number[];
  passengers: number;
}

export interface Request {  // <--- Make sure this is present and exported
  id: number;
  originFloor: number;
  destinationFloor: number;
  timestamp: number;
}
