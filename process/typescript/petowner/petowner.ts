import { Component } from '@angular/core';
 
@Component({
  moduleId : module.id,
  selector: 'petowner',
  templateUrl: 'petowner.html'
  ,
})

export class PetOwnerComponent  { 
    firstName : String; 
    lastName  : String;
    clientId  : String;

    constructor(){
      this.firstName = 'Rachid';  
      this.lastName = 'Smith';  
      this.clientId = 'ClII 22'
    }

   doIt(){
     alert('you did it '+ this.firstName);
   }
    
}
