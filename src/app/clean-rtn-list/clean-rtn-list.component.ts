import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {CleanedAddressWapper} from '../shared/model/CleanedAddress';
import {AddressService, CLEANEDADDRESS_DATA} from '../shared/service/address.service';
import {Result} from '../shared/model/Result';


@Component({
  selector: 'app-clean-rtn-list',
  templateUrl: './clean-rtn-list.component.html',
  styleUrls: ['./clean-rtn-list.component.css']
})
export class CleanRtnListComponent implements OnInit, AfterViewInit {

  tagOptions: string[] = ['省或者市不同', '省区相同', '市区相同', '其他'];

  rightOptionsMap: { [key: string]: number; } = {
    '错误': -1,
    '未知': 0,
    '正确': 1
  };

  rightOptions: string[] = ['未知', '正确', '错误'];

  displayedColumns: string[] = ['select', 'fullAddress', 'provName', 'cityName', 'distName', 'townName'];

  currentData = [];

  dataSource = null;
  selection = new SelectionModel<CleanedAddressWapper>(true, []);


  // MatPaginator Output
  pageEvent: PageEvent;

  tag: String = '省区相同';
  rightTag: String = '未知';

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private addressService: AddressService) {
  }

  ngOnInit(): void {
    this.refresh(null);
  }

  refresh(event: PageEvent) {
    let pageIdx = 1;
    let pageSize = 10;
    if (event != null) {
      pageIdx = event.pageIndex;
      pageSize = event.pageSize;
    }
    this.addressService.listAddressByCond(this.tag, this.rightOptionsMap[this.rightTag], pageIdx, pageSize).subscribe((res) => {
      this.currentData = res.data;
      this.dataSource = new MatTableDataSource<CleanedAddressWapper>(this.currentData);
      this.dataSource.paginator = this.paginator;
      console.log('数据的大小为:' + this.currentData.length);
    });
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /**
   * 根据条件重新查询相关的信息
   */
  search(addressSearchForm) {
    // 按照默认的第一页和每页10个记录进行条件查询
    console.log(addressSearchForm.tag);
    console.log(addressSearchForm.right);
    this.refresh(null);
  }

  tagRight() {
    if (this.selection.isEmpty()) {
      console.log('选择为空');
    } else {
      const selectAddress: CleanedAddressWapper [] = this.selection.selected;
      for (const address of  selectAddress) {
        console.log('标记地址正确' + JSON.stringify(address));
        this.addressService.tagright(address);
      }
    }
  }

  tagError() {
    if (this.selection.isEmpty()) {
      console.log('选择为空');
    } else {
      const selectAddress: CleanedAddressWapper [] = this.selection.selected;
      for (const address of  selectAddress) {
        console.log('标记地址错误' + JSON.stringify(address));
        this.addressService.tagError(address).subscribe(
          (res: Result) => console.log(JSON.stringify(res)));
      }
    }
  }
}

