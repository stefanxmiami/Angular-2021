import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = 'admin';
  public password: string = 'adminadmin';

  constructor() {}

  ngOnInit(): void {
  }

  LoginUser(){
    if(this.username == "admin" && this.password == "adminadmin"){
      console.log("Welcome");
    }
  }

}
