import {AbstractControl} from "@angular/forms";

export class PasswordValidators {
  static validateOldPassword(control: AbstractControl){
    return new Promise((resolve) => {
      if (control.value == '1234'){
        resolve( null);
      } else {
        resolve({notValid: true});
      }
    });
  }

  static passwordsShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    console.log(newPassword?.value);
    let confirmPassword = control.get('confirmPassword');
    console.log(confirmPassword?.value);
    if (newPassword?.value !== confirmPassword?.value) {
      console.log('do not match');
      return ( { passwordsShouldMatch: true});
    } else {
      console.log('match');
      return (null);
    }


    //
    // return new Promise((resolve) => {
    //   if (newPassword?.value !== confirmPassword?.value) {
    //     console.log('do not match');
    //     resolve( { passwordsShouldMatch: true});
    //   } else {
    //     console.log('match');
    //     resolve(null);
    //   }
    // });
  }
}
