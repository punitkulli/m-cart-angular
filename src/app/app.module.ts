import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { FormsModule } from "@angular/forms";
import { LoginService } from "./login/login.service";
import { CartComponent } from "./products/cart/cart.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { RatingComponent } from "./products/rating.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { OrderByPipe } from "./products/product-list/orderby.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    CartComponent,
    RatingComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [LoginService, OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
