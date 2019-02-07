import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  // pagina inicial. path vacio '' es parte de todas las rutas asi que se debe usar pathMatch: 'full' para evitar error
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
