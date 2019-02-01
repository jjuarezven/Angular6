import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    // cuando se agrega un elemento al array del servicio, se emite una notificacion con los datos correspondientes
    this.subscription = this.shoppingService.ingredientChanged.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
