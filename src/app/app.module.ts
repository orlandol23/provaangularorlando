import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PricingComponent } from './pricing/pricing.component';
import { FormsComponent } from './forms/forms.component';
import { BlocksComponent } from './blocks/blocks.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PricingComponent,
    FormsComponent,
    BlocksComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
