import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){

  }

  canActivate(): boolean {
    if(this.auth.checkToken()){
      return true;
    }else{
      this.router.navigateByUrl('login');
      return false;
    }
  }
}

// export class AuthGuard2 implements CanActivate{
//   constructor(private auth:AuthService, private router: Router){
//   }
//   canActivate(): boolean {
//     if(!this.auth.checkToken()){  
//       return true;
//     }else{
//       // this.router.navigateByUrl('home');
//       return false;
//     }
//   }
// }
