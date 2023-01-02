import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Ifood, Ifood2, INITIAL_STATE, Iuser, Iuser2, IuserLog } from "./ifood";
@Injectable({
  providedIn: "root",
})
export class StateService {
  bSubject = new BehaviorSubject<Ifood[]>(INITIAL_STATE);
  orderSubject = new BehaviorSubject<Ifood[]>([]);

  constructor(private http: HttpClient) {
    
  }

  getAllFood() {
    return this.http.get<Ifood[]>("http://localhost:3000/foods");
  }

  addFood(food: any) {
    return this.http.post<{ success: boolean; data: string }>(
      "http://localhost:3000/foods",
      food
    );
  }

  deleteFood(foodId: string) {
    return this.http.delete<{ success: boolean; data: string }>(
      `http://localhost:3000/foods/food/${foodId}`
    );
  }

  updateFood(foodId: string, food: any) {
    return this.http.patch<{ success: boolean; data: string }>(
      `http://localhost:3000/foods/food/${foodId}`,
      food
    );
  }

  login(user: any) {
    return this.http.post<{ success: boolean; data: string }>(
      "http://localhost:3000/login",
      user
    );
  }

  signUp(user: any) {
    return this.http.post<{ success: boolean; data: string }>(
      "http://localhost:3000/signup",
      user
    );
  }

  getAllCustomers() {
    return this.http.get<{data:Iuser2[]}>("http://localhost:3000/customers");
  }

  signUpAdmin(user: any) {
    return this.http.post<{ success: boolean; data: string }>(
      "http://localhost:3000/signupAdmin",
      user
    );
  }

  deleteUser(userId: string) {
    return this.http.delete<{ success: boolean; data: string }>(
      `http://localhost:3000/user/${userId}`
    );
  }

  senderOrder(userId:string, food: Ifood[]) {
    return this.http.patch<{ success: boolean; data: string }>(
      `http://localhost:3000/order/${userId}`,food
    );
  }

}
