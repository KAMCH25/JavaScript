import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { Found404Component } from './components/found404/found404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},// url vacia redirecciona a Login 
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent},
  { path: 'found404', component: Found404Component},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: 'found404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
