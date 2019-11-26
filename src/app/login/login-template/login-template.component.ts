import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss']
})
export class LoginTemplateComponent implements OnInit {
  
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.password.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  public submit() {
    this.router.navigate(['main']);
  }
}
