import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { ItemModel } from '../models/item.model'
import { BaseService } from './baseService'

@Injectable({
  providedIn: 'root',
})
export class ItemService extends BaseService {
  constructor(private http: HttpClient) {
    super()
  }
  GetItems(
    offset: number,
    limit: number,
  ): Observable<{ item: Array<ItemModel>; count: number }> {
    let o = offset.toString()
    let l = limit.toString()
    return this.http
      .get<{ item: Array<ItemModel>; count: number }>(
        `https://pokeapi.co/api/v2/item/?limit=${l} &offset=${o}`,
      )
      .pipe(
        map((m: any) => {
          let allItem: Array<ItemModel> = []
          let count: number = m.count
          for (let i = 0; i < m.results.length; i++) {
            let p: ItemModel = {} as ItemModel
            p.name = m.results[i].name
            p.name = p.name.charAt(0).toUpperCase() + p.name.slice(1)
            this.GetItemByUrl(m.results[i].url).subscribe((res) => {
              p.cost = res.cost
              p.id = res.id
              p.category =
                res.category.name.charAt(0).toUpperCase() +
                res.category.name.slice(1)
              p.sprite = res.sprites.default
              console.log(p.name, res.flavor_text_entries)
              if (res.flavor_text_entries.length > 1) {
                p.description = res.flavor_text_entries.find(
                  (x: any) => x.language.name == 'en',
                ).text
              } else {
                p.description = 'Description Not available'
              }
              allItem.push(p)
            })
          }

          return { item: allItem, count }
        }),
      )
  }

  GetItemByUrl(ItemUrl: string): Observable<any> {
    return this.http.get<any>(ItemUrl)
  }
}
