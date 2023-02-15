import { HttpHeaders } from "@angular/common/http";

export abstract class BaseService {
  protected buildBaseJsonRequestHeaders() {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return httpHeaders;
  }
}
