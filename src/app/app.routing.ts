import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { SokMarketComponent } from './components/sok-market/sok-market.component';
import { A101MarketComponent } from './components/a101-market/a101-market.component';
import { BimMarketComponent } from './components/bim-market/bim-market.component';
import { MigrosMarketComponent } from './components/migros-market/migros-market.component';
import { MigrosUrunAraComponent } from './components/migros-urun-ara/migros-urun-ara.component';
import { TrendyolProductsComponent } from './components/trendyol-products/trendyol-products.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'sok-market',       component: SokMarketComponent },
    { path: 'a101-market',      component: A101MarketComponent },
    {path: 'bim-market',        component: BimMarketComponent},
    {path: 'migros-market',     component: MigrosMarketComponent},
    {path: 'migros-urun-ara',     component: MigrosUrunAraComponent},
        {path: 'trendyol',     component: TrendyolProductsComponent},

  ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
