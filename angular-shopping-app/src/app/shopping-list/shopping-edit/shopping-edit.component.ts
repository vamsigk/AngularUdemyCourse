import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientsDataEvent = new EventEmitter<Ingredient>();
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAMount') inputAmount: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onClickAddRecipe() {
    console.log(this.inputName.nativeElement.value);
     const ingName = this.inputName.nativeElement.value;
     const ingAmount = this.inputAmount.nativeElement.value;
     const newIng = new Ingredient(ingName, ingAmount);
    this.ingredientsDataEvent.emit(newIng);
  }

  onclickDeleteRecipe() {

  }

  onClickClearForm() {

  }
}
