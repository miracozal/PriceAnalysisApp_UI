import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { SokMarketComponent } from './sok-market/sok-market.component';
import { A101MarketComponent } from './a101-market/a101-market.component';
import { BimMarketComponent } from './bim-market/bim-market.component';
import { MigrosMarketComponent } from './migros-market/migros-market.component';
import { AdsenseComponent } from './adsense/adsense.component';
import { MigrosUrunAraComponent } from './migros-urun-ara/migros-urun-ara.component';
import { TrendyolProductsComponent } from './trendyol-products/trendyol-products.component';
import { SearchProductComponent } from './search-product/search-product.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        SokMarketComponent,
        A101MarketComponent,
        BimMarketComponent,
        MigrosMarketComponent,
        AdsenseComponent,
        MigrosUrunAraComponent,
        TrendyolProductsComponent,
        SearchProductComponent
    ],
    entryComponents: [NgbdModalContent],
    exports: [
        ComponentsComponent,
        SokMarketComponent
    ]
})
export class ComponentsModule { }
