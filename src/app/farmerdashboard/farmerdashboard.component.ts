import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-farmerdashboard',
  templateUrl: './farmerdashboard.component.html',
  styleUrls: ['./farmerdashboard.component.css']
})
export class FarmerdashboardComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

    Login()
    {
      this.router.navigate(['./login']);
    }
}
