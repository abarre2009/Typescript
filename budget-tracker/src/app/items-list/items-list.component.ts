import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-items.models';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];

  constructor() {}

  ngOnInit(): void {}
}
