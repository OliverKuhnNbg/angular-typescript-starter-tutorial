import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent {
  userForm: FormGroup;
  isFormValid: boolean;

  constructor () {
    this.userForm = new FormGroup({
      firstName: new FormControl("", [Validators.required,Validators.minLength(3)]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      // city: new FormControl(""),
      // state: new FormControl(""),
      // zipcode: new FormControl(""),
      // isAgree: new FormControl(false, [Validators.required])
    });

    this.isFormValid = true;
  }

  onSubmit() {
    
    console.log("\n\nTEST: " + this.userForm.valid)
    console.log(this.userForm.value)
    if (!this.userForm.valid) {
      this.isFormValid = false;
    }
  }

}
