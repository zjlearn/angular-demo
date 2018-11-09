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

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}


export const CLEANEDADDRESS_DATA: CleanedAddressWapper[] = [
  {id: '1', right: 1, tag: 'Hydrogen', fullAddress: 'dsf', address: null},
  {id: '2', right: 1, tag: 'Hydrogen', fullAddress: 'dfs', address: null}
];