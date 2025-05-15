import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Component({
  selector: 'app-a101-market',
  templateUrl: './a101-market.component.html',
  styleUrls: ['./a101-market.component.scss']
})
export class A101MarketComponent implements OnInit {
  images: string[] = [];
  currentIndex: number = 0;
  isLoading = false;
  hasError = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.isLoading = true;
    const url = `${environment.apiUrl}/WebReader/GetProductsFromA101/get-a101`;

    this.http.get<any[]>(url).subscribe({
      next: (res) => {
        this.images = res.map(item => item.ImageUrl);
        this.hasError = false;
      },
      error: (err) => {
        console.error('A101 API hatası:', err);
        this.hasError = true;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  prev(): void {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  next(): void {
    if (this.currentIndex < this.images.length - 1) this.currentIndex++;
  }
}
