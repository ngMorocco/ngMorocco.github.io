# www.ngMorocco.org

[ngMorocco.org](www.ngmorocco.org) is site for the Moroccan AngularJS Developer Community

[![Join the chat at https://ngmorocco.slack.com/messages/ngmorocco-org/](https://ngmorocco.herokuapp.com/badge.svg)](https://ngmorocco.slack.com/messages/ngmorocco-org/)

## How you can help

Filing issues is helpful but **pull requests** are even better!

# How you can join us

> - Join our [meetup page](http://www.meetup.com/r/inbound/0/0/shareimg/http://www.meetup.com/fr-FR/ngMorocco/?a=shareimg) 
> - Join us on [Slack](http://ngmorocco.org/slack.html)
> - Follow us on [Twitter](https://twitter.com/ngMorocco)
> - Follow us on [FaceBook](https://www.facebook.com/pages/NgMorocco/383524638512638)
> - Follow us on [Google Plus](https://plus.google.com/u/0/b/117323506670840622332)


## Development Setup

### installe module
```
npm install
```

### Creating a build
```
ng build
```
The build artifacts will be stored in the dist/ directory.

### Running unit tests

```bash
ng test
```

Tests will execute after a build is executed via [Karma](http://karma-runner.github.io/0.13/index.html), and it will automatically watch your files for changes.

You can run tests a single time via `--watch=false`, and turn off building of the app via `--build=false` (useful for running it at the same time as `ng serve`).

**WARNING:** On Windows, `ng test` is hitting a file descriptor limit (see https://github.com/angular/angular-cli/issues/977).
The solution for now is to instead run `ng serve` and `ng test --build=false` in separate console windows. 

### Running end-to-end tests

```bash
ng e2e
```

Before running the tests make sure you are serving the app via `ng serve`.

End-to-end tests are ran via [Protractor](https://angular.github.io/protractor/).

## Hosting

This project is hosted by GitHub pages
