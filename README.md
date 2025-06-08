# 8 Byte ElevatorSimulator Application

This project is an **Elevator Simulation Application** built with [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

### 🌐 Live Deployment

👉 **URL**: [http://18.233.96.124/](http://18.233.96.124/)  
🎮 Visit the simulation to interact with the elevator system in real time!


---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Development Server](#development-server)
- [Code Scaffolding](#code-scaffolding)
- [Building the Project](#building-the-project)
- [Running Tests](#running-tests)
- [Deployment](#deployment)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

---

## Project Overview

ElevatorSimulatorTest is a web-based application that simulates the operation of elevators in a multi-floor building. The application models elevator movements, floor requests, and real-time status updates, providing an interactive UI to visualize elevator operations.

This project demonstrates:

- Angular standalone components and modular architecture
- Event-driven elevator request handling and state management
- Building and deploying an Angular SPA (Single Page Application)
- Integration with process managers and reverse proxy for production deployment

---

## Features

- Simulates multiple elevator  floors.
- Real-time elevator movement and floor selection.
- Interactive user interface for sending elevator requests.
- Responsive design and smooth animations.
- Easy to build and deploy as a static Angular app.

---

## Technologies Used

- Angular 20.0.1
- TypeScript
- Node.js 20.x
- npm
- http-server (for serving production build)
- PM2 (optional, for process management)
- NGINX (optional, for reverse proxy in production)

---

## Development Server

To start the development server locally:

```bash
ng serve
 ```
 
## Code Scaffolding
To generate a new Angular component, use:

```bash
ng generate component component-name
 ```
## Building the Project
To build the project for production:

```bash
ng build --configuration production
 ```
## Deployment
### Serve Production Build Locally
You can serve the production build locally using http-server:
```bash
npx http-server ./dist/elevator-simulator-test -p 4200 --host 0.0.0.0 --spa 
```
## Using PM2 to Manage the Server
For production, use PM2 to keep the server alive:

```bash 
pm2 start http-server --name elevator-app -- ./dist/elevator-simulator-test -p 4200 --host 0.0.0.0 --spa
```
## Usage
1. Open the app in a browser --> http://18.233.96.124/

2.  Use the UI to request elevator floors.
3. Observe the elevator moving between floors based on requests.

4. The app simulates realistic elevator behavior, including queues.


## 🙋 Author

Ashis Kumar Nahak -DevOps Developer
