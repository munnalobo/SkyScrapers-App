import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SkyScrapers';

  routes = [{linkName: 'Login', url: 'login'},
    {linkName: 'Sign Up', url: 'signup'},
  ];
}
