import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  checkPasswordStrength(password: string): string {
    let pass: string = ''
    if (!password) {
      return '';
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

      if (hasLetters || hasNumbers || hasSymbols) {
        pass = 'easy'
      }
      if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        pass = 'medium'
      }
      if (hasLetters && hasNumbers && hasSymbols) {
        pass = 'strong'
      }
      return pass;
    }
  }
}
