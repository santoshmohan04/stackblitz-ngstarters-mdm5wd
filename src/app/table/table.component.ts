import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { TableapiService } from './tableapi.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [HttpClientModule],
  providers: [TableapiService],
})
export class TableComponent implements OnInit, OnDestroy {
  product_details: Array<any> = [];
  productsSub!: Subscription;
  private apiservice = inject(TableapiService);

  ngOnInit() {
    this.productsSub = this.apiservice.getProductsList().subscribe({
      next: (res: Array<any>) => {
        if (res.length > 0) {
          this.product_details = res;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy() {
    this.productsSub.unsubscribe();
  }
}
