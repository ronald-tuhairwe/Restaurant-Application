import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfood',
  template: `

  
       <section id="book-a-table" class="book-a-table">
            <div class="container" data-aos="fade-up">
               <div class="section-title">
                  <h2>ADD FOOD</h2>
                  <p>New food to the Store</p>
               </div>
               <form       [formGroup]="form" (ngSubmit)="addFood()" data-aos="fade-up" data-aos-delay="100">
                  <div class="row">
                     <div class="col-lg-4 col-md-6 form-group">
                        <input type="text" formControlName="name" placeholder="Food Name"  required>
                        <div class="validate"></div>
                     </div>
                     <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                        <input type="text" class="form-control" formControlName="category"  placeholder="Category" required>
                        <div class="validate"></div>
                     </div>
                     <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                        <input type="text" class="form-control" formControlName="price"  placeholder="Price"  required>
                        <div class="validate"></div>
                     </div>
                  
                  </div>
                  <div class="form-group mt-3">
                     <textarea class="form-control" formControlName="information" rows="5" placeholder="Information"></textarea>
                     <div class="validate"></div>
                  </div>
                  <div class="mb-3">
                     <div class="loading">Loading</div>
                     <div class="error-message"></div>
                     <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Add Food</button></div>
               </form>
            </div>
</section>
  `,
  styles: [
  ]
})
export class AddfoodComponent {


 
  
  form = this.formBuilder.nonNullable.group({
    name: [""],
    category: [""],
    price: [""],
    information: [""],
  });

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  addFood() {
    //to send the data to the backend and
    // const results = this.form.value;

    // this.form.reset();

     localStorage.setItem("USER",JSON.stringify({status:true,data:"later"}))

    this.router.navigate(["list"]);
  }


}
