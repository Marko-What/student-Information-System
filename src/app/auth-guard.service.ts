import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StudentSystemServiceService } from './student-system-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
   constructor(private _StudentSystemServiceService: StudentSystemServiceService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._StudentSystemServiceService.isAuthenticated()) {
        return true;
    }

    // navigate to login page
    this._router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
}




}
