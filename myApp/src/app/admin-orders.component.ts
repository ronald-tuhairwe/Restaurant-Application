import { Component, OnInit } from "@angular/core";
import { Iuser, Iuser2 } from "./ifood";
import { StateService } from "./state.service";

@Component({
  selector: "app-admin-orders",
  template: `
    <section id="hero" class="d-flex align-items-center">
      <div
        class="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div class="row">
          <div class="col-lg-8" style="margin-left:20%">
            <div class="card" style="background-color: #002966">
              <div
                class="card-header card-header-warning"
                style="background-color: #339933"
              >
                <h4 class="card-title">Incoming Orders Or Pending Orders</h4>
              </div>
              <div class="card-content" *ngFor="let usr of user">
                <ul>
                  <li>
                    <a href="#">CustomerName: {{ usr.firstName }}</a>
                  </li>
                  <!-- <li class="dropdown"> -->

                  <div *ngFor="let usr1 of usr.orders">
                    <ul *ngFor="let usr1 of usr.orders">
                      <li>
                        item: {{ usr1.name }} - - - - - price: $
                        {{ usr1.price }}
                      </li>
                    </ul>
                  </div>

                  <!-- </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class AdminOrdersComponent implements OnInit {
  user!: Iuser2[];

  constructor(private service: StateService) {
    this.service.getAllCustomers().subscribe((resp) => {
      let array = resp.data;
      console.log(array);
      this.user = array.filter((itm) => itm.orders.length !== 0);
      console.log(this.user);
    });
  }

  ngOnInit(): void {}
}
