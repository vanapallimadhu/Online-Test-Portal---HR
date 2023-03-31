import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class questionservice {

  constructor(private http: HttpClient) { }

  getquestionjson(){
    return this.http.get<any>("assets/question.json");
  }
}
