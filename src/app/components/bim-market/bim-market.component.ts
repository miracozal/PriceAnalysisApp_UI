import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Component({
  selector: 'app-bim-market',
  templateUrl: './bim-market.component.html',
  styleUrls: ['./bim-market.component.scss']
})
export class BimMarketComponent implements OnInit {
  allData: { [date: string]: any[] } = {};
  dates: string[] = [];
  selectedDate: string = '';

  pagedProducts: any[] = [];
  currentPage: number = 1;
  pageSize: number = 9;

  loading: boolean = true; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;
    const url = `${environment.apiUrl}/WebReader/GetAllProductInfoBim/get-bim`;
    this.http.get<{ [key: string]: any[] }>(url).subscribe({
      next: (res) => {
    console.log(res)

        this.allData = res;
        this.dates = Object.keys(res);
        if (this.dates.length > 0) {
          this.selectDate(this.dates[0]);
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('BİM API hatası:', err);
        this.loading = false;
      }
    });
  }

  selectDate(date: string): void {
    this.selectedDate = date;
    this.currentPage = 1;
    this.updatePagedProducts();
  }

  updatePagedProducts(): void {
    const products = this.allData[this.selectedDate] || [];
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = products.slice(start, end);
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.updatePagedProducts();
  }

  get totalPages(): number {
    const total = this.allData[this.selectedDate]?.length || 0;
    return Math.ceil(total / this.pageSize);
  }

  get pages(): number[] {
  const total = this.totalPages;
  const current = this.currentPage;
  const delta = 2;

  const range: number[] = [];
  const rangeWithDots: (number | string)[] = [];
  let l: number;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l > 2) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots as number[];
}

}
