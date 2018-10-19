import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'un test',
        'https://www.inspiredtaste.net/wp-content/uploads/2017/12/Easy-Bean-Chili-Recipe-4-1200.jpg'),
        new Recipe('Otro test recipe', 'otro test',
        'https://www.inspiredtaste.net/wp-content/uploads/2011/12/Pan-Roasted-Chicken-Bread-Recipe-3-1200.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}
