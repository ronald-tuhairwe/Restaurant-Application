import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminHomeComponent } from "./admin-home.component";
import { EditFoodComponent } from "./edit-food.component";
import { AddfoodComponent } from "./addfood.component";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";
import { OrderComponent } from "./order.component";
import { MenuComponent } from "./menu.component";
import { HomeComponent } from "./home.component";
import { ContactComponent } from "./contact.component";
import { EventComponent } from "./event.component";
import { BookTableComponent } from "./book-table.component";
import { GalleryComponent } from "./gallery.component";
import { ChefsComponent } from "./chefs.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    EditFoodComponent,
    AddfoodComponent,
    LoginComponent,
    SignupComponent,
    OrderComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    EventComponent,
    BookTableComponent,
    GalleryComponent,
    ChefsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "signUp", component: SignupComponent },
      { path: "home", component: HomeComponent },
      { path: "addFood", component: AddfoodComponent },
      { path: "adminHome", component: AdminHomeComponent },
      { path: "menu", component: MenuComponent },
      { path: "event", component: EventComponent },
      { path: "chefs", component: ChefsComponent },
      { path: "bookTable", component: BookTableComponent },
      { path: "contact", component: ContactComponent },
      { path: "edit", component: EditFoodComponent },
      { path: "gallery", component: GalleryComponent },
      { path: "order", component: OrderComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
