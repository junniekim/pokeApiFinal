import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { PokemonModel } from '../models/pokemonModel'
import { BaseService } from './baseService'

@Injectable({
  providedIn: 'root',
})
export class PokemonService extends BaseService {
  constructor(private http: HttpClient) {
    super()
  }
  GetPokemons(
    offset: number,
    limit: number,
  ): Observable<{ pokemon: Array<PokemonModel>; count: number }> {
    //optional offset and limit
    let o = offset.toString()
    let l = limit.toString()

    //                      model                 from actual pokemon component               m is list of pokemon
    return this.http
      .get<{ pokemon: Array<PokemonModel>; count: number }>(
        `https://pokeapi.co/api/v2/pokemon/?limit=${l} &offset=${o}`,
      )
      .pipe(
        map((m: any) => {
          //return array of pokemon model
          let allPokemon: Array<PokemonModel> = []
          let count: number = m.count
          //for however many data we pull
          for (let i = 0; i < m.results.length; i++) {
            let p: PokemonModel = {} as PokemonModel
            //get name
            p.name = m.results[i].name
            p.name = p.name.charAt(0).toUpperCase() + p.name.slice(1)

            //get extra information by url
            //res is the entire pokemon information
            this.GetPokemonByUrl(m.results[i].url).subscribe((res) => {
              p.id = res.id
              p.weight = res.weight
              p.stat = []
              for (let i = 0; i < 6; i++) {
                p.stat.push({
                  name:
                    res.stats[i].stat.name.charAt(0).toUpperCase() +
                    res.stats[i].stat.name.slice(1),
                  baseStat: res.stats[i].base_stat,
                })
              }

              p.height = res.height

              //res.types returns an array of type objects
              p.typeName = ''
              res.types.forEach((x: any) => {
                p.typeName +=
                  x.type.name.charAt(0).toUpperCase() +
                  x.type.name.slice(1) +
                  ' '
              })
              p.sprite = res.sprites.front_shiny
              //good to push
              allPokemon.push(p)
            })
          }

          return { pokemon: allPokemon, count }
        }),
      )
  }

  GetPokemonByUrl(pokeUrl: string): Observable<any> {
    //any specific pokemon's information using url
    return this.http.get<any>(pokeUrl)
  }
}
// p.stat[0].name= res.stats[0].stat.name;
// p.stat[1].name=  res.stats[1].stat.name;
// p.stat[2].name=  res.stats[2].stat.name;
// p.stat[3].name=  res.stats[3].stat.name;
// p.stat[4].name=  res.stats[4].stat.name;
// p.stat[5].name=  res.stats[5].stat.name;
// p.stat[0].baseStat= res.stats[0].baseStat;
// p.stat[1].baseStat= res.stats[1].baseStat;
// p.stat[2].baseStat= res.stats[2].baseStat;
// p.stat[3].baseStat= res.stats[3].baseStat;
// p.stat[4].baseStat= res.stats[4].baseStat;
// p.stat[5].baseStat= res.stats[5].baseStat;
