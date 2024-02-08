import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseURI } from '../../core/base.URL';


const routes = {
  getRates: 'get_special_rates_no_auth',


};

@Injectable({
  providedIn: 'root'
})
export class RateService extends BaseURI{
  constructor(private http : HttpClient) {
     super()
   }

   getRates(containerSize: string,
    containerType: string,
    pageSize = 9,
    page = 1
    ){
    const params = new HttpParams()
    .set('container_size', containerSize)
    .set('container_type', containerType);
    return this.http.get(`${this.baseUrl}/${routes.getRates}?${ params }/${pageSize}/${page}`)
  }



}
