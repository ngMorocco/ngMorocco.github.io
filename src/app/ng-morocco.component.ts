import { Component } from '@angular/core';
import { AboutComponent } from './+about';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { ContactComponent } from './+contact';
import { TeamComponent } from './+team';
import { HomeComponent } from './+home';

@Component({
  moduleId: module.id,
  selector: 'ng-morocco-app',
  templateUrl: 'ng-morocco.component.html',
  directives:[ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/about', component: AboutComponent},
  {path: '/contact', component: ContactComponent},
  {path: '/team', component: TeamComponent},
  {path: '/home', component: HomeComponent},
])
export class NgMoroccoAppComponent {

}
