// tenemos que crear un routingModule por cada modulo que queramos agregar
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipesRoutes: Routes = [
  {
    path: "",
    component: RecipesComponent,
    children: [
      // por defecto, ningun recipe seleccionado
      { path: "", component: RecipeStartComponent },
      // el mismo componente tanto para creacion como para edicion.
      // Every time the static path should come before the dynamic one para evitar errores
      { path: "new", component: RecipeEditComponent, canActivate: [AuthGuard] },
      // recipe detail
      { path: ":id", component: RecipeDetailComponent },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

// los guards son practicamente los unicos servicios que se pueden tener a nivel de modulos feature, mas especificamente en la configuracion
// de sus rutas porque es alli donde se usan
@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RecipesRoutingModule {}
