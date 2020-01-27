import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookedSeatsService } from '@book/shared';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss']
})
export class LoginTemplateComponent implements OnInit {
  private readonly emailPattern: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  public informationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required])
  });
  public get infoF(): {[key: string]: AbstractControl;} {
    return this.informationForm.controls;
  }
  public invalidMessage = {
    enterValue: 'Musisz podać wartość',
    invalidEmail: 'Niepoprawny email'
  };

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

  public submit() {
    // this.bookedSeatsService.updateBookedUserSeatsInformation(this.email.value, this.name.value, this.surname.value, this.phone.value).subscribe(() => {
    setTimeout(() => {
      this.numb = Math.floor(Math.random() * (1000 - 1 + 1000) + 1);
      this.accept = true;
    }, 300);
    // });
    // this.router.navigate(['book']);
  }

  public keyDown(event) {
    if (event.keyCode === 13) {
      this.submit();
    }
  }
}
