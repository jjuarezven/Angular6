import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  // pagina inicial. path vacio '' es parte de todas las rutas asi que se debe usar pathMatch: 'full' para evitar error
  /* { path: '', redirectTo: '/recipes', pathMatch: 'full' }, */
  { path: '', component: HomeComponent },
  // lazy loading, en tiempo de ejecucion el componente se cargara cuando se intente accede a esa ruta
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
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
