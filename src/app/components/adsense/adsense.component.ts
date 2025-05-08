declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-adsense',
  templateUrl: './adsense.component.html'
})
export class AdsenseComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (e) {
      console.error('Adsense yüklenemedi:', e);
    }
  }
}
