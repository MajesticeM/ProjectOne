import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent {

name:string='';



  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

    onInputChange()
    {
      console.log(this.name);
    }

    Login()
    {
      this.router.navigate(['./login']);
    }

    OnRegister()
    {
      console.log('You have successfully registered');
    }
    login()
    {
      this.router.navigate(['/login']);
    }
}


/*const panel = document.getElementById('myPanel');
const inputFields = document.querySelectorAll<HTMLInputElement>('.fp');

function checkFormCompletion() {
  // Check if all input fields are filled out
  const isFormCompleted = Array.from(inputFields).every((input: HTMLInputElement) => {
    return input.value.trim() !== '';
  });

  // If all input fields are filled out, add the "panel-success" class to the panel and remove the "panel-default" class
  if (isFormCompleted) {
    panel.classList.add('panel-success');
    panel.classList.remove('panel-default');
  }
}

// Listen for changes to the input fields
inputFields.forEach(function(input) {
  input.addEventListener('input', checkFormCompletion);
});

// Check the form completion status when the page loads
checkFormCompletion();*/
