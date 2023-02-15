import { Component, OnInit } from '@angular/core'
import { ItemModel } from 'src/app/models/item.model'
import { ItemService } from 'src/app/services/itemService'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  offset: number = 0
  limit: number = 20
  pageNumber: number = 1
  pageNums: Array<any> = []
  count: number = 0
  itemArray: Array<ItemModel> = []

  constructor(private item: ItemService) {}

  //res.item.sort
  //subscribe and observable

  ngOnInit(): void {
    this.item.GetItems(this.offset, this.limit).subscribe((res) => {
      this.count = res.count
      this.itemArray = res.item.sort(
        (a: ItemModel, b: ItemModel) => +a.id - +b.id,
      )
      let numberOfPages = this.count / this.limit + 1
      for (let i = 1; i <= numberOfPages; i++) {
        this.pageNums.push(i)
      }
    })
  }
  getItemAgain(i: number): void {
    this.offset = i * 20 - 20

    this.item.GetItems(this.offset, 20).subscribe((res) => {
      this.itemArray = res.item.sort(
        (a: ItemModel, b: ItemModel) => +a.id - +b.id,
      )
    })
    console.log(this.offset)
    console.log(this.itemArray)
  }
}
