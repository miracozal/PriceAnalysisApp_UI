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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = `${environment.apiUrl}/WebReader/GetProductsFromA101/get-a101`;
    this.http.get<string[]>(url).subscribe({
      next: (res) => this.images = res,
      error: (err) => console.error('A101 API hatası:', err)
    });
  }

  prev(): void {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  next(): void {
    if (this.currentIndex < this.images.length - 1) this.currentIndex++;
  }
}
