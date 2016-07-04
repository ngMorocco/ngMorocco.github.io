import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { ContactComponent } from './+contact';
import { TeamComponent } from './+team';
import { HomeComponent } from './+home';
import { MeetupComponent } from './+meetup';
import {WhatWeDoComponent} from "./+whatWeDo/whatWeDo.component";

@Component({
  moduleId: module.id,
  selector: 'ng-morocco-app',
  templateUrl: 'ng-morocco.component.html',
  directives:[ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/contact', component: ContactComponent},
  {path: '/team', component: TeamComponent},
  {path: '/meetup', component: MeetupComponent},
  {path: '/whatWeDo', component: WhatWeDoComponent}
])
export class NgMoroccoAppComponent {

}
