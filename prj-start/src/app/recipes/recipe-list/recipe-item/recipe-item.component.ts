import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // no necesitamos enviar el item porque el componente padre recipe-list tiene la información del item
  @Output() itemSelected = new EventEmitter<void>();
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
  onItemSelected() {
    this.itemSelected.emit();
  }
}


