import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static validadorEmail(control: FormControl): ValidationErrors | null {
    const value: string = control.value;
    const pattern = /^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

    if (!value.match(pattern)) {
      return { email: true };
    }

    return null;
  }
  
}
