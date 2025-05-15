import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Component({
  selector: 'app-migros-urun-ara',
  templateUrl: './migros-urun-ara.component.html',
  styleUrls: ['./migros-urun-ara.component.scss']
})
export class MigrosUrunAraComponent implements OnInit {
  searchTerm: string = '';
  allResults: any[] = [];
  pagedProducts: any[] = [];

  isLoading = false;
  hasError = false;

  pageSize = 9;
  currentPage = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  search(): void {
    if (!this.searchTerm.trim()) return;

    this.isLoading = true;
    this.hasError = false;
    this.currentPage = 1;

    const url = `${environment.apiUrl}/WebReader/GetProductInfo/get-migros-special-product?urunAdi=${encodeURIComponent(this.searchTerm)}`;

    this.http.get<any[]>(url).subscribe({
      next: (res) => {
        console.log(res)
        this.allResults = res || [];
        this.updatePagedProducts();
        this.hasError = false;
      },
      error: (err) => {
        console.error('Migros ürün arama hatası:', err);
        this.hasError = true;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
selectedProduct: any = null;

selectProduct(product: any): void {
  this.selectedProduct = product;
}
  updatePagedProducts(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.allResults.slice(start, end);
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.updatePagedProducts();
  }

  get totalPages(): number {
    return Math.ceil(this.allResults.length / this.pageSize);
  }

  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }
}
