import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { HomeComponent } from './home/home.component';
import { AppRouctingModule } from './app.routing';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    RatingStarComponent,
    HomeComponent,
    ProductDetailComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouctingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
