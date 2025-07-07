import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { filter, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _router: Subscription;
  private loggedOnce: boolean = false;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private element: ElementRef,
    public location: Location,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];

    this._router = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.scrollToTop(navbar);
      this.navbar.sidebarClose();

      if (!this.loggedOnce) {
        this.loggedOnce = true;
        this.logUserInfo();
      }
    });

    this.renderer.listen('window', 'scroll', () => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        navbar.classList.remove('navbar-transparent');
      } else {
        navbar.classList.add('navbar-transparent');
      }
    });

    const ua = window.navigator.userAgent;
    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
      const rv = ua.indexOf('rv:');
      const version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      if (version) {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('ie-background');
      }
    }
  }

  removeFooter() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    return !(titlee === 'signup' || titlee === 'nucleoicons');
  }

  private scrollToTop(navbar: HTMLElement): void {
    if (window.outerWidth > 991) {
      window.document.children[0].scrollTop = 0;
    } else {
      window.document.activeElement.scrollTop = 0;
    }
  }

  private logUserInfo(): void {
  const userAgent = navigator.userAgent;
  const language = navigator.language;
  const platform = navigator.platform;
  const referrer = document.referrer;
  const currentUrl = window.location.href;

  this.http.get<any>('https://api.ipify.org?format=json').subscribe({
    next: res => {
      const ip = res.ip;

      const payload = {
        ipAddress: ip,
        userAgent: userAgent,
        language: language,
        platform: platform,
        referrer: referrer,
        currentUrl: currentUrl
      };

      this.http.post(`${environment.apiUrl}/WebReader/IVL/ivl`, payload).subscribe({
      });
    },
  });
}
}
