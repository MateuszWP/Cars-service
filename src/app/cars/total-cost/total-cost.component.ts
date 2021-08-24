import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent {

  @Input() totalCost ?: number;

  constructor() { }

}
