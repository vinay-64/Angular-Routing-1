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

## 02 - Outsourcing routes related to Recipes from App-routing module to Recipe-routing-module.

- it's really important to understand that you don't just add to declarations what you plan on using in a template, but you also have to add any routes here that you load via routing.

* There is no reason to still export all these recipe components because we're now only using them internally in the recipes module.

* So there is no reason to export the recipe components anymore because we're not using these recipe components in the app component or any child component of the app component.

## 03 - Added another Module for Shopping Feature.

## 04 - Shared Modules

- Whenever there are many duplicated components across different modules, we can separate them into a shared module and import it in other modules which use this.
- the idea here is that you still now declare and import anything into this module that might be used by other modules, but since every module works standalone, to then also make these things available in other modules, you will also export all these things which you're importing.

* the idea is that wherever we import the shared module, we have access to all these features which we initialize here. So, in other modules, where we want to use one or all of these features, we don't have to add them to their modules, we just import the shared module and we got access because we're exporting all these stuff. If we wouldn't export it, we would not have access.
* if we would use the alert component here, or the placeholder directive, or the dropdown directive, then we would gain much more from that because now we don't have to add all of that to declarations here. We just bring in the shared module and we got access to all the things declared in the shared module and exported there.

* If you declare the shopping list component here, in the shopping list module, you must not declare it anywhere else. Even if you need it in another module, you must not declare it there. The solution then, instead, is to export it here and import that module into another module and that's exactly what we're doing with the shared module.

* You can only define, or declare, components, directives and pipes once. You can't do that multiple times. You can import a module into multiple imports. So, it is fine if we import the router module here in the recipes module and also in the shopping list module. Imports are okay, but declarations are not.

## 05 - Core Module

- you don't need to export your services because services work differently than declarations. Only declarations and other modules need to be exported. Services are automatically injected on a root level, you don't need to export them to make this happen. So services are simply an exception.

* But as I mentioned, A, Core Module is optional, and B, this is only required if you provide a service here instead of providing it through @Injectable, which would be my recommendation to use whenever possible.

* So what's the CoreModule? The CoreModule is basically there to make the AppModule a bit leaner. Let's say in the AppModule we have the AppComponent, and here we are providing two services. Well then we can use a CoreModule to move these services out of the AppModule into the CoreModule, which then in turn, is added back to the AppModule.
