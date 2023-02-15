import { Component, Input, OnInit } from '@angular/core'
import { BerryModel } from '../../models/berry.model'
@Component({
  selector: 'app-individual-berry',
  templateUrl: './individual-berry.component.html',
  styleUrls: ['./individual-berry.component.css'],
})
export class IndividualBerryComponent implements OnInit {
  constructor() {}
  @Input() berryModel!: BerryModel
  ngOnInit(): void {}
}
