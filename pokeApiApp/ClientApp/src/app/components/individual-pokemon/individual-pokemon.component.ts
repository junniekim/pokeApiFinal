import { Component, Input, OnInit } from '@angular/core'
import { PokemonModel } from '../../models/pokemonModel'

@Component({
  selector: 'app-individual-pokemon',
  templateUrl: './individual-pokemon.component.html',
  styleUrls: ['./individual-pokemon.component.css'],
})
export class IndividualPokemonComponent implements OnInit {
  @Input() pokemonModel!: PokemonModel
  //@Output

  constructor() {}

  ngOnInit(): void {}

  showDetail: boolean = false

  getColor(): string {
    let s = this.pokemonModel.typeName.split(' ')[0]

    if (s == 'Grass') {
      return 'grass'
    } else if (s == 'Fire') {
      return 'fire'
    } else if (s == 'Poison') {
      return 'poison'
    } else if (s == 'Rock') {
      return 'rock'
    } else if (s == 'Dragon') {
      return 'dragon'
    } else if (s == 'Unknown') {
      return 'unknown'
    } else if (s == 'Fighting') {
      return 'fighting'
    } else if (s == 'Electric') {
      return 'electric'
    } else if (s == 'Bug') {
      return 'bug'
    } else if (s == 'Ice') {
      return 'ice'
    } else if (s == 'Shadow') {
      return 'shadow'
    } else if (s == 'Dark') {
      return 'dark'
    } else if (s == 'Ghost') {
      return 'ghost'
    } else if (s == 'Water') {
      return 'water'
    } else if (s == 'Psychic') {
      return 'psychic'
    } else if (s == 'Fairy') {
      return 'fairy'
    } else if (s == 'Normal') {
      return 'normal'
    } else if (s == 'Flying') {
      return 'flying'
    } else if (s == 'Ground') {
      return 'ground'
    } else if (s == 'Steel') {
      return 'steel'
    }
    return ''
  }
}
