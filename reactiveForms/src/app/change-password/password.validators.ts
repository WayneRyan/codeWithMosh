import {AbstractControl} from "@angular/forms";

export class PasswordValidators {
  static validateOldPassword(control: AbstractControl){
    return new Promise((resolve) => {
      if (control.value === '1234'){
        return {validationResult: true};
      } else {
        return null;
      }
    })
  }
}
