import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://apolis-grocery.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  register(data:any): Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/auth/register`,data);
  }

  login(data:any): Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/auth/login`,data);
  }

  logout(){
    localStorage.clear();
  }
  
  checkToken() : boolean {
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

}
