import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RecoverComponent {
  email: string = '';
  message: string = '';

  onEmailInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  recoverPassword() {
    if (this.email) {
      this.message = 'Instruções para recuperação de senha foram enviadas para ' + this.email;
      this.email = '';
    } else {
      this.message = 'Por favor, insira um email válido.';
    }
  }
}
