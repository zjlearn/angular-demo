import {Injectable, OnInit} from '@angular/core';
import {CleanedAddressWapper} from '../model/CleanedAddress';
import {HttpClient} from '@angular/common/http';
import {Result} from '../model/Result';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AddressService implements OnInit {

  listAddressByCond(tag: String, right: number, pageIdx: number, pageSize: number): Observable<any> {
    const request_url = 'http://localhost:4200/address/revise/cleanRtn/list.json?' + 'right=' + right + '&tag='
      + tag + '&pageIdx=' + pageIdx + '&pageSize=' + pageSize;
    return this.http.get<Result>(request_url);
  }

  cleanAddress(fullAddress: String, product: String): Observable<Result> {
    const request_url = 'http://localhost:4200/address/v2/clean';
    const body = {
      'product': product,
      'fullAddress': fullAddress
    };
    return this.http.post<Result>(request_url, body);
  }

  tagError(cleanAddresswapper: CleanedAddressWapper): Observable<Result> {
    const request_url = 'http://localhost:4200/address/revise/tag/error?fullAddress=' + cleanAddresswapper.fullAddress;
    return this.http.get<Result>(request_url);
  }

  /**
   * 标记地址数据正确
   * @param {CleanedAddressWapper} cleanAddresswapper
   * @returns {Observable<Result>}
   */
  tagright(cleanAddresswapper: CleanedAddressWapper): Observable<Result> {
    const fullAddressList = [];
    fullAddressList.push(cleanAddresswapper.fullAddress);
    const request_url = 'http://localhost:4200/address/revise/tag/right';
    const body = {
      'fullAddressList': fullAddressList
    };
    return this.http.post<Result>(request_url, body);
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}


export const CLEANEDADDRESS_DATA: CleanedAddressWapper[] = [
  {id: '1', right: 1, tag: 'Hydrogen', fullAddress: 'dsf', address: null},
  {id: '2', right: 1, tag: 'Hydrogen', fullAddress: 'dfs', address: null}
];
