import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
  // pagina inicial. path vacio '' es parte de todas las rutas asi que se debe usar pathMatch: 'full' para evitar error
  /* { path: '', redirectTo: '/recipes', pathMatch: 'full' }, */
  { path: "", component: HomeComponent },
  // lazy loading, en tiempo de ejecucion el componente se cargara cuando se intente accede a esa ruta
  { path: "recipes", loadChildren: "./recipes/recipes.module#RecipesModule" },
  {
    path: "shopping-list",
    component: ShoppingListComponent
  }
];

@NgModule({
  // agregando preloading:
  /*
  What is the idea behind lazy loading? You want to have a smaller bundle to load initially. That's all. If that wouldn't matter,
  you could always load everything eagerly since that, besides the bundle size issue, is always better => The code is there when
  you need it, right from the start.
  With lazy loading, we reduce the initial load size but we of course face another issue: Once the route for which the code is loaded
  lazily is loaded, that code has to be fetched from the server. If that code chunk is a bit bigger, that may take some time. Even if
  it's just 1 second, the user has to wait for that before your app "continues". It's stuck otherwise because the code
  it absolutely needs, is missing.

  Preloading fixes this problem. You load the smaller bundle initially. But then you don't wait until the user needs the lazily-loaded
  chunk but preload it whilst the user is doing other things on your page. So that preload happens in the background, not affecting
  the user experience. Once the user navigates to the route which was loaded lazily, he can instantly get there since
  the code has been preloaded.
  */
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
