export interface PokemonModel {
  id: number
  sprite: string
  name: string
  height: number
  weight: number
  typeName: string
  typeDamangeRelation: {
    no_damage_to: Array<any>
    half_damage_to: Array<any>
    double_damage_to: Array<any>
    no_damage_from: Array<any>
    half_damage_from: Array<any>
    double_damage_from: Array<any>
  }
  //array of 7 stats
  stat: Array<{ name: string; baseStat: number }>
}
