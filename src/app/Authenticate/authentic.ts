import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class Authenticate implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('userInfo')) {
            return true;
        }
        // Redirecting to login page as user is not logged in.
        console.log('User not logged in redirecting to login page');

        this.router.navigateByUrl('login');
        return false;
    }

}