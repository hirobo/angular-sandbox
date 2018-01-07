import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.paramMap.get('id');
    if (isNaN(id) || id < 1) {
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }

}
