import { Component, OnInit } from '@angular/core'
import { PokemonModel } from '../../models/pokemonModel'
import { PokemonService } from '../../services/pokemonService'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  // element 0 to 10
  offset: number = 0
  limit: number = 10
  pageNumber: number = 1
  //hold page number
  pageNums: Array<any> = []
  count: number = 0
  //dependency inejection
  constructor(private pokemon: PokemonService) {}
  //PICK UP FROM HERE BY FIXING OFFSET
  pokemonArray: Array<PokemonModel> = []

  ngOnInit(): void {
    this.pokemon.GetPokemons(this.offset, this.limit).subscribe((res) => {
      this.count = res.count
      this.pokemonArray = res.pokemon.sort(
        (a: PokemonModel, b: PokemonModel) => +a.id - +b.id,
      )
      let numberOfPages = this.count / this.limit + 1
      for (let i = 1; i <= numberOfPages; i++) {
        this.pageNums.push(i)
      }
    })
  }

  getPokemonAgain(o: number): void {
    this.offset = o * 10
    this.pokemon.GetPokemons(this.offset, 10).subscribe((res) => {
      this.pokemonArray = res.pokemon.sort(
        (a: PokemonModel, b: PokemonModel) => +a.id - +b.id,
      )
    })
  }
}
