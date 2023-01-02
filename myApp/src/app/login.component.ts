import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { StateService } from "./state.service";

@Component({
  selector: "app-login",
  template: `
    <section id="hero" class="d-flex align-items-center">
      <div
        class="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <!-- login part -->

        <div class="row mt-2 ">
          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Ludhiana, Punjab, IND</p>
              </div>
              <div class="open-hours">
                <i class="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday:<br />
                  11:00 AM - 2300 PM
                </p>
              </div>
              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="2940474f46694c51484459454c074a4644"
                    >[email&#160;protected]</a
                  >
                </p>
              </div>
              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 **** **** **</p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-8 mt-5 mt-lg-0 box"
            style="background-color: #171329; width:30%;height:80%"
          >
            <form [formGroup]="form" (ngSubmit)="onLogin()" style="margin: 5%">
              <div class="row">
                <div class="m-2">
                  <input
                    class="form-control "
                    type="email"
                    placeholder="e.g. alex@example.com"
                    formControlName="email"  email="true" required
                  />
                  <small class="text-danger" [hidden]="form.controls['email'].valid || (form.controls['email'].pristine && !onLogin ) || !form.touched  ">Email Required</small>
                </div>
                <div class="m-2">
                  <input
                    class="form-control "
                    type="password"
                    placeholder="********"
                    formControlName="password" required
                  />
                  <small class="text-danger" [hidden]="form.controls['password'].valid || (form.controls['password'].pristine && !onLogin ) || !form.touched">password Required</small> 
                </div>
              </div>

              <div class="m-2">
                <button class="btn-book " type="submit" style="background-color: #c7a148">Login</button> Or
                <a (click)="singnUp()">SignUp</a>
              </div>
            </form>
          </div>
        </div>

       
      </div>
    </section>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.nonNullable.group({
    email: [""],
    password: [""],
  });

  constructor(private router: Router, private formBuilder: FormBuilder,private service: StateService) {}

  ngOnInit(): void {}

  onLogin() {
  
 

    // this.service.bState.subscribe(it =>console.log(it))

    // this.form.reset();

    // localStorage.setItem(
    //   "USER",
    //   JSON.stringify({ status: true, data: "later" })
    // );

    this.router.navigate(["","home"]);
  }

  singnUp() {
    this.router.navigate(["", "signUp"]);
  }
}
