import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Component({
  selector: 'app-migros-market',
  templateUrl: './migros-market.component.html',
  styleUrls: ['./migros-market.component.scss']
})
export class MigrosMarketComponent implements OnInit {
  allProducts: any[] = [];
  pagedProducts: any[] = [];
  currentPage = 1;
  pageSize = 12;
  isLoading = false;
  hasError = false;
searchQuery: string = '';
filteredProducts: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.isLoading = true;
    const url = `${environment.apiUrl}/WebReader/GetProductInfo/get-migros`;

    this.http.get<any[]>(url).subscribe({
      next: (res) => {
        this.allProducts = res;
        this.filteredProducts = res;
        this.setPage(1);
        this.hasError = false;
      },
      error: (err) => {
        console.error('Migros API hatası:', err);
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
this.pagedProducts = this.filteredProducts.slice(start, end);  }

  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.pageSize);
  }

  get pages(): number[] {
  const pages: number[] = [];
  const total = this.totalPages;

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    const start = Math.max(2, this.currentPage - 2);
    const end = Math.min(total - 1, this.currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  }

  return pages;
}
 filterProducts(): void {
    this.currentPage = 1;
    if (this.searchQuery === '') {
      this.filteredProducts = this.allProducts;
    } else {
      this.filteredProducts = this.allProducts.filter(product => 
        product.Name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    this.setPage(1);
  }
}
