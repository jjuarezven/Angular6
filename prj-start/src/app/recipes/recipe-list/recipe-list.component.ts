import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'un test',
    'https://www.inspiredtaste.net/wp-content/uploads/2017/12/Easy-Bean-Chili-Recipe-4-1200.jpg'),
    new Recipe('Otro test recipe', 'otro test',
    'https://www.inspiredtaste.net/wp-content/uploads/2011/12/Pan-Roasted-Chicken-Bread-Recipe-3-1200.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(item: Recipe) {
    this.recipeWasSelected.emit(item);
  }
}
