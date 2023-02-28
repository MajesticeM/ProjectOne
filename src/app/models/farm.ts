import { Business } from "./business";
import { FileDocument } from "./file-document";
import { FinancialCompliance } from "./financial-compliance";
import { TrainingDevelopment } from "./training-development";


export interface Farm {
    businessType: string
    description: string
    farm_infrastructure: {
        irrigationInfrastructure: string,
        levelOfMachinery: string[],
        mineralProcesses: string[],
        waterAccess: string,
        waterSource: string,
        waterSourceCapacity: string,
        waterSourceSustainability: string
    }
    location: string
    name: string
    profile_picture: string
    registrationNo: string
    training_developments: {
        agriTrainingDone: string[],
        agriTrainingRequired: string[],
        otherTraining: string[]
    }
    financial_acompliance: {
        hasFinancialStatement: boolean,
        hasManagementAccounts: boolean,
        hasTaxClearance: boolean
    }
    regStatus: string
    score: string
    
}

