import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../user-data';

@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  private builder = inject(FormBuilder);
  private userData = inject(UserData);
  private router = inject(Router);

  userForm = this.builder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.pattern(/^[1-9][0-9]{2}[1-9][0-9]{6}$/)],
    email: ['', Validators.email]
  });

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.userData.user = this.userForm.getRawValue();
    this.router.navigate(['/user-details']);
  }


}