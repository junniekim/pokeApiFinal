import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { BerryModel } from '../models/berry.model'
import { BaseService } from './baseService'

@Injectable({
  providedIn: 'root',
})
export class BerryService extends BaseService {
  constructor(private http: HttpClient) {
    super()
  }
  GetBerries(
    offset: number,
    limit: number,
  ): Observable<{ berry: Array<BerryModel>; count: number }> {
    let o = offset.toString()
    let l = limit.toString()
    return this.http
      .get<{ berry: Array<BerryModel>; count: number }>(
        `https://pokeapi.co/api/v2/berry/?limit=${l} &offset=${o}`,
      )
      .pipe(
        map((m: any) => {
          let allBerry: Array<BerryModel> = []
          let count: number = m.count
          for (let i = 0; i < m.results.length; i++) {
            let p: BerryModel = {} as BerryModel
            p.name = m.results[i].name
            p.name = p.name.charAt(0).toUpperCase() + p.name.slice(1)
            this.GetBerryByUrl(m.results[i].url).subscribe((res) => {
              p.id = res.id
              p.growthTime = res.growth_time
              p.size = res.size
              p.smooth = res.smoothness
              p.maxHarv = res.max_harvest
              p.dryness = res.soil_dryness
              p.firmness =
                res.firmness.name.charAt(0).toUpperCase() +
                res.firmness.name.slice(1)
              // Need to go in another URL for sprite
              p.sprite = res.item.url
              this.GetItemByUrl(p.sprite).subscribe((res2) => {
                p.sprite = res2.sprites.default
                allBerry.push(p)
                console.log(p.sprite)
              })
            })
          }

          return { berry: allBerry, count }
        }),
      )
  }

  GetBerryByUrl(BerryUrl: string): Observable<any> {
    //any specific pokemon's information using url
    return this.http.get<any>(BerryUrl)
  }

  GetItemByUrl(ItemUrl: string): Observable<any> {
    //any specific pokemon's information using url
    return this.http.get<any>(ItemUrl)
  }
}
