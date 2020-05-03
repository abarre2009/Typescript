import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.scss']
})
export class ItemsCardComponent implements OnInit {
  @Input() isIncome: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
