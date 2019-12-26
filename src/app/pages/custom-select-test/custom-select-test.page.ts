import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-select-test',
  templateUrl: './custom-select-test.page.html',
  styleUrls: ['./custom-select-test.page.scss'],
})
export class CustomSelectTestPage implements OnInit {

  constructor() { }

  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };

  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };
  
  ngOnInit() {
  }

}
