import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = 'admin123';

  usernameField = '';
  passwordField = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.username === this.usernameField && this.password === this.passwordField){
      localStorage.setItem('authenticated', "true");
      this.router.navigateByUrl('dashboard');
    }
  }

}
