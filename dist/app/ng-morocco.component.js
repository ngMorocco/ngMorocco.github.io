"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var _team_1 = require('./+team');
var _home_1 = require('./+home');
var whatWeDo_component_1 = require("./+whatWeDo/whatWeDo.component");
var NgMoroccoAppComponent = (function () {
    function NgMoroccoAppComponent() {
    }
    NgMoroccoAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng-morocco-app',
            templateUrl: 'ng-morocco.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/', component: _home_1.HomeComponent },
            { path: '/team', component: _team_1.TeamComponent },
            { path: '/whatWeDo', component: whatWeDo_component_1.WhatWeDoComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], NgMoroccoAppComponent);
    return NgMoroccoAppComponent;
}());
exports.NgMoroccoAppComponent = NgMoroccoAppComponent;
//# sourceMappingURL=../../app/ng-morocco.component.js.map