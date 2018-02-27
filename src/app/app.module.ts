import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule} from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PricedetailComponent } from './pricedetail/pricedetail.component';
import { PagesPriceDetailComponent } from './pages-price-detail/pages-price-detail.component';
import { TesteComponent } from './pages/teste.component';
import { TestcComponent } from './pages/teste2/testc/testc.component';
import { TesteNovamenteComponent } from './pages/teste2/teste-novamente/teste-novamente.component';
import { TesteAddforminputComponent } from './pages/teste2/teste-addforminput/teste-addforminput.component';


@NgModule({
  declarations: [
    AppComponent,
    PricedetailComponent,
    PagesPriceDetailComponent,
    TesteComponent,
    TestcComponent,
    TesteNovamenteComponent,
    TesteAddforminputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
