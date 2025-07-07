import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

interface ProductSearchResult {
  title: string;
  url: string;
  imageUrl: string;
  price: string;
  store: string;
}

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent {
  searchTerm: string = '';
  products: ProductSearchResult[] = [];
  pagedProducts: ProductSearchResult[] = [];
  selectedProduct: ProductSearchResult | null = null;

  isLoading: boolean = false;
  hasError: boolean = false;

  currentPage: number = 1;
  pageSize: number = 9;
  totalPages: number = 0;
  pages: number[] = [];

  constructor(private http: HttpClient) {}

  search(): void {
    if (!this.searchTerm.trim()) return;

    this.isLoading = true;
    this.hasError = false;
    this.products = [];
    this.pagedProducts = [];
    this.currentPage = 1;

    const url = `${environment.apiUrl}/WebReader/SearchProduct/search?query=${encodeURIComponent(this.searchTerm)}`;
    this.http.get<ProductSearchResult[]>(url).subscribe({
      next: (data) => {
        this.products = data;
        this.setupPagination();
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  setupPagination(): void {
    this.totalPages = Math.ceil(this.products.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.setPage(1);
  }

  setPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedProducts = this.products.slice(startIndex, endIndex);
  }

  selectProduct(product: ProductSearchResult): void {
    this.selectedProduct = product;
  }
}
