import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { FarmService } from '../services/farm.service';


@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent {

  name!: string;
  email!:string;
  cel!:number;
  gender!:string;
  dob!:string;
  education!:string;
  yo!:string;
  farmerName!: string;
  address!: string;
  farmName!: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router, private authService: AuthService,private farmService:FarmService) { }

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
      console.log(this.farmName + " " + this.farmerName + " " + this.address);
      
      this.addFarm()

    }
    addFarm(){

      // if (accountSid && authToken && myNumber && twilioNumber) {
      //   const client = new Twilio(accountSid, authToken);
      
      //   client.messages
      //     .create({
      //       from: twilioNumber,
      //       to: myNumber,
      //       body: "You just sent an SMS from TypeScript using Twilio!",
      //     })
      //     .then((message) => console.log(message.sid));
      // } else {
      //   console.error(
      //     "You are missing one of the variables you need to send a message"
      //   );
      // }
  
      console.log("asdfsdf")
      var farm = {
        businessType: "private",
        description: "Nandoni farms produces tomatos and potatoes",
        farm_infrastructure: {
          irrigationInfrastructure: "yes",
          levelOfMachinery: ['Harvestor', 'Plower'],
          mineralProcesses: ['Fertilizer'],
          waterAccess: "yes",
          waterSource: "Borehole",
          waterSourceCapacity: "6000",
          waterSourceSustainability: "10 years"
        },
        email:this.email,
        cel:this.cel,
        gender:this.gender,
        location: this.address,
        dob:this.dob,
        yo:this.yo,
        education:this.education,
        name: this.farmName,
        admin: this.farmerName,
        profile_picture: "https://firebasestorage.googleapis.com/v0/b/se-holdings-farming.appspot.com/o/farms_profiles%2Fcard-3.jpg?alt=media&token=8f35d928-d1e3-4cdb-9f69-68d8624011b1ring",
        registrationNo: "261847",
        training_developments: {
          agriTrainingDone: ["Plant health management","Soil Management"],
          agriTrainingRequired: ["Fertilizer Management", "Bio planting"],
          otherTraining: ["Spray Mangement", "Eco planting"]
        },
        financial_acompliance: {
          hasFinancialStatement: true,
          hasManagementAccounts: true,
          hasTaxClearance: true
        },
        regStatus: "pending",
        score: "8"
      }
      this.farmService.addfarmsregRequest(farm)
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
