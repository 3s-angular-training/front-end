import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductFilterComponent } from './Product/product-filter/product-filter.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './Share/header/header.component';
import { FooterComponent } from './Share/footer/footer.component';
import { NavbarComponent } from './Share/navbar/navbar.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shares/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ErrorComponent } from './error/error.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AllProductOrderComponent } from './purchase-order/all-product-order/all-product-order.component';
import { HistoryOrderComponent } from './purchase-order/history-order/history-order.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LimitToPipePipe } from './limit-to.pipe.pipe';
<<<<<<< HEAD
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { PurchaseStatusComponent } from './purchase-order/purchase-status/purchase-status.component';
=======
import { SellerHomeComponent } from './admin/seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './admin/seller-update-product/seller-update-product.component';
import { SellerAddProductComponent } from './admin/seller-add-product/seller-add-product.component';
<<<<<<< HEAD
import { PurchaseStatusComponent } from './purchase-order/purchase-status/purchase-status.component';
=======
>>>>>>> 2b24f6c9935e5e59160e0fa864d66aea6d3729b1
>>>>>>> 1ad518be6dfc997bb991729e93ada8181f034289


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductDetailComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    OrderStatusComponent,
    FilterPipe,
    ErrorComponent,
    AdminHomeComponent,
    PurchaseOrderComponent,
    AllProductOrderComponent,
    HistoryOrderComponent,
    LimitToPipePipe,
<<<<<<< HEAD
    PurchaseStatusComponent,

=======
    SellerHomeComponent,
    SellerUpdateProductComponent,
<<<<<<< HEAD
    SellerAddProductComponent,
    PurchaseStatusComponent
=======
    SellerAddProductComponent
>>>>>>> 2b24f6c9935e5e59160e0fa864d66aea6d3729b1
>>>>>>> 1ad518be6dfc997bb991729e93ada8181f034289
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
