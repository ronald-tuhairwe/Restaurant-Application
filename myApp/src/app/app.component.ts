import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div id="topbar" class="d-flex align-items-center fixed-top">
      <div
        class="container d-flex justify-content-center justify-content-md-between"
      >
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-phone d-flex align-items-center"
            ><span>+91 **** **** **</span></i
          >
          <i class="bi bi-clock d-flex align-items-center ms-4"
            ><span> Mon-Sat: 11AM - 23PM</span></i
          >
        </div>
        <div class="languages d-none d-md-flex align-items-center">
          <ul>
            <li>En</li>
            <li><a href="#">De</a></li>
          </ul>
        </div>
      </div>
    

    <header id="header" class="fixed-top d-flex align-items-cente">
      <div
        class="container-fluid container-xl d-flex align-items-center justify-content-lg-between"
      >
        <h1 class="logo me-auto me-lg-0">
          <a href="https://freeetemplates.com/">Restaurant</a>
        </h1>
        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li>
              <a class="nav-link scrollto active" [routerLink]="['', 'home']"
                >Home</a
              >
            </li>

            <li>
              <a class="nav-link scrollto" [routerLink]="['', 'menu']">Menu</a>
            </li>

            <li>
              <a class="nav-link scrollto" [routerLink]="['', 'event']"
                >Events</a
              >
            </li>
            <li>
              <a class="nav-link scrollto" [routerLink]="['', 'chefs']"
                >Chefs</a
              >
            </li>
            <li>
              <a class="nav-link scrollto" [routerLink]="['', 'gallery']"
                >Gallery</a
              >
            </li>
            <li>
              <a class="nav-link scrollto" [routerLink]="['', 'contact']"
                >Contact</a
              >
            </li>
            <li>
              <a class="nav-link scrollto" [routerLink]="['', 'order']"
                >Your Orders</a
              >
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a
          [routerLink]="['', 'bookTable']"
          class="book-a-table-btn scrollto d-none d-lg-flex"
          >Book a table</a
        >
      </div>
    </header>
    </div>


   <div style="margin-top: 5%">
   <main id="main">
<router-outlet></router-outlet>

    </main>
   </div>
<!-- footer -->

<footer id="footer">
         <div class="footer-top">
            <div class="container">
               <div class="row">
                  <div class="col-lg-3 col-md-6">
                     <div class="footer-info">
                        <h3>Restaurant</h3>
                        <p> Ludhiana <br> Fairfirl, USA
                        <div class="social-links mt-3"> <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a> <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a> <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a></div>
                     </div>
                  </div>
                  <div class="col-lg-2 col-md-6 footer-links">
                     <h4>Useful Links</h4>
                     <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                       
                     </ul>
                  </div>
                  <div class="col-lg-3 col-md-6 footer-links">
                     <h4>Our Services</h4>
                     <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                     
                     </ul>
                  </div>
                  <div class="col-lg-4 col-md-6 footer-newsletter">
                     <h4>Our Newsletter</h4>
                     <p>If at all you wana keep updated with our New Offers then  subscribe</p>
                     <form action="" method="post"> <input type="email" name="email"><input type="submit" value="Subscribe"></form>
                  </div>
               </div>
            </div>
         </div>
         <div class="container">
            <div class="copyright"> &copy; Copyright <strong><span>Restaurant</span></strong>. All Rights Reserved</div>
            <div class="credits"> Designed by <a href="https://therichpost.com/">Ronald Tuhairwe</a></div>
         </div>
      </footer>
<div id="preloader"></div>
<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>  

    
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "restauranttemplate";
}
