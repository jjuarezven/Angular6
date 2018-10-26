import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'un test',
      'https://www.inspiredtaste.net/wp-content/uploads/2017/12/Easy-Bean-Chili-Recipe-4-1200.jpg',
      [new Ingredient('meat', 1), new Ingredient('french fries', 20)]
    ),
    new Recipe(
      'Otro test recipe',
      'otro test',
      'https://www.inspiredtaste.net/wp-content/uploads/2011/12/Pan-Roasted-Chicken-Bread-Recipe-3-1200.jpg',
      [new Ingredient('Buns', 2), new Ingredient('meat', 1)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
