# www.ngMorocco.org

[ngMorocco.org](www.ngmorocco.org) is site for the Moroccan AngularJS Developer Community

[![Build Status][travis-badge]][travis-badge-url]
[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status][david-dev-badge]][david-dev-badge-url]
[![npm][npm-badge]][npm-badge-url]

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

This project is hosted on a Github Page

[travis-badge]: https://travis-ci.org/ngMorocco/ngMorocco-profile.svg?branch=master
[travis-badge-url]: https://travis-ci.org/ngMorocco/ngMorocco-profile
[slack-badge]: https://ngmorocco.herokuapp.com/badge.svg
[slack-badge-url]: https://ngmorocco.slack.com/messages/ngmorocco-org/
[david-badge]: https://david-dm.org/ngmorocco/ngmorocco-profile.svg
[david-badge-url]: https://david-dm.org/ngmorocco/ngmorocco-profile
[david-dev-badge]: https://david-dm.org/ngmorocco/ngmorocco-profile/dev-status.svg
[david-dev-badge-url]: https://david-dm.org/ngmorocco/ngmorocco-profile#info=devDependencies
[npm-badge]: https://img.shields.io/badge/npm-3.8.9-red.svg
[npm-badge-url]: https://github.com/ngMorocco/ngMorocco-profile