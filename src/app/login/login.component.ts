import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  successMessage: string = '';

  constructor(private router: Router) {} 

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.successMessage = 'Login realizado com sucesso!';
  }

  onEmailInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.email = target.value;
  }

  onPasswordInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
  }

  navigateToRecover() {
    this.router.navigate(['/recover']);
  }
}
