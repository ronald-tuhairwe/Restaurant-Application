import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Ifood, INITIAL_STATE } from "./ifood";
@Injectable({
  providedIn: "root",
})
export class StateService {
  bSubject = new BehaviorSubject<Ifood[]>(INITIAL_STATE);
  // userBSubject = new BehaviorSubject<IGoal[]>({status:false,data:{}});

  // constructor(private http: HttpClient) {
  //   const local = localStorage.getItem("STATE");
  //   if (local) {
  //     this.bSubject.next(JSON.parse(local));
  //   }
  // }

  // getGoal(goals: IGoal[]) {
  //   return this.http.get<{  }>(
  //     `http://localhost:3000/check/${word}`
  //   );
  // }
}
