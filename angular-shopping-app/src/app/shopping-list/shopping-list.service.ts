import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  getIngredientsList() {
    return this.ingredients;
  }

  pushIngredientsList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.pushIngredientsList(ingredient);
    }
  }
}
