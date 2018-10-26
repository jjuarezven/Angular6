import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('pasta', 10),
    new Ingredient('tomatoes', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // emite el evento a todos los suscritos para que actualicen sus datos
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // el operador de ES6 spread (...) permite convertir un array [1,2,3] a lista 1,2,3, para que asi push pueda aceptar la lista
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
