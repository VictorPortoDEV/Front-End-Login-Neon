import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,  // Carrega o conteúdo conforme a rota
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AppComponent {}
