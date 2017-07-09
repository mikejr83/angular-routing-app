# angular-routing-app Example

This project was created to explore how the latest version of Angular handles routing. This app is broken into two sections, Home and Configuration. Each of these two sections are created as separate modules. These modules, in turn, our lazy loaded through the Angular router. 

This application should give a good example on how to do lazy loading and nested routing. 

## Dependencies

All the dependencies are handled through Yarn. The application is setup to consume **Bootstrap 4** and **ng-bootstrap**.

## Development server

This example was setup using the Angular CLI. That means to test the app run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). *At this time unit test cases have not been written for the routing examples.*

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`. *At this time end-to-end tests haven't been implemented for the routing examples.*
