import {Component} from '@angular/core';

@Component({
  selector: 'app-pass-field',
  templateUrl: './pass-field.component.html',
  styleUrls: ['./pass-field.component.scss']
})
export class PassFieldComponent {
  password: any = null;
  passwordStrength: string = '';
  showPassword: boolean = false;
  validationMessage: string = '';


  handlePasswordChange() {
    this.checkPasswordStrength();
    this.updateValidationMessage();
  }

  checkPasswordStrength() {
    if (!this.password) {
      this.passwordStrength = ''
    }
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(this.password);

    if (hasLetters || hasNumbers || hasSymbols) {
      this.passwordStrength = 'easy'
    }
    if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      this.passwordStrength = 'medium'
    }
    if (hasLetters && hasNumbers && hasSymbols) {
      this.passwordStrength = 'strong'
    }

  }

  passwordVisibility() {
    this.showPassword = !this.showPassword;
  }

  updateValidationMessage() {
    if (this.password.length > 0 && this.password.length < 8) {
      this.validationMessage = 'Password must be at least 8 characters long.';
    } else {
      this.validationMessage = '';
    }
  }
}
