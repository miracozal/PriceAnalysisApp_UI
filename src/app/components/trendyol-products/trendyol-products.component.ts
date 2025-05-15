import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Component({
  selector: 'app-trendyol-products',
  templateUrl: './trendyol-products.component.html',
  styleUrls: ['./trendyol-products.component.scss']
})
export class TrendyolProductsComponent implements OnInit {
  allProducts: any[] = [];
  pagedProducts: any[] = [];
  currentPage = 1;
  pageSize = 9;
  isLoading = false;
  hasError = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.isLoading = true;
    const url = `${environment.apiUrl}/WebReader/GetTrendyolProducts/get-trendyol-products`;

    this.http.get<any[]>(url).subscribe({
      next: (res) => {
        this.allProducts = res;
        this.setPage(1);
        this.hasError = false;
      },
      error: (err) => {
        console.error('Trendyol API hatası:', err);
        this.hasError = true;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  setPage(page: number): void {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.allProducts.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.allProducts.length / this.pageSize);
  }

  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }
}
