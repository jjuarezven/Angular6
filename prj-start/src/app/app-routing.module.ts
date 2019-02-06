import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
  // pagina inicial. path vacio '' es parte de todas las rutas asi que se debe usar pathMatch: 'full' para evitar error
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      // por defecto, ningun recipe seleccionado
      { path: '', component: RecipeStartComponent },
      // el mismo componente tanto para creacion como para edicion.
      // Every time the static path should come before the dynamic one para evitar errores
      { path: 'new', component: RecipeEditComponent },
      // recipe detail
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  // signup
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
