import { Component } from "@angular/core";


@Component({
  selector: "app-order",
  template: `
    <section id="menu" class="menu section-bg ">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>ORDER</h2>
          <p>Check What You Have Ordered</p>
        </div>

        <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
          <!-- insert here the links -->
          <div class="col-lg-6 menu-item filter-starters">
            <img
              src="assets/img/menu/lobster-bisque.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">Lobster Bisque</a><span>$5.95</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>
        </div>


        <div class="price" style="width:15%; marginTop:4%; marginLeft:70%"> <strong>Total : $122 <hr></strong> </div>

        <div class="text-end book-a-table-btn scrollto d-none d-lg-flex" style="width:15%; marginTop:4%; marginLeft:70%">
            Order Now
          </div>
      </div>
    </section>

  `,
  styles: [],
})
export class OrderComponent {

  // constructor(private toastr: ToastrService) {}

}
