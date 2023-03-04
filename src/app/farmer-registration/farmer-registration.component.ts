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
  YesFarm!:boolean;
  NoFarm!:boolean;
  YesSkill!:boolean;
  NoSkill!:boolean;
  farmStreet!:string;
  FarmMunicipality!:string;
  TypeFarm!:string;
  hectaresAvailable!:string;
  HectaresLeft!:string;
  WaterScale!:string;
  WaterInfrastructureAvailable!:string;
  WaterExtractionInfrastructure!:string;
  WaterDispensingInfrastructure!:string;
  Yield01!:string;
  Yield02!:string;
  Yield03!:string;
  farmAccess!:string;
  NetworkCoverage!:string;
  farmingMethods!:string;
  CertifiedSeedYes!:boolean;
  CertifiedSeedNo!:boolean;
  AgroChemicalsYes!:boolean;
  AgroChemicalsNo!:boolean;
  AgroMachinesYes!:boolean;
  AgroMachinesNo!:boolean;
  WeedManagement!:string;
  diseaseManagement!:string;
  generalHygiene!:string;
  AgroSuppliers!:string;
  technicalSupport!:string;
  logisticsProviders!:string;
  recordKeeping!:string;
  waterLicenseYes!:boolean;
  waterLicenseNo!:boolean;
  LandUsePermitYes!:boolean;
  LandUsePermitNo!:boolean;
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
      var farm = 
      {
        farmName:this.name,
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
        farmerProfile:
        {
          email:this.email,
          cel:this.cel,
          gender:this.gender,
          location: this.address,
          dob:this.dob,
          yo:this.yo,
          YesFarm:this.YesFarm,
          NoFarm:this.NoFarm,
          education:this.education,
          YesSkill:this.YesSkill,
          NoSkill:this.NoSkill,
        },
       FarmProfile:
       {
        FarmMunicipality:this.FarmMunicipality,
        farmStreet:this.farmStreet,
        TypeFarm:this.TypeFarm,
        hectaresAvailable:this.hectaresAvailable,
        HectaresLeft:this.HectaresLeft,
        WaterScale:this.WaterScale,
        WaterInfrastructureAvailable:this.WaterInfrastructureAvailable,
        WaterExtractionInfrastructure:this.WaterExtractionInfrastructure,
        WaterDispensingInfrastructure:this.WaterDispensingInfrastructure,
        Yield01:this.Yield01,
        Yeild02:this.Yield02,
        Yeild03:this.Yield03,
        farmAccess:this.farmAccess,
        NetworkCoverage:this.NetworkCoverage,
       },
       FarmingQualityMethods:
       {
        farmingMethods:this.farmingMethods,
        CertifiedSeedYes:this.CertifiedSeedYes,
        CertifiedSeedNo:this.CertifiedSeedNo,
        AgroChemicalsYes:this.AgroChemicalsYes,
        AgroChemicalsNo:this.AgroChemicalsNo,
        AgroMachinesYes:this.AgroChemicalsYes,
        AgroMachinesNo:this.AgroChemicalsNo,
        WeedManagement:this.WeedManagement,
        diseaseManagement:this.diseaseManagement,
       },
       Access:
       {
        generalHygiene:this.generalHygiene,
        AgroSuppliers:this.AgroSuppliers,
        technicalSupport:this.technicalSupport,
        logisticsProviders:this.logisticsProviders,
       },

       compliance:
       {
        recordKeeping:this.recordKeeping,
        waterLicenseYes:this.waterLicenseYes,
        waterLicenseNo:this.waterLicenseNo,
        LandUsePermitYes:this.LandUsePermitYes,
        LandUsePermitNo:this.LandUsePermitNo,
       },
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
