# CommitApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.
It implements the Github API and fetches the latest commits from the Angluar Material Repo https://api.github.com/repos/angular/material/commits. 
It will fetch the commits from last month, with the latest commit on top of the list. By selecting a date range, an API call will be triggered which fetches the commits within that date range. 

## Technical Decisions

## Available Scripts

Before running the application, it is recommended to install the Angular CLI: `npm install -g @angular/cli`. In the project directory, you can run:

### Node Package Manager

Run `npm install` to install the dependencies in the local node_modules folder.

### Serve

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Future improvements, features and fixes

### To Do:
- Detail page;
- Readme update for pre-requirements;
- Tests passing;
- Error Handling;

### Nice-to-haves

Since there was limited time to set up this application, I have a few ideas for future improvements:

- Make a not-found page;
- Ellipsis of the commit message in list items;
- Make a Custom Material Theme;
- Reset Datepicker when clicking home;
- Responsive styling;

