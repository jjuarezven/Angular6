import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeform: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] && params['id'] !== null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.Name;
      recipeImagePath = recipe.ImagePath;
      recipeDescription = recipe.Description;
      if (recipe['Ingredients']) {
        for (const ingredient of recipe.Ingredients) {
          recipeIngredients.push(
            new FormGroup({
              Name: new FormControl(ingredient.Name, Validators.required),
              Amount: new FormControl(ingredient.Amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeform = new FormGroup({
      Name: new FormControl(recipeName, Validators.required),
      ImagePath: new FormControl(recipeImagePath, Validators.required),
      Description: new FormControl(recipeDescription, Validators.required),
      Ingredients: recipeIngredients
    });
  }

  getControls() {
    return (<FormArray>this.recipeform.get('Ingredients')).controls;
  }

  onSubmit() {
    // toda esta declaracion coincide con this.recipeform.value
    /* const newRecipe = new Recipe(
      this.recipeform.value["name"],
      this.recipeform.value["description"],
      this.recipeform.value["imagePath"],
      this.recipeform.value["ingredients"]
    ); */
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeform.value);
    } else {
      this.recipeService.addRecipe(this.recipeform.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeform.get('Ingredients')).push(
      new FormGroup({
        Name: new FormControl(null, Validators.required),
        Amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeform.get('Ingredients')).removeAt(index);
  }
}
