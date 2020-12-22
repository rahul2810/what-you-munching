import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Munchitformat} from './munchitformat';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MunchitAPIService {
  postId;
  errorMessage;
  constructor(private http:HttpClient) { }

  getMunchIt() {
    let url = "http://localhost:3000/munchit";
    return this.http.get(url);
}

postMunchIt(munchitdata : Munchitformat){
  //const httpOptions = {headers: new HttpHeaders({'responseType': 'text', 'Content-Type': 'text/plain'})};
  let url = "http://localhost:3000/munchit";
  this.http.post<any>(url,munchitdata)
  .toPromise().then((data : any) => {console.log(data)});

}
}
