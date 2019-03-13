import { Action } from "@ngrx/store";
import { Ingredient } from "../shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

// lo mismo que en el servicio
const initialState = {
    ingredients: [
        new Ingredient('pasta', 10),
        new Ingredient('tomatoes', 3)
      ]
};

// state= initialState => valor por defecto, la primera vez que se ejecuta
export function shoppingListReducer(state= initialState, action: Action) {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients : [...state.ingredients, action]
            }
            break;
    
        default:
            break;
    }
    return state;
}
