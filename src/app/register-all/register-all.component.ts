import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-all',
  templateUrl: './register-all.component.html',
  styleUrls: ['./register-all.component.css']
})
export class RegisterAllComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  login(){
    this.router.navigate(['/login']);
  }
  general(){
    this.router.navigate(['/general']);
  }
  manufacturer(){
    this.router.navigate(['/manufacturer']);
  }
  farmer(){
    this.router.navigate(['/farmer-registration']);
  }
}
