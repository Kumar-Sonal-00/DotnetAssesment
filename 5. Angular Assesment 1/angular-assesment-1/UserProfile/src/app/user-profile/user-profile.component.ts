import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent  {
  
  user = {
    name: ' Kumar Sonal',
    age: 24,
    email: 'sonalk419@gmail.com',
    address: 'Yemlur Banglore'
  };

  isEditing = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    if (this.validateEmail(this.user.email)) {
      this.isEditing = false;
    } else {
      alert('Please enter a valid email address.');
    }
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }


}
