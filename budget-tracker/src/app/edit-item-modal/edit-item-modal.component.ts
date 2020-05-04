import { BudgetItem } from 'src/shared/models/budget-items.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {
  @Input() Item: BudgetItem;

  constructor() {}

  ngOnInit(): void {}

  onSubmitted(updatedItem: BudgetItem) {}
}
