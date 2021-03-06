import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIdex = 0;
  editeditem: Ingredient;
  @ViewChild('f') shoppingform: NgForm;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIdex = index;
        this.editMode = true;
        this.editeditem = this.shoppingService.getIngredient(index);
        this.shoppingform.setValue({
          name: this.editeditem.Name,
          amount: this.editeditem.Amount
        });
      }
    );
  }

  onSumbit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (!this.editMode) {
      this.shoppingService.addIngredient(newIngredient);
    } else {
      this.shoppingService.updateIngredient(this.editedItemIdex, newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.shoppingform.reset();
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editedItemIdex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
