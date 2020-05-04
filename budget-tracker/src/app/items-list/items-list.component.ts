import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-items.models';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDeleteButtonClicked(Item: BudgetItem) {
    this.delete.emit(Item);
  }

  onCardClicked() {
    var Item: any;
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: Item
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.budgetItems[this.budgetItems.indexOf(Item)] = result;
      }
    });
  }
}
