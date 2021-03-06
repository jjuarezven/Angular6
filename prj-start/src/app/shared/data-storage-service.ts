import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import "rxjs/add/operator/map";
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpRequest, HttpParams } from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();

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
        params: new HttpParams().set("auth", token)
      }
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    return (
      this.httpClient
        .get<Recipe[]>(
          "https://ng-recipe-book-f0b42.firebaseio.com/recipes.json",
          {
            params: new HttpParams().set("auth", token)
          }
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
