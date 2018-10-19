import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  /* cambiado al migrar a componentes
  
  // no necesitamos enviar el item porque el componente padre recipe-list tiene la información del item
  @Output() itemSelected = new EventEmitter<void>(); */
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {}
  
  onItemSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
    //this.itemSelected.emit();
  }
}


