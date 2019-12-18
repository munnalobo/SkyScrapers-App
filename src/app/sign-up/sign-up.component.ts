import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userName: string;
  email: string;
  password: string;
  retypePassword: string;

  constructor() {
  }

  ngOnInit() {
    this.printMyName();
  }

  printMyName() {
    this.userName = '';
  }
  printUserDetails() {
    console.log('Username : ' + this.userName);
    console.log('Email : ' + this.email);
    console.log('Password : ' + this.password);
    console.log('Retype Password : ' + this.retypePassword);
    const amandaBoolean = this.password === this.retypePassword;
    console.log(amandaBoolean);
  }
}
