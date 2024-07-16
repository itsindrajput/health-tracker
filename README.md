# Health Challenge Tracker

Health Challenge Tracker is a single-page application (SPA) developed in Angular 17, designed to track user workouts and display them in a user-friendly interface.

## Features

- **Workout Form**: Allows users to input their name, workout type, and workout minutes.
- **Workout List**: Displays a grid of user workouts with options for search, filtering by workout type, and pagination.
- **Optional Chart Feature**: Visualizes workout progress using charts.
- **Responsive Design**: Ensures optimal viewing across a range of devices.

## Technologies Used

- **Angular 17**: Front-end framework for building robust SPAs.
- **Tailwind CSS**: Provides utility-first CSS classes for rapid UI development.
- **ngx-pagination**: Library for implementing pagination in Angular applications.
- **ng2-charts**: Integration for displaying charts using Chart.js within Angular.

## Getting Started

Follow these instructions to get a local copy of the project up and running on your machine.

### Prerequisites

- Node.js and npm installed on your development machine.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/itsindrajput/health-tracker.git
   cd health-tracker
   ```

2. Install dependencies:
   `npm install`

### Development Server

- Run the application locally:
  `ng serve`

### Build

- To build the project for production:
  `ng build --prod
`

### Running Tests

- Run unit tests:
  `ng test`
- Run end-to-end tests:
  `ng e2e`

## Development server

- I have Deploy the application on a hosting platform like: Netlify
- 🌎 https://fyle-health-tracker.netlify.app/

- You can alos Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Additional Information

Author: Rishabh Kumar Singh
License: This project is licensed under the MIT License. See the LICENSE file for details.
Contact: itsindrajput@gmail.com

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.
