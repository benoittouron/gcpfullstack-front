import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  firstClick() {
    return console.log('clicked');
  }

  getUsers() {
    return this.http.get('https://your_project_name.appspot.com/people')
  }
}
