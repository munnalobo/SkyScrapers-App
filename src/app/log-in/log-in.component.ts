import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logUserName: string;
  logPassword: string;
  constructor() { }

  ngOnInit() {
    this.printName();
  }
  printName() {
    this.logUserName = '';
  }
  printLogin() {
    console.log('Username : ' + this.logUserName);
    console.log('Password : ' + this.logPassword);
  }

}
