import { Component, OnInit } from '@angular/core'
import { BerryModel } from '../../models/berry.model'

import { BerryService } from '../../services/berryService'
@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.css'],
})
export class BerryComponent implements OnInit {
  offset: number = 0
  limit: number = 10
  pageNumber: number = 1
  //hold page number
  pageNums: Array<any> = []
  count: number = 0
  //dependency inejection
  constructor(private berry: BerryService) {}
  berryArray: Array<BerryModel> = []

  ngOnInit(): void {
    this.berry.GetBerries(this.offset, this.limit).subscribe((res) => {
      //at this point I have link to a specific item for each berry as their sprite
      //for each items, I have to go to the url and replace their sprite with the png link
      this.count = res.count
      this.berryArray = res.berry.sort(
        (a: BerryModel, b: BerryModel) => +a.id - +b.id,
      )
      let numberOfPages = this.count / this.limit + 1
      for (let i = 1; i <= numberOfPages; i++) {
        this.pageNums.push(i)
      }
    })
  }

  getBerryAgain(o: number): void {
    this.offset = o * 10
    this.berry.GetBerries(this.offset, 10).subscribe((res) => {
      this.berryArray = res.berry.sort(
        (a: BerryModel, b: BerryModel) => +a.id - +b.id,
      )
    })
  }
}
