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


export const routes: Routes = [

  {
    path: 'blocks',
    component: BlocksComponent

  },
  {
    path: 'cards',
    component: CardsComponent

  },

  {
    path: 'forms',
    component: FormsComponent

  },


  {
    path: 'pricing',
    component: PricingComponent
  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
