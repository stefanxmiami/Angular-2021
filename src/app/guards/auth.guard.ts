import { CanActivate } from "@angular/router";

export class AuthGuard implements CanActivate{
  canActivate(){
    if(localStorage.getItem('authenticated')){
      return true;
    } else {
      return false;
    }
  }
}
