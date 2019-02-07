import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
  // pagina inicial. path vacio '' es parte de todas las rutas asi que se debe usar pathMatch: 'full' para evitar error
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  // signup
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
