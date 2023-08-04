# RoutingStart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 02

Main Routes have been configured and Registered with RouterModule and we have specified the place to render currently selected path component using `<router-outlet>` directive.

## 03

- It would be nice to navigate from with in the app instead of typing in the url bar.
- For this we could have used href, but it's default behaviour is to send the request to the server. Because of this our page reloads and restarts, loosing our entire App state.
- Angular offers us a routerLink which will prevent default behaviour and renders the component without reloading.

## 04

- `<a routerLink="servers">Reload Page</a>`
  `<a routerLink="./servers">Reload Page</a>`
  `<a routerLink="../users">Reload Page</a>`
  These are relative Paths`

- `<a routerLink="/servers">Reload Page</a>`
  This is an Absolute Path
