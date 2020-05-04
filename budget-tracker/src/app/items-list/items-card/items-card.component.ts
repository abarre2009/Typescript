import { BudgetItem } from './../../../shared/models/budget-items.models';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.scss']
})
export class ItemsCardComponent implements OnInit {
  @Input() item: BudgetItem;

  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onXbuttonClick() {
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
