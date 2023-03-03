import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { FarmService } from '../services/farm.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router, private authService: AuthService,private farmService:FarmService) { }

  OnRegister()
  {

  }
  Login()
  {
    this.router.navigate(['./login']);
  }
}
