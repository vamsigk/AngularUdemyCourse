import { Component } from '@angular/core';

@Component({
  selector : 'app-display-details',
  templateUrl : './displayDetails.component.html',
  styleUrls : ['./displayDetails.component.css']
})

export class DisplayDetailsComponent {
  buttonClicksArray = [];
  flag: boolean = false;
  count: number = 0;
  buttonCLicksArraySize = '';
  isButtonClick: boolean = false;
  constructor() {

  }

  onDisplayDetailsBtnClick() {
    this.count++;
    this.buttonClicksArray.push(this.count);
    if (this.isButtonClick === false) {
      this.isButtonClick = true;
    }else {
      this.isButtonClick = false;
    }
    console.log("buttonClicksArray"+ this.buttonClicksArray);
    console.log("Display Details : " + this.flag);
  }

  getColor() {
    if (this.buttonClicksArray.length >= 5) {
      this.flag = true;
      return 'blue';
    }
  }
}



