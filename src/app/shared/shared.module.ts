import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BanerComponent } from './baner/baner.component';
import { TypeComponent } from './type/type.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, BanerComponent, TypeComponent, ProductComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
