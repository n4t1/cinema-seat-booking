import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookedSeatsService } from '@book/shared';

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

  public accept = false;
  public numb: number;

  constructor(
    private router: Router,
    private bookedSeatsService: BookedSeatsService
  ) {
  }

  ngOnInit() {
  }

  public getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.name.hasError('required') ? 'You must enter a value' :
        this.surname.hasError('required') ? 'You must enter a value' :
          this.phone.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
              '';
  }

  public submit() {
    // this.bookedSeatsService.updateBookedUserSeatsInformation(this.email.value, this.name.value, this.surname.value, this.phone.value).subscribe(() => {
    setTimeout(() => {
      this.numb = Math.floor(Math.random() * (1000 - 1 + 1000) + 1);
      this.accept = true;
    }, 300);
    // });
    // this.router.navigate(['book']);
  }
}
