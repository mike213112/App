import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitLogin() {
    const mail = (<HTMLInputElement>document.getElementById('email')).value;
    const pass = (<HTMLInputElement>document.getElementById('password')).value;
    this.router.navigate(['/user/principal']);
  }

}
