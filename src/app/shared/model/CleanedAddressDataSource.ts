import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

export class CleanedAddressDataSource extends DataSource<any> {

  recordChange$ = new Subject();

  constructor() {
    super();
  }

  connect(): Observable<any[]> {
    const changes = [
      this.recordChange$
    ];

    return null;

  }

  disconnect(): void {
  }

}
