import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from 'primeng/api';
import { AppRoutingModule } from './app-routing.component';
import { ManufactureComponent } from './manufacture/manufacture.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManufactureComponent,
    ProductComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
