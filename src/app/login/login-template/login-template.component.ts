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
  public name = new FormControl('', [Validators.required]);
  public surname = new FormControl('', [Validators.required]);
  public phone = new FormControl('', [Validators.required]);
  public show = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        // this.password.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  public submit() {
    this.router.navigate(['book']);
  }
}
