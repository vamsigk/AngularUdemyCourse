import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test',
      'Simply a Test Recipe',
      'http://www.simplyrecipes.com/wp-content/uploads' +
      '/2017/02/2017-02-27-ChickenTikkaMasala-16.jpg',
      [
        new Ingredient('Meat', 11),
        new Ingredient('Cream', 12)
      ]),
    new Recipe('Chik Tikka Masala',
      'This is Chicken Tikka Masala',
      'http://www.simplyrecipes.com/wp-content/uploads' +
      '/2017/02/2017-02-27-ChickenTikkaMasala-16.jpg',
      [
        new Ingredient('Chilli Powder', 15),
        new Ingredient('Onions', 23)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private shoppingListService: ShoppingListService) {

  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
  }
}
