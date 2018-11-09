import {Component, OnInit} from '@angular/core';
import {AddressService} from '../shared/service/address.service';
import {MatTableDataSource} from '@angular/material';
import {CleanedAddressWapper} from '../shared/model/CleanedAddress';

@Component({
  selector: 'app-address-clean',
  templateUrl: './address-clean.component.html',
  styleUrls: ['./address-clean.component.css']
})
export class AddressCleanComponent implements OnInit {

  fullAddress: String = '浙江省杭州市滨江区网易大厦';
  cleanedAddressWapper = null;

  constructor(private cleanAddressService: AddressService) {
  }

  ngOnInit() {
  }


  cleanAddress(cleanAddressForm) {
    this.cleanedAddressWapper = this.cleanAddressService.cleanAddress(cleanAddressForm.fullAddress, 'justTest').subscribe((res) => {
      this.cleanedAddressWapper = res.data;
    });
  }

}
