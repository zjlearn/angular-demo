import {Injectable, OnInit} from '@angular/core';
import {CleanedAddressWapper} from '../model/CleanedAddress';
import {HttpClient} from '@angular/common/http';
import {Result} from '../model/Result';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AddressService implements OnInit {

  // address_server = 'http://localhost:4200';
  address_server = 'http://address.clean.test.you.163.com';

  listAddressByCond(tag: String, right: number, pageIdx: number, pageSize: number): Observable<any> {
    const request_url = this.address_server + '/address/revise/cleanRtn/list.json?' + 'right=' + right + '&tag='
      + tag + '&pageIdx=' + pageIdx + '&pageSize=' + pageSize;
    return this.http.get<Result>(request_url);
  }

  cleanAddress(fullAddress: String, product: String): Observable<Result> {
    const request_url = this.address_server + '/address/v2/clean';
    const body = {
      'product': product,
      'fullAddress': fullAddress
    };
    return this.http.post<Result>(request_url, body);
  }

  tagError(cleanAddresswapper: CleanedAddressWapper): Observable<Result> {
    const request_url = this.address_server + '/address/revise/tag/error?fullAddress=' + cleanAddresswapper.fullAddress;
    return this.http.get<Result>(request_url);
  }

  /**
   * 标记地址数据正确
   * @param {CleanedAddressWapper} cleanAddresswapper
   * @returns {Observable<Result>}
   */
  tagright(cleanAddresswappers: CleanedAddressWapper []): Observable<Result> {
    const request_url = this.address_server + '/address/revise/tag/right';
    const body = {
      'dataList': cleanAddresswappers
    };
    return this.http.post<Result>(request_url, body);
  }


  /**
   * 重新清洗该地址信息
   * @param {CleanedAddressWapper} cleanAddresswapper
   * @returns {Observable<Result>}
   */
  recompute(cleanAddresswappers: CleanedAddressWapper []): Observable<Result> {
    const request_url = this.address_server + '/address/revise/reCompute/byAddress';
    const dataList = [];
    for (const cleanAddresswapper of cleanAddresswappers) {
      dataList.push(cleanAddresswapper.fullAddress);
    }
    const body = {
      'dataList': dataList
    };
    return this.http.post<Result>(request_url, body);
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}

