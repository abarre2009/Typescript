import { BudgetItem } from './../../shared/models/budget-items.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor() {}

  ngOnInit(): void {}

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
  }

  deleteItem(Item: BudgetItem) {
    let index = this.budgetItems.indexOf(Item);
    this.budgetItems.splice(index, 1);
  }
}
