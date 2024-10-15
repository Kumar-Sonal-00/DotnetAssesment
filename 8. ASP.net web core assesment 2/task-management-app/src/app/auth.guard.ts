import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Here, we'll assume a mock check for login status
  // You can replace this with your actual authentication logic.
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return true; // Allow access to the route
  } else {
    // Redirect the user to the login page
    router.navigate(['/login']);
    return false; // Prevent access to the route
  }
};
