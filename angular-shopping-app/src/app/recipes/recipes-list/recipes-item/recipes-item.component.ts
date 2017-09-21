import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() recipeItemClickEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeItemClick() {
      this.recipeItemClickEvent.emit();
  }

}
