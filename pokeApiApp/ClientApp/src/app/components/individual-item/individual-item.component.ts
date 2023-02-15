import { Component, Input, OnInit } from '@angular/core'
import { ItemModel } from 'src/app/models/item.model'
@Component({
  selector: 'app-individual-item',
  templateUrl: './individual-item.component.html',
  styleUrls: ['./individual-item.component.css'],
})
export class IndividualItemComponent implements OnInit {
  @Input() itemModel!: ItemModel
  constructor() {}
  showDetail: boolean = false
  ngOnInit(): void {}
}
