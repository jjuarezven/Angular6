import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import "rxjs/add/operator/map";
<<<<<<< HEAD
=======
import { AuthService } from "../auth/auth.service";
>>>>>>> 1376f97e3ae27be6339a8f98b006b5107f971b5f
import { HttpClient, HttpRequest, HttpParams } from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
<<<<<<< HEAD
=======
    const token = this.authService.getToken();

>>>>>>> 1376f97e3ae27be6339a8f98b006b5107f971b5f
    /* return this.httpClient.put(
      "https://ng-recipe-book-f0b42.firebaseio.com/recipes.json",
      this.recipeService.getRecipes(),
      {
        observe: "body",
        // headers: new HttpHeaders().set('Authorization', 'Bearer sssss') // se pueden configurar headers
        params: new HttpParams().set("auth", token)
      }
    ); */
    const req = new HttpRequest(
      "PUT",
      "https://ng-recipe-book-f0b42.firebaseio.com/recipes.json",
      this.recipeService.getRecipes(),
      {
        reportProgress: true,
        // headers: new HttpHeaders().set('Authorization', 'Bearer sssss') // se pueden configurar headers
<<<<<<< HEAD
        // ahora el token va a ser agregado por el interceptor
        //params: new HttpParams().set("auth", token)
=======
        params: new HttpParams().set("auth", token)
>>>>>>> 1376f97e3ae27be6339a8f98b006b5107f971b5f
      }
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    return (
      this.httpClient
        .get<Recipe[]>(
          "https://ng-recipe-book-f0b42.firebaseio.com/recipes.json",
          // ahora el token va a ser agregado por el interceptor
          /* {
            params: new HttpParams().set("auth", token)
          } */
        )
        // infiere el tipo de respuesta
        /* .map((response: Response) => {
        const recipes: Recipe[] = response.json(); */
        .map(recipes => {
          for (const recipe of recipes) {
            if (!recipe["ingredients"]) {
              recipe["ingredients"] = [];
            }
          }
          return recipes;
        })
        .subscribe((recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        })
    );
  }
}
