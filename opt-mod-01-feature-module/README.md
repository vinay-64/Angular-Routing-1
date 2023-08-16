# NgCompleteGuideUpdate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 01- Modules- (NgModule) [Declarations, Imports, providers, Bootstrap]

- Module contains :
- Declarations : It is an array of all the components, directives and custom pipes you are using in your application.

- imports : The imports array here is important because that allows you to import other modules into this module. So the imports array here is important to split your app into multiple modules. Thus far, we created only one extra module the AppRoutingModule, but we're using a couple of modules that ship with Angular like the FormsModule, the ReactiveFormsModule, and so on.

* Providers array: Here we define all the services we wanna provide. It's not the case that you can only use a service in the module where you're provided, or at least that's not always the case. But I will come back to that, for now it's important to know any service you plan on injecting needs to be provided and typically you do this in the AppModule or you do that by adding that providedIn root key here into that object you pass to add injectable. This is an alternative to adding that service.

* Bootstrap Array : Now, the bootstrap array is important for starting your app. It defines which component is available right in that index.html file. And typically you only have one component there. You could have multiple components which is why bootstrap is also an array

* when we import another module, we import everything that module exports which in this case is our configured RouterModule. And this is how the configured RouterModule ends up in the AppModule and is available there.

* How to use RecipeModule in AppModule:
  . export all the components in the Recipemodule, so that we can not only use those components in RecipeModule but also other modules which imports this Module.
  .Import RecipeModule in AppModule.
  . Everything in a module works standalone. You can export something to then be able to import it into another module, as I'm doing it here with all these components. But that alone does not mean that in this module, in the RecipesModule here, you can use features that are made available in the AppModule. You can only export something which then is usable anywhere else. You don't automatically get access to other content. So the recipe module and the components in there got absolutely no access to all the things we import into our AppModule.

* whatever you use in the template of these components has to be imported in that module. It's not enough if you import it in the app module. The only exception to the rule are services. These only need to be set up once in the app module and you can access them in your whole application even in components which you added to feature modules. Anything that's used in a template, components, directives, pipes, these things need to be declared or imported into the module where you plan on using them. It's not enough to use them in another module even if you export your things to that other module.
