import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Caminhos devem estar corretos
import { RecoverComponent } from './recover/recover.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'recover', component: RecoverComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redireciona para login
  { path: '**', redirectTo: '/login' }  // Rota de fallback
];
